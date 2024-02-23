import {Color4, ParticleSystem, Scene, Texture, Vector3} from "@babylonjs/core";
import {GameInfo} from "../scene/GameInfo";
import {BoardSide} from "../enum/BoardSide";

export class SideParticle {
    _particleSystem: ParticleSystem;
    _scene: Scene;
    _gameInfo: GameInfo;
    _boardSide: BoardSide;
    _power: number = 5;


    constructor(scene: Scene, gameInfo: GameInfo, boardSide: BoardSide) {
        this._boardSide = boardSide;
        this._scene = scene;
        this._gameInfo = gameInfo;
        var json = {
            "name": "CPU particle system",
            "id": "default system",
            "capacity": 10000,
            "disposeOnStop": false,
            "manualEmitCount": -1,
            "emitter": [0, 0, 0],
            "particleEmitterType": {
                "type": "ConeParticleEmitter",
                "radius": 0.1,
                "angle": 0.7853981633974483,
                "directionRandomizer": 0,
                "radiusRange": 1,
                "heightRange": 1,
                "emitFromSpawnPointOnly": false
            },
            "texture": {
                "tags": null,
                "url": "https://assets.babylonjs.com/textures/flare.png",
                "uOffset": 0,
                "vOffset": 0,
                "uScale": 1,
                "vScale": 1,
                "uAng": 0,
                "vAng": 0,
                "wAng": 0,
                "uRotationCenter": 0.5,
                "vRotationCenter": 0.5,
                "wRotationCenter": 0.5,
                "homogeneousRotationInUVTransform": false,
                "isBlocking": true,
                "name": "https://assets.babylonjs.com/textures/flare.png",
                "hasAlpha": false,
                "getAlphaFromRGB": false,
                "level": 1,
                "coordinatesIndex": 0,
                "optimizeUVAllocation": true,
                "coordinatesMode": 0,
                "wrapU": 1,
                "wrapV": 1,
                "wrapR": 1,
                "anisotropicFilteringLevel": 4,
                "isCube": false,
                "is3D": false,
                "is2DArray": false,
                "gammaSpace": true,
                "invertZ": false,
                "lodLevelInAlpha": false,
                "lodGenerationOffset": 0,
                "lodGenerationScale": 0,
                "linearSpecularLOD": false,
                "isRenderTarget": false,
                "animations": [],
                "invertY": true,
                "samplingMode": 3,
                "_useSRGBBuffer": false,
                "noMipmap": false
            },
            "isLocal": false,
            "animations": [],
            "beginAnimationOnStart": false,
            "beginAnimationFrom": 0,
            "beginAnimationTo": 60,
            "beginAnimationLoop": false,
            "startDelay": 0,
            "renderingGroupId": 0,
            "isBillboardBased": true,
            "billboardMode": 7,
            "minAngularSpeed": 0,
            "maxAngularSpeed": 0,
            "minSize": 0.1,
            "maxSize": 0.1,
            "minScaleX": 2,
            "maxScaleX": 2,
            "minScaleY": 0.5,
            "maxScaleY": 0.5,
            "minEmitPower": 2,
            "maxEmitPower": 2,
            "minLifeTime": 0.83,
            "maxLifeTime": 1.76,
            "emitRate": 30,
            "gravity": [0, 0, 0],
            "noiseStrength": [10, 10, 10],
            "color1": [1, 0.9725490196078431, 0, 1],
            "color2": [1, 0, 0, 1],
            "colorDead": [1, 1, 1, 0],
            "updateSpeed": 0.016666666666666666,
            "targetStopDuration": 0,
            "blendMode": 0,
            "preWarmCycles": 0,
            "preWarmStepOffset": 1,
            "minInitialRotation": 0,
            "maxInitialRotation": 0,
            "startSpriteCellID": 0,
            "spriteCellLoop": true,
            "endSpriteCellID": 0,
            "spriteCellChangeSpeed": 1,
            "spriteCellWidth": 0,
            "spriteCellHeight": 0,
            "spriteRandomStartCell": false,
            "isAnimationSheetEnabled": false,
            "useLogarithmicDepth": false,
            "textureMask": [1, 1, 1, 1],
            "customShader": null,
            "preventAutoStart": false
        }

        this._particleSystem = ParticleSystem.Parse(json, scene, "")
        this._particleSystem.emitRate = 300


        // Position d'où les particules sont émises
        if (this._boardSide === BoardSide.Right) {
            this._particleSystem.emitter = new Vector3(2, -2, this._gameInfo._terrainHeight);
            this._particleSystem.maxAngularSpeed = 1;
            this._particleSystem.minAngularSpeed = 1;
            this._particleSystem.minInitialRotation = 15;
            this._particleSystem.maxInitialRotation = 15;
        } else {
            this._particleSystem.emitter = new Vector3(2, -2, -this._gameInfo._terrainHeight);
            this._particleSystem.maxAngularSpeed = -1;
            this._particleSystem.minAngularSpeed = -1;
            this._particleSystem.minInitialRotation = -15;
            this._particleSystem.maxInitialRotation = -15;

        }


        // Gravité des particules
        this._particleSystem.gravity = new Vector3(0, -9.81, 0);

        let direction1: Vector3;
        let direction2: Vector3;
// Forme d'émission
        if (this._boardSide === BoardSide.Right) {
            direction1 = new Vector3(-5, 10, -5);
            direction2 = new Vector3(-1, 0, -1);
        } else {
            direction1 = new Vector3(-5, 10, 5);
            direction2 = new Vector3(-1, 0, 1);
        }
        direction1.normalize();
        direction2.normalize();

        //muliplier par 2 les vecteurs pour donner plus de force

        direction1.scaleInPlace(this._power);
        direction2.scaleInPlace(this._power);


        this._particleSystem.createBoxEmitter(direction1, direction2, new Vector3(0, 2, 0), new Vector3(0, 2, 0));
        this.stop()


    }

    public start() {
        this._particleSystem.start();
    }

    public stop() {
        this._particleSystem.stop();
    }
}