import {GameScene, GameState} from "./GameScene";
import {Engine, MeshBuilder, Scene} from "@babylonjs/core";
import {AbstractPlayer} from "../players/AbstractPlayer";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {ClientPlayer} from "../players/ClientPlayer";
import {BoardSide} from "../enum/BoardSide";
import {GameInfo} from "./GameInfo";
import {BallSide} from "../enum/BallSide";
import {Environment} from "../Environment";

export class SinglePlayerGameScene extends GameScene{
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene) {
        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z")
        let _leftPlayer = new ClientPlayer(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5")
        let _rightPlayer = new ClientPlayer(3.5,3,"!right", BoardSide.Right, scene, _playerInput, playerKeyMapping2, Environment.instance.rightPlayer,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo)

        this._leftPlayer.projectile = this._ball;
        this._rightPlayer.projectile = this._ball;


    }

    protected running() {
        switch (this.checkBallGoal()){
            case BoardSide.Left:
                this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser
                this._leftPlayerScore++;

                this.onPointScored();
                this._ball.resetPosition(BallSide.right);


                break;
            case BoardSide.Right:
                this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser
                this._rightPlayerScore++;

                this.onPointScored();
                this._ball.resetPosition(BallSide.left);


                break;
            default:
                break;
        }
    }
}