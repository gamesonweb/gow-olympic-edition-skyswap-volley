import {
    ArcRotateCamera,
    Color3,
    CubeTexture,
    DirectionalLight,
    Engine,
    HemisphericLight,
    MeshBuilder,
    MotionBlurPostProcess,
    PhotoDome,
    Scene,
    ShadowGenerator,
    StandardMaterial,
    Texture,
    Vector3
} from "@babylonjs/core";
import {AbstractPlayer} from "../players/AbstractPlayer";
import {BoardSide} from "../enum/BoardSide";
import {Projectile} from "../Projectile";

import {BallSide} from "../enum/BallSide";
import {GameInfo} from "./GameInfo";
import {SideParticle} from "../particle/SideParticle";
import { Environment } from "../Environment";
import {ImpactParticle} from "../particle/ImpactParticle";
import {FrontendEvent} from "../FrontendEvent";

export enum GameState {
    reinitializing,//The ball is repositioned and the state is put to running.
    running,//player can move la partie est en cours
    pointScored,//players celebrate for 2 seconds then reinitializing
    gameFinished//player immobile
}

export abstract class GameScene{

    protected _scene: Scene;
    protected _leftPlayer: AbstractPlayer;
    protected _rightPlayer: AbstractPlayer;
    protected _ball: Projectile;
    protected _gameState: GameState= GameState.reinitializing;

    protected _gameInfo :GameInfo;

    protected _leftPlayerScore: number = 0;
    protected _rightPlayerScore: number = 0;

    protected _objectivesPoints: number = 2;

    protected _engine: Engine;
    private _particleSystemBallImpact: ImpactParticle;
    private _onEnd: ()=>void;

    constructor(engine: Engine, canvas: HTMLCanvasElement, scene: Scene, leftPlayer: AbstractPlayer, rightPlayer: AbstractPlayer, gamInfo: GameInfo,onEnd : ()=>void) {
        this._engine = engine;
        this._gameInfo = gamInfo;
        this._leftPlayer = leftPlayer;
        this._rightPlayer = rightPlayer;
        this._onEnd = onEnd;

        //create scene
        this._scene = scene;

        // Skybox
        new PhotoDome(
            "dome",
            "/assets/background.jpg",
            {
                resolution: 64,
                size: 1000
            },
            this._scene
        );

        const backLeftBuilding = Environment.instance.getBuilding("large_building_2.glb");
        backLeftBuilding.scaling.scaleInPlace(5)
        backLeftBuilding.position.x = -7;
        backLeftBuilding.position.z = -10.5;
        backLeftBuilding.rotation.y = Math.PI / -2;

        const middleBuilding = Environment.instance.getBuilding("building2.glb");
        middleBuilding.position.x = -6;
        middleBuilding.position.z = 0;
        middleBuilding.rotation.y = Math.PI / -2;

        const backRightBuilding = Environment.instance.getBuilding("large_building.glb");
        backRightBuilding.scaling.scaleInPlace(6);
        backRightBuilding.position.x = -6.5;
        backRightBuilding.position.z = 11.5;
        backRightBuilding.rotation.y = Math.PI / -2

        const rightBuilding = Environment.instance.getBuilding("tall_building.glb");
        rightBuilding.scaling.scaleInPlace(6);
        rightBuilding.position.z = 10.6
        rightBuilding.rotation.y = Math.PI / 2

        const leftBuilding = Environment.instance.getBuilding("left_building.glb");
        leftBuilding.scaling.scaleInPlace(6);
        leftBuilding.position.x = 2
        leftBuilding.position.z = -12.7
        leftBuilding.rotation.y = Math.PI / -2

        // Eclairage et ombres
        const directionalLight = new DirectionalLight(
            "point-light",
            new Vector3(-3, -7, 1),
            this._scene
        );
        // directionalLight.diffuse = new Color3(255, 161, 72);
        directionalLight.position = new Vector3(5, 7, 0);
        directionalLight.intensity = 0.5;

        const shadowGenerator = new ShadowGenerator(512, directionalLight);
        shadowGenerator.useExponentialShadowMap = true;

        leftPlayer.registerToShadowGenerator(shadowGenerator)
        rightPlayer.registerToShadowGenerator(shadowGenerator)

        const hemisphericLight = new HemisphericLight(
            "hemispheri-light",
            new Vector3(9, 1, 0),
            this._scene
        );
        hemisphericLight.intensity = 0.5;

        // Le sol
        const ground = MeshBuilder.CreateGround(
            "ground",
            { width: 5, height: 15 },
            this._scene
        );
        ground.receiveShadows = true;
        ground.position.y = 0;
        const groundMaterial = new StandardMaterial(
            "groundMaterial",
            this._scene
        );
        groundMaterial.diffuseColor = new Color3(0.5, 0.8, 0.5);
        ground.material = groundMaterial;

        // Le mur
        const newWall = Environment.instance.wall
        newWall.position.z = 0.07
        newWall.scaling.y = 4
        newWall.scaling.z = 9

        newWall.getChildMeshes().forEach((m) => m.receiveShadows = true)
        newWall.parent = ground;

        //create ball
        this._ball = new Projectile(this._scene, this._gameInfo, shadowGenerator);
        this._ball.resetPosition(BallSide.middle);

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

        this._particleSystemBallImpact = new ImpactParticle(
            this._scene
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


        // Pour déplacer la camera en fonction de la position de la balle
        // this._ball.setBallPositionUpdate((x, y) => {
        //     camera.target.z = x * 0.05;
        //     camera.target.y = y * 0.05 + 3;
        //     camera.radius = Math.max(16 + Math.exp(y / 10), 16)
        // })
        this._ball.resetPosition(BallSide.middle);

        scene.registerBeforeRender(() => {
            camera.target = Vector3.Lerp(camera.target, new Vector3(camera.target.x, this._ball.y * 0.08 + 3, this._ball.x * 0.08), 0.05)
        })



        // var mb = new MotionBlurPostProcess('mb', scene, 1.0, camera);
        // mb.motionStrength = 5;

        // this._clientNetInterface.setEventPositionUpdateListener((value) => {
        //     this._rightPlayer.x = -value.x;
        //     this._rightPlayer.y = value.y;
        // });


        FrontendEvent.onGameStart(this._objectivesPoints);
    }

    sleep(n: number) {
        if (n <= 0) return;
        for (let i = Date.now(); Date.now() < i + n; );
    }

    frameCount = 0;
    lastUpdate = Date.now();
    timeBetweenUpdates = 40;
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
        // this.sleep(100);
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

        //if frame count is a multiple of 10

    }

