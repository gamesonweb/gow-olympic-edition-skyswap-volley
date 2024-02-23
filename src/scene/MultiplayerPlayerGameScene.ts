import {GameScene, GameState} from "./GameScene";
import {Engine, MeshBuilder, Scene} from "@babylonjs/core";
import {ClientNetInterface} from "../networking/ClientNetInterface";
import {DistantPlayer} from "../players/DistantPlayer";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {ClientPlayer} from "../players/ClientPlayer";
import {BoardSide} from "../enum/BoardSide";
import {GameInfo} from "./GameInfo";
import {BallSide} from "../enum/BallSide";
import {Environment} from "../Environment";

export class MultiplayerPlayerGameScene extends GameScene{

    private _clientNetInterface: ClientNetInterface;
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene) {
        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z")
        let _leftPlayer = new ClientPlayer(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5")
        let _rightPlayer = new DistantPlayer(3.5,3,"!right", BoardSide.Right, scene, _playerInput, playerKeyMapping2, Environment.instance.rightPlayer,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo)

        this._leftPlayer.projectile = this._ball;
        this._rightPlayer.projectile = this._ball;

        this._clientNetInterface = new ClientNetInterface();

        this._ball.ballShootListener = (x: number, y: number, xVelocity: number, yVelocity: number) => {
            this._clientNetInterface.sendBallUpdate(x, y, xVelocity, yVelocity);
        };

        this._clientNetInterface.setEventPositionUpdateListener((value) => {
            if (this._rightPlayer instanceof DistantPlayer){
                this._rightPlayer.resivePosition(value.x, value.y, value.eventList);
            }
        });

        this._clientNetInterface.setBallBallUpdate((value) => {
            console.log("receive ball update", value);
            this._ball.resivePosition(value.x, value.y, value.xVelocity, value.yVelocity);
        });
        this._clientNetInterface.setReset((value: BallSide) => {
            console.log("receive reset", value);
            this._gameState=GameState.pointScored;
            this._ball.isStatic=true;
            // players celebrate for 2 seconds
            // ajour une tach dans 2s pour reinitialiser
            this._leftPlayerScore++;

            this.onPointScored();
            this._ball.resetPosition(BallSide.right);
        });
    }

    public runRenderLoop() {
        super.runRenderLoop();
        if (Date.now() - this.lastUpdate > this.timeBetweenUpdates) {
            this.lastUpdate = Date.now();
            this._clientNetInterface.sendPositionUpdate(-this._leftPlayer.x, this._leftPlayer.y, this._leftPlayer.eventList);
            if (this._ball.x>0){
                // this._clientNetInterface.sendBallUpdate(-this._ball.x, this._ball.y, -this._ball.xVelocity, this._ball.yVelocity);
            }
        }
    }
    protected running() {
        switch (this.checkBallGoal()){
            case BoardSide.Left:
                // this._gameState=GameState.pointScored;
                // this._ball.isStatic=true;
                // // players celebrate for 2 seconds
                // // ajour une tach dans 2s pour reinitialiser
                // this._leftPlayerScore++;
                //
                // this.onPointScored();
                // this._ball.resetPosition(BallSide.right);


                break;
            case BoardSide.Right:
                this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser
                this._rightPlayerScore++;

                this.onPointScored();
                this._ball.resetPosition(BallSide.left);
                this._clientNetInterface.sendReset(BallSide.left);


                break;
            default:
                break;
        }
    }
}