import {GameScene, GameState} from "../scene/GameScene.ts";
import {Engine, Scene} from "@babylonjs/core";
import {AbstractPlayer} from "../players/AbstractPlayer.ts";
import {GameInfo} from "../scene/GameInfo.ts";
// Le "ts-ignore" est obligatoire car le module "neat_net-js" n'est pas typé.
// @ts-ignore
import {NEAT, activation, crossover, mutate } from "neat_net-js";
import {PlayerInput} from "../PlayerInput.ts";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping.ts";
import {BoardSide} from "../enum/BoardSide.ts";
import {Environment} from "../Environment.ts";
import {ClientPlayer} from "../players/ClientPlayer.ts";
import {FrontendEvent} from "../FrontendEvent.ts";
import {BallSide} from "../enum/BallSide.ts";
import {NeatCreature} from "./NeatCreature.ts";
import {BotStrong} from "../players/BotStrong.ts";

export class TrainingGameScene extends GameScene {
    _leftNeat: NeatCreature;
    _rightNeat: NeatCreature;
    _indexLeft:number =0;
    _indexRight:number =1;
    _neat: NEAT;
    _neatCreatures: NeatCreature[] = [];
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene, onEnd : ()=>void, LeftPlayerClass: typeof ClientPlayer, RightPlayerClass: typeof ClientPlayer) {

        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        let _leftPlayer = new BotStrong(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5");
        let _rightPlayer = new BotStrong(3.5,3,"!right", BoardSide.Right, scene, _playerInput, playerKeyMapping2, Environment.instance.rightPlayer,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo,onEnd)
        this._leftPlayer.projectile = this._ball;
        this._rightPlayer.projectile = this._ball;

        let config = {
            model: [
                {nodeCount: 8, type: "input"},
                {nodeCount: 3, type: "output", activationfunc: activation.RELU}
            ],
            mutationRate: 0.05,
            crossoverMethod: crossover.RANDOM,
            mutationMethod: mutate.RANDOM,
            populationSize: 10
        };



        this._neat = new NEAT(config);
        for (let i = 0; i < config.populationSize; i++) {
            this._neatCreatures.push(new NeatCreature(i,this._neat));
        }
        this._leftNeat = this._neatCreatures[this._indexLeft];
        this._rightNeat = this._neatCreatures[this._indexRight];
        // this._neat.doGen();

        let callback = (winNeatCreature:NeatCreature | null)=>{



            if (winNeatCreature === null) {
                // console.log("null");
            }
            if (winNeatCreature === this._leftNeat) {
                this._leftNeat.fitness += 1;
            }else if (winNeatCreature === this._rightNeat) {
                this._rightNeat.fitness += 1;
            }

            if (this._indexRight < this._neatCreatures.length - 1){
                this._indexRight++;
            }else {
                this._indexRight = 0;
                if (this._indexLeft < this._neatCreatures.length - 1){
                    this._indexLeft++;
                }else {
                    this._indexLeft = 0;
                }
            }

            if (this._indexLeft === 0 && this._indexRight === 0){
                for (let i = 0; i < this._neatCreatures.length; i++) {
                    this._neatCreatures[i].setFitness();
                }
                console.log(this._neatCreatures);
                this._neat.doGen();
                this._neatCreatures = [];
                for (let i = 0; i < config.populationSize; i++) {
                    this._neatCreatures.push(new NeatCreature(i, this._neat));
                }
            }

            console.log(this._indexLeft + " " + this._indexRight);

            this.duel(this._neatCreatures[this._indexLeft],this._neatCreatures[this._indexRight],callback);
        };


        this.duel(this._leftNeat,this._rightNeat,callback);
    }
    private _endGameTime: number = 0;
    protected running() {
        this._endGameTime--;

        if (this._endGameTime <= 0){
            this.winner(null);
            return;
        }


        switch (this.checkBallGoal()){
            case BoardSide.Left:
                // this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser

                // this.onPointScored(BallSide.left);
                this.winner(BoardSide.Left);
                // this._ball.resetPosition(BallSide.right);


                break;
            case BoardSide.Right:
                // this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser

                // this.onPointScored(BallSide.right);
                this.winner(BoardSide.Right);
                // this._ball.resetPosition(BallSide.left);


                break;
            default:
                break;
        }

        if (this._leftPlayer instanceof BotStrong){
            this._leftNeat.setInputs(this._leftPlayer.getInputsNeatVector());
        }
        if (this._rightPlayer instanceof BotStrong){
            this._rightNeat.setInputs(this._rightPlayer.getInputsNeatVector());
        }
        this._neat.feedForward();
        if (this._leftPlayer instanceof BotStrong){
            this._leftPlayer.handleNeatVector(this._leftNeat.getDesicions());

        }
        if (this._rightPlayer instanceof BotStrong){
            this._rightPlayer.handleNeatVector(this._rightNeat.getDesicions());
        }


    }
    private _winnerCallBack: (winNeatCreature:NeatCreature | null)=>void = (winNeatCreature:NeatCreature | null)=>{};
    private duel(neatCreature1:NeatCreature,neatCreature2:NeatCreature, callBack:(winNeatCreature:NeatCreature | null)=>void){
        this._endGameTime = 1000;
        this._leftNeat = neatCreature1;
        this._rightNeat = neatCreature2;
        this._winnerCallBack = callBack;
        this._gameState=GameState.running;

    }

    private winner(boardSide: BoardSide | null) {
        // console.log("Winner is " + boardSide);
        let random = Math.floor(Math.random() * 3);
        this._ball.resetPosition(random);

        this._leftPlayer.resetPosition();
        this._rightPlayer.resetPosition();
        if (boardSide === BoardSide.Left) {
            this._winnerCallBack(this._leftNeat);
        }else if (boardSide === BoardSide.Right) {
            this._winnerCallBack(this._rightNeat);
        }else {
            this._winnerCallBack(null);
        }



    }


    protected override finishGame() {
        // console.log("Game Over");

    }
}
