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
import {BotPlayerDumb} from "../players/BotPlayer";

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
    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene, onEnd : ()=>void, LeftPlayerClass: typeof ClientPlayer, RightPlayerClass: typeof ClientPlayer) {
        let gameInfo = new GameInfo()

        //create player
        let _playerInput = new PlayerInput(scene);
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        let _leftPlayer = new LeftPlayerClass(-3.5,3,"!left", BoardSide.Left, scene, _playerInput,playerKeyMapping,Environment.instance.leftPlayer,gameInfo);

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5");
        let _rightPlayer = new RightPlayerClass(3.5,3,"!right", BoardSide.Right, scene, _playerInput, playerKeyMapping2, Environment.instance.rightPlayer,gameInfo);
        super(engine,canvas,scene,_leftPlayer,_rightPlayer,gameInfo,onEnd)

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