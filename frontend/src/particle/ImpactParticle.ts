import {ParticleSystem, Scene, Vector3} from "@babylonjs/core";


export class ImpactParticle {
    _particleSystem: ParticleSystem;
    _scene: Scene;


    constructor(scene: Scene ) {

        this._scene = scene;

        // Utilisez un objet JSON similaire à celui de la classe SideParticle pour configurer le système de particules
        // Vous pouvez ajuster les valeurs pour obtenir l'effet désiré pour les particules d'impact
        var json = {
            "name": "impact particle system",
            "id": "default system",
            "capacity": 10000,
            "disposeOnStop": false,
            "manualEmitCount": -1,
            "emitter": [0, 0, 0],
            "particleEmitterType": {
                "type": "SphereParticleEmitter",
                "radius": 1,
                "radiusRange": 1,
                "directionRandomizer": 1
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
            "minScaleY": 2,
            "maxScaleY": 2,
            "minEmitPower": 10,
            "maxEmitPower": 8,
            "minLifeTime": 0.83,
            "maxLifeTime": 1.76,
            "emitRate": 300,
            "gravity": [0, -9.81, 0],
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

        this._particleSystem = ParticleSystem.Parse(json, scene, "");
        this._particleSystem.emitRate = 3000;

        // Position d'où les particules sont émises
        this._particleSystem.emitter = new Vector3(0, 0, 0);

        // Gravité des particules
        this._particleSystem.gravity = new Vector3(0, -9.81, 0);




        this.stop();

    }

    public start(x: number, y: number) {
        this._particleSystem.emitter = new Vector3(0 ,0, x);
        this._particleSystem.start();
        setTimeout(() => {
            this.stop();
        }, 100);
    }

    public stop() {
        this._particleSystem.stop();
    }
}