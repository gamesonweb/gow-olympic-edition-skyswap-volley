import {Color4, ParticleSystem, Scene, Texture, Vector3} from "@babylonjs/core";
import {BoardSide} from "../enum/BoardSide.ts";


export class DustParticle {
    private _particleSystem: ParticleSystem;
    private _power: number = 1;

    constructor(scene: Scene) {
        var json = {
            "name": "dust particle system",
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
            "minSize": 0.01,
            "maxSize": 0.1,
            "minScaleX": 0.5,
            "maxScaleX": 1.5,
            "minScaleY": 0.5,
            "maxScaleY": 1.5,
            "minEmitPower": 0.1,
            "maxEmitPower": 2,
            "minLifeTime": 0.53,
            "maxLifeTime": 0.76,
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
        this._particleSystem.emitRate = 100;
        this._particleSystem.blendMode = ParticleSystem.BLENDMODE_STANDARD;
        this._particleSystem.particleTexture = new Texture("assets/texture/dust.png", scene);





        // Gravité des particules
        this._particleSystem.gravity = new Vector3(0, -9.81, 0);


        this.stop()
    }

    public start(x:number,y:number, color: Color4, boardSide: BoardSide) {

        let direction1: Vector3;
        let direction2: Vector3;
        if (boardSide === BoardSide.Right) {
            console.log("right");
            direction1 = new Vector3(-1, 10, -1);
            direction2 = new Vector3(-1, 0, -1);
        } else {
            console.log("left");
            direction1 = new Vector3(-1, 10, 1);
            direction2 = new Vector3(-1, 0, 1);
        }


        direction1.normalize();
        direction2.normalize();

        //muliplier par 2 les vecteurs pour donner plus de force

        direction1.scaleInPlace(this._power);
        direction2.scaleInPlace(this._power);
        this._particleSystem.emitter = new Vector3(0 ,y, x);
        color.scaleInPlace(1)
        this._particleSystem.color1 = color;
        this._particleSystem.color2 = new Color4(color.r,color.g,color.b,1);
        this._particleSystem.color2.scaleInPlace(0.5);
        this._particleSystem.colorDead = color;

        this._particleSystem.createBoxEmitter(direction1, direction2, new Vector3(0, 0, 0), new Vector3(0, 0, 0));
        this._particleSystem.start();
        setTimeout(() => {
            this.stop();
        }, 100);
    }

    public stop() {
        this._particleSystem.stop();
    }
}