import {GameScene, GameState} from "../scene/GameScene.ts";
import {Engine, Scene} from "@babylonjs/core";
import {AbstractPlayer} from "../players/AbstractPlayer.ts";
import {GameInfo} from "../scene/GameInfo";
// Le "ts-ignore" est obligatoire car le module "neat_net-js" n'est pas typé.
// @ts-ignore
import Neataptic from "neataptic/src/neataptic";
let Neat = Neataptic.Neat;
let methods = Neataptic.methods;
let architect = Neataptic.architect;
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {BoardSide} from "../enum/BoardSide";
import {Environment} from "../Environment.ts";
import {ClientPlayer} from "../players/ClientPlayer";
import {FrontendEvent} from "../FrontendEvent.ts";
import {BallSide} from "../enum/BallSide.ts";
import {NeatCreature} from "./NeatCreature.ts";
import {TraingingBot} from "./TraingingBot.ts";
import {BotPlayerDumb} from "../players/BotPlayer.ts";
import {Tournament} from "./Tournament.ts";
import {TournamentSingleContestant} from "./TournamentSingleContestant.ts";

import * as fs from 'fs';

export class TrainingGameScene extends GameScene {
    _leftNeat: NeatCreature;
    _rightNeat: NeatCreature;
    _indexLeft:number =0;
    _indexRight:number =1;
    _neat: Neat;
    _neatCreatures: NeatCreature[] = [];
    _nbEchange: number = 0;
    _lastTutch: BoardSide | null = null;
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene, onEnd : ()=>void, LeftPlayerClass: typeof ClientPlayer, RightPlayerClass: typeof ClientPlayer) {

        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        let _leftPlayer = new TraingingBot(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5");
        let _rightPlayer = new TraingingBot(3.5,3,"!right", BoardSide.Right, scene, _playerInput, playerKeyMapping2, Environment.instance.rightPlayer,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo,onEnd)
        this._leftPlayer.projectile = this._ball;
        this._rightPlayer.projectile = this._ball;

        // let config = {
        //     model: [
        //         {nodeCount: 8, type: "input"},
        //         {nodeCount: 10, type: "hidden", activationfunc: activation.RELU},
        //         {nodeCount: 10, type: "hidden", activationfunc: activation.RELU},
        //         {nodeCount: 3, type: "output", activationfunc: activation.RELU}
        //     ],
        //     mutationRate: 0.3,
        //     crossoverMethod: crossover.RANDOM,
        //     mutationMethod: mutate.RANDOM,
        //     populationSize: 100
        // };

        let PLAYER_AMOUNT = 300;
        let MUTATION_RATE = 0.3;
        let ELITISM_PERCENT = 0.1;
        let START_HIDDEN_SIZE = 0;

        //if model.json exists, load it
        let model = null;
        if (typeof window !== 'undefined' && localStorage){
            if (localStorage.getItem("neat")){

                model = JSON.parse(localStorage.getItem("neat"));
            }
        }


        this._neat = new Neat(
            8,
            3,
            null,
            {
                mutation: methods.mutation.ALL,
                popsize: PLAYER_AMOUNT,
                mutationRate: MUTATION_RATE,
                elitism: Math.round(ELITISM_PERCENT * PLAYER_AMOUNT),
                network: new architect.Random(
                    8,
                    START_HIDDEN_SIZE,
                    3
                )
            }
        );
        if (model){
            this._neat.import(model);
            console.log("loading model");

        }




        // this._neat.doGen();

        // let callback = (winNeatCreature:NeatCreature | null)=>{
        //
        //
        //
        //     if (winNeatCreature === null) {
        //         // console.log("null");
        //     }
        //     if (winNeatCreature === this._leftNeat) {
        //         this._leftNeat.fitness += 1;
        //     }else if (winNeatCreature === this._rightNeat) {
        //         this._rightNeat.fitness += 1;
        //     }
        //
        //     if (this._indexRight < this._neatCreatures.length - 1){
        //         this._indexRight++;
        //     }else {
        //         this._indexRight = 0;
        //         if (this._indexLeft < this._neatCreatures.length - 1){
        //             this._indexLeft++;
        //         }else {
        //             this._indexLeft = 0;
        //         }
        //     }
        //     // if (this._indexLeft < this._neatCreatures.length - 1){
        //     //     this._indexLeft++;
        //     // }else {
        //     //     this._indexLeft = 0;
        //     // }
        //
        //     if (this._indexLeft === 0 && this._indexRight === 0){
        //     // if (this._indexLeft === 0){
        //         for (let i = 0; i < this._neatCreatures.length; i++) {
        //             this._neatCreatures[i].setFitness();
        //         }
        //         console.log(this._neatCreatures);
        //         this._neat.doGen();
        //         console.log(this._neat.export());
        //         localStorage.setItem("neat",JSON.stringify(this._neat.export()));
        //         this._neatCreatures = [];
        //         for (let i = 0; i < config.populationSize; i++) {
        //             this._neatCreatures.push(new NeatCreature(i, this._neat));
        //         }
        //     }
        //
        //     console.log(this._indexLeft + " " + this._indexRight);
        //
        //     this.duel(this._neatCreatures[this._indexLeft],this._neatCreatures[this._indexRight],callback);
        // };


        let then = ()=>{
            let tournament = new TournamentSingleContestant(this._neatCreatures,this);

            tournament.run().then((winner)=>{
                let fitnessTotal=0;
                let bestPerf = 0;
                let indexBestPerf = 0;
                for (let i = 0; i < this._neatCreatures.length; i++) {
                    // console.log(this._neatCreatures[i].fitness);
                    fitnessTotal+=this._neatCreatures[i].fitness;
                    if (this._neatCreatures[i].fitness>bestPerf){
                        bestPerf = this._neatCreatures[i].fitness;
                        indexBestPerf = i;
                    }
                }
                console.log("fitnessTotal",fitnessTotal/this._neatCreatures.length);
                console.log("bestPerf",bestPerf);
                console.log("indexBestPerf",indexBestPerf);

                console.log('Generation:', this._neat.generation);


                this._neat.sort();
                this.saveNeat();
                var newPopulation = [];

                // Elitism
                for(var i = 0; i < this._neat.elitism; i++){
                    newPopulation.push(this._neat.population[i]);
                }

                // Breed the next individuals
                for(var i = 0; i < this._neat.popsize - this._neat.elitism; i++){
                    newPopulation.push(this._neat.getOffspring());
                }

                // Replace the old population with the new population
                this._neat.population = newPopulation;
                this._neat.mutate();

                this._neat.generation++;
                this._neatCreatures = [];
                for (let i = 0; i < PLAYER_AMOUNT; i++) {
                    this._neatCreatures.push(new NeatCreature(this._neat.population[i]));
                }

                // localStorage.setItem("neat",JSON.stringify(this._neat.export()));
                then();

            });
        }
        then()



        // this.duel(this._leftNeat,this._rightNeat,callback);
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
        if (this._leftPlayer.isBallCollidingWithPlayer()) {
            if (this._lastTutch != BoardSide.Left){
                this._nbEchange++;
            }
            this._lastTutch = BoardSide.Left;
        }
        if (this._rightPlayer.isBallCollidingWithPlayer()) {
            if (this._lastTutch != BoardSide.Right){
                this._nbEchange++;
            }
            this._lastTutch = BoardSide.Right;
        }

        if (this._leftPlayer instanceof TraingingBot){
            this._leftPlayer.handleNeatVector(this._leftNeat.activate(this._leftPlayer.getInputsNeatVector()));

        }
        if (this._rightPlayer instanceof TraingingBot){
            this._rightPlayer.handleNeatVector(this._rightNeat.activate(this._rightPlayer.getInputsNeatVector()));
        }


    }
    private _winnerCallBack: (winNeatCreature:NeatCreature | null,nbEchange:number)=>void = (winNeatCreature:NeatCreature | null)=>{};
    public duel(neatCreature1:NeatCreature,neatCreature2:NeatCreature, callBack:(winNeatCreature:NeatCreature | null,nbEchange:number)=>void){
        this._endGameTime = 4000;
        this._nbEchange = 0;
        this._lastTutch = null;
        this._leftNeat = neatCreature1;
        this._rightNeat = neatCreature2;
        this._winnerCallBack = callBack;
        this._gameState=GameState.running;

    }

    private winner(boardSide: BoardSide | null) {
        // console.log("Winner is " + boardSide);
        let random = Math.floor(Math.random() * 3);
        this._ball.resetPosition(BallSide.middle);

        this._leftPlayer.resetPosition();
        this._rightPlayer.resetPosition();
        if (boardSide === BoardSide.Left) {
            this._winnerCallBack(this._leftNeat,this._nbEchange);
        }else if (boardSide === BoardSide.Right) {
            this._winnerCallBack(this._rightNeat,this._nbEchange);
        }else {
            this._winnerCallBack(null,this._nbEchange);
        }



    }


    protected override finishGame() {
        // console.log("Game Over");

    }

    private saveNeat() {
        if (fs.writeFile) {
            let folder = 'neat_models';

            let fitnessTotal = 0;
            let bestPerf = 0;
            let indexBestPerf = 0;
            if (this._neatCreatures[0] === undefined){
                return
            }
            for (let i = 0; i < this._neat.population.length; i++) {
                console.log(this._neat.population[i].score);
                fitnessTotal += this._neatCreatures[i].fitness;
                if (this._neatCreatures[i].fitness > bestPerf) {
                    bestPerf = this._neatCreatures[i].fitness;
                    indexBestPerf = i;
                }
            }
            let neatExport = this._neat.export();
            let neatJson = JSON.stringify(neatExport);
            fs.writeFile(`${folder}/neat_model_generation_${this._neat.generation}_best_${bestPerf}_avg_${fitnessTotal}_index_${indexBestPerf}.json`, neatJson, (err) => {
                if (err) {
                    console.error('Error writing file', err);
                } else {
                    console.log('Successfully wrote file');
                }
            });
        }
    }
}
