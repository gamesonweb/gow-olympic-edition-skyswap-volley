import {GameScene, GameState} from "./GameScene";
import {Engine, Mesh, Scene} from "@babylonjs/core";

import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {ClientPlayer} from "../players/ClientPlayer";
import {BoardSide} from "../enum/BoardSide";
import {GameInfo} from "./GameInfo";
import {BallSide} from "../enum/BallSide";
import {Environment} from "../Environment";
import {BotPlayerDumb} from "../players/BotPlayerDumb.ts";
import {BotPlayerPowerfulHitter} from "../players/BotPlayerPowerfulHitter.ts";
import {BotPlayerStrong} from "../players/BotPlayerStrong.ts";
import {KeyMappingInterface} from "../interface/KeyMappingInterface.ts";

export class SinglePlayerGameScene extends GameScene{

    /**
     * Crée une nouvelle instance de la classe SinglePlayerGameScene.
     *
     * @param {Engine} engine - L'instance du moteur de jeu.
     * @param {HTMLCanvasElement} canvas - L'élément canvas sur lequel le jeu est rendu.
     * @param {Scene} scene - L'instance de la scène de jeu.
     * @param {() => void} onEnd - Une fonction callback qui est appelée lorsque le jeu se termine.
     * @param {typeof ClientPlayer} LeftPlayerClass - La classe du joueur de gauche. Doit extends ClientPlayer.
     * @param {typeof ClientPlayer} RightPlayerClass - La classe du joueur de droite. Doit extends ClientPlayer.
     *
     * @example
     * const game = new SinglePlayerGameScene(engine, canvas, scene, () => console.log('Game Over'), ClientPlayer, ClientPlayer);
     */
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene, onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void, LeftPlayerClass: typeof ClientPlayer, RightPlayerClass: typeof ClientPlayer) {
        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = KeyMappingInterface._instance.playerLeftKeyMapping;
        let _leftPlayer = new LeftPlayerClass(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = KeyMappingInterface._instance.playerRightKeyMapping;
        let prefix = "!right";
        let mesh= null;
        switch (RightPlayerClass){
            case ClientPlayer:
                mesh = Environment.instance.rightPlayer;
                prefix = "!right";
                break;
            case BotPlayerDumb:
                mesh = Environment.instance.botEasy;
                prefix = "!botEasy";
                break;
            case BotPlayerPowerfulHitter:
                mesh = Environment.instance.botMedium;
                prefix = "!botMedium";
                break;
            case BotPlayerStrong:
                mesh = Environment.instance.botHard;
                prefix = "!botHard";
                break;
        }
        if (mesh == null){
            throw new Error("mesh is null");
        }


        let _rightPlayer = new RightPlayerClass(3.5,3,prefix, BoardSide.Right, scene, _playerInput, playerKeyMapping2, mesh,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo,onEnd);

        this._leftPlayer.projectile = this._ball;
        this._rightPlayer.projectile = this._ball;
        setTimeout(()=>{
            if (_rightPlayer instanceof BotPlayerStrong){
                _rightPlayer.startMouvement();
            }
        },1500);
    }

    protected running() {
        if (this._gamePaused) {
            return;
        }

        switch (this.checkBallGoal()){
            case BoardSide.Left:
                this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser

                this.onPointScored(BallSide.left);
                this._ball.resetPosition(BallSide.right);


                break;
            case BoardSide.Right:
                this._gameState=GameState.pointScored;
                this._ball.isStatic=true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser

                this.onPointScored(BallSide.right);
                this._ball.resetPosition(BallSide.left);


                break;
            default:
                break;
        }
    }
}