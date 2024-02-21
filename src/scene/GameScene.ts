import {
    ArcRotateCamera,
    Color3,
    Engine,
    HemisphericLight,
    MeshBuilder,
    Scene,
    StandardMaterial,
    Vector3,
} from "@babylonjs/core";
import { AbstractPlayer } from "../players/AbstractPlayer";
import { BoardSide } from "../enum/BoardSide";
import { Projectile } from "../Projectile";
import { PlayerInput } from "../PlayerInput";
import { PlayerKeyMapping } from "../players/PlayerKeyMapping";
import { BallSide } from "../enum/BallSide";
import { GameInfo } from "./GameInfo";
import { SideParticle } from "../particle/SideParticle";
import { ClientNetInterface } from "../networking/ClientNetInterface";
import { ClientPlayer } from "../players/ClientPlayer";
import { Environment } from "../Environment";

enum GameState {
    reinitializing, //The ball is repositioned and the state is put to running.
    running, //player can move la partie est en cours
    pointScored, //players celebrate for 2 seconds then reinitializing
    gameFinished, //player immobile
}

export class GameScene {
    private _scene: Scene;
    private _leftPlayer: AbstractPlayer;
    private _rightPlayer: AbstractPlayer;
    private _playerInput: PlayerInput;
    private _ball: Projectile;
    private _gameState: GameState = GameState.reinitializing;

    private _gameInfo: GameInfo = new GameInfo();

    private _leftPlayerScore: number = 0;
    private _rightPlayerScore: number = 0;

    private _objectivesPoints: number = 5;

    private _engine: Engine;

    private _clientNetInterface: ClientNetInterface;

    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene) {
        this._engine = engine;

        //create scene
        this._scene = scene;

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight(
            "light",
            new Vector3(0, 1, 0),
            this._scene
        );

        light.intensity = 0.7;

        // Le sol
        const ground = MeshBuilder.CreateGround(
            "ground",
            { width: 5, height: 15 },
            this._scene
        );
        ground.position.y = 0;
        const groundMaterial = new StandardMaterial(
            "groundMaterial",
            this._scene
        );
        groundMaterial.diffuseColor = new Color3(0.5, 0.8, 0.5);
        ground.material = groundMaterial;

        // Le filet
        const frontPole = MeshBuilder.CreateCylinder(
            "front-pole",
            { height: 2, diameter: 0.4 },
            this._scene
        );
        frontPole.position.x = 2;
        frontPole.position.y = 1;

        const backPole = MeshBuilder.CreateCylinder(
            "back-pole",
            { height: 2, diameter: 0.4 },
            this._scene
        );
        backPole.position.x = -2;
        backPole.position.y = 1;

        frontPole.parent = ground;
        backPole.parent = ground;

        // Le mur
        const wall = MeshBuilder.CreateBox("wall", {
            width: 5,
            depth: 0.5,
            height: 2,
        });
        wall.position.y = 1;

        wall.parent = ground;

        //create ball
        this._ball = new Projectile(this._scene, this._gameInfo);
        this._ball.resetPosition(BallSide.middle);

        this._playerInput = new PlayerInput(this._scene);
        //create player
        const playerKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        this._leftPlayer = new ClientPlayer(
            -3.5,
            3,
            "test",
            BoardSide.Left,
            this._scene,
            this._ball,
            this._playerInput,
            playerKeyMapping,
            Environment.instance.player,
            this._gameInfo
        );

        const playerKeyMapping2 = new PlayerKeyMapping("1", "3", "+", "5");
        this._rightPlayer = new ClientPlayer(
            3.5,
            3,
            "test",
            BoardSide.Right,
            this._scene,
            this._ball,
            this._playerInput,
            playerKeyMapping2,
            MeshBuilder.CreateCylinder("right-player"),
            this._gameInfo
        );

        //particle system
        this._particleSystem = new SideParticle(
            this._scene,
            this._gameInfo,
            BoardSide.Left
        );
        this._particleSystem2 = new SideParticle(
            this._scene,
            this._gameInfo,
            BoardSide.Right
        );

        // La camera
        const camera = new ArcRotateCamera(
            "camera",
            0,
            1.1,
            16,
            new Vector3(0, 3, 0),
            this._scene
        );

        // XXX debug
        camera.attachControl(canvas, true);

        this._clientNetInterface = new ClientNetInterface();

        // this._clientNetInterface.setEventPositionUpdateListener((value) => {
        //     this._rightPlayer.x = -value.x;
        //     this._rightPlayer.y = value.y;
        // });
    }

    sleep(n: number) {
        if (n <= 0) return;
        for (let i = Date.now(); Date.now() < i + n; );
    }

    frameCount = 0;
    public runRenderLoop(): void {
        // debug
        // this.frameCount++;
        //
        // let pauseTime;
        // if (this.frameCount%1000>500){
        //     pauseTime = 100;
        // }else {
        //     pauseTime = 0;
        // }
        //
        //
        //
        // console.log(pauseTime);
        //
        // // Planifier la prochaine frame
        // this.sleep(pauseTime);

        switch (this._gameState) {
            case GameState.reinitializing:
                this.reinitialize();
                break;
            case GameState.running:
                this.running();
                this._leftPlayer.update();
                this._rightPlayer.update();
                break;
            case GameState.pointScored:
                this.pointScored();
                break;
            case GameState.gameFinished:
                this.gameFinished();
                break;
        }

        this._scene.render();

        this._ball.update();

        this._clientNetInterface.sendPositionUpdate(
            this._leftPlayer.x,
            this._leftPlayer.y
        );
    }

    private running() {
        switch (this.checkBallGoal()) {
            case BoardSide.Left:
                this._gameState = GameState.pointScored;
                this._ball.isStatic = true;
                // players celebrate for 2 seconds
                // ajour une tach dans 2s pour reinitialiser
                this._leftPlayerScore++;

                this.onPointScored();
                this._ball.resetPosition(BallSide.right);

                break;
            case BoardSide.Right:
                this._gameState = GameState.pointScored;
                this._ball.isStatic = true;
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

    private reinitialize() {
        if (this._leftPlayerScore >= this._objectivesPoints) {
            this._gameState = GameState.gameFinished;
            return;
        }
        if (this._rightPlayerScore >= this._objectivesPoints) {
            this._gameState = GameState.gameFinished;
            return;
        }

        this._leftPlayer.resetPosition();
        this._rightPlayer.resetPosition();

        this._ball.isStatic = true;

        this._gameState = GameState.running;
    }

    private endRound(): void {
        this._gameState = GameState.reinitializing;
    }

    private checkBallGoal(): BoardSide | null {
        if (this._ball._y < 0) {
            this._gameState = GameState.pointScored;
            if (this._ball._x < 0) {
                return BoardSide.Right;
            } else {
                return BoardSide.Left;
            }
        }
        return null;
    }

    public get scene(): Scene {
        return this._scene;
    }
    _particleSystem;
    _particleSystem2;
    private onPointScored() {
        setTimeout(() => {
            this.onPointScoredFinished();
            this._gameState = GameState.reinitializing;
        }, 1000);

        this._particleSystem.start();
        this._particleSystem2.start();
    }
    private onPointScoredFinished() {
        //create particle system

        this._particleSystem.stop();
        this._particleSystem2.stop();
    }

    private pointScored() {
        //todo
    }

    private gameFinished() {
        //todo
    }
}