    protected abstract running(): void;


    private reinitialize() {
        if (this._leftPlayerScore>=this._objectivesPoints){
            this.finishGame();
            return;
        }
        if (this._rightPlayerScore>=this._objectivesPoints){
            this.finishGame();
            return;
        }


        this._leftPlayer.resetPosition();
        this._rightPlayer.resetPosition();

        this._ball.isStatic=true;

        this._gameState=GameState.running;

    }

    private endRound(): void {
        this._gameState=GameState.reinitializing;

    }

    protected checkBallGoal(): BoardSide | null {
        if (this._ball._y<0){
            if (this._ball._x<0) {
                return BoardSide.Right;
            }else{
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
    protected onPointScored(ballSide: BallSide) {
        if (ballSide===BallSide.left){
            this._leftPlayerScore++;
            FrontendEvent.onGamePointScoredLeft(this._leftPlayerScore);
        }
        if (ballSide===BallSide.right){
            this._rightPlayerScore++;
            FrontendEvent.onGamePointScoredRight(this._rightPlayerScore);
        }
        setTimeout(() => {
            this.onPointScoredFinished();
            this._gameState=GameState.reinitializing;
            this._ball.isShootAllowed=true;
        }, 1000);


        this._particleSystem.start();
        this._particleSystem2.start();
        this._particleSystemBallImpact.start(this._ball.x,this._ball.y);
    }
    private onPointScoredFinished() {
        //create particle system

        this._particleSystem.stop();
        this._particleSystem2.stop();
    }

    private pointScored() {

    }

    private finishGame() {
        this._gameState=GameState.gameFinished;
        setTimeout(() => {
            this._engine.stopRenderLoop();
            this._scene.dispose();
            FrontendEvent.onGameEnd(this._leftPlayerScore, this._rightPlayerScore);
            this._onEnd();
        }, 1000);

    }

    private gameFinished() {

    }
}
