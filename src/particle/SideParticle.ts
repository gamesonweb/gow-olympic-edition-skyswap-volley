import {Color4, ParticleSystem, Scene, Texture, Vector3} from "@babylonjs/core";
import {GameInfo} from "../scene/GameInfo";
import {BoardSide} from "../enum/BoardSide";

export class SideParticle{
    _particleSystem: ParticleSystem;
    _scene: Scene;
    _gameInfo: GameInfo;
    _boardSide: BoardSide;

    constructor(scene: Scene, gameInfo: GameInfo, boardSide:BoardSide) {
        this._boardSide = boardSide;
        this._scene = scene;
        this._gameInfo = gameInfo;

        // Créer un système de particules
        this._particleSystem = new ParticleSystem("particles", 2000, this._scene);

// // Texture des particules
        this._particleSystem.particleTexture = new Texture("textures/spark.png", this._scene); // Remplacez par votre texture d'étincelles

// Position d'où les particules sont émises
        if (this._boardSide === BoardSide.Right) {
            this._particleSystem.emitter = new Vector3(2, -2, this._gameInfo._terrainHeight);
        } else {
            this._particleSystem.emitter = new Vector3(2, -2,- this._gameInfo._terrainHeight);
        }

// Couleurs des particules
        this._particleSystem.color1 = new Color4(1, 1, 1.0, 1.0);
        this._particleSystem.color2 = new Color4(1, 1, 1.0, 1.0);
        this._particleSystem.colorDead = new Color4(0, 0, 0, 1.0);

// Taille des particules
        this._particleSystem.minSize = 0.01; // Réduisez la taille pour un effet d'étincelle
        this._particleSystem.maxSize = 0.1; // Réduisez la taille pour un effet d'étincelle

// Durée de vie des particules
        this._particleSystem.minLifeTime = 0.1; // Réduisez la durée de vie pour un effet d'étincelle
        this._particleSystem.maxLifeTime = 1.5; // Réduisez la durée de vie pour un effet d'étincelle

// Emission rate
        this._particleSystem.emitRate = 5000; // Augmentez le taux d'émission pour un effet d'étincelle

        // Gravité des particules
        this._particleSystem.gravity = new Vector3(0, -9.81, 0);

        let direction1: Vector3;
        let direction2: Vector3;
// Forme d'émission
        if (this._boardSide === BoardSide.Right) {
            direction1 = new Vector3(-5, 10, -5);
            direction2 = new Vector3(-1, 0, -1);
        }else {
            direction1 = new Vector3(-5, 10, 5);
            direction2 = new Vector3(-1, 0, 1);
        }

        this._particleSystem.createBoxEmitter(direction1, direction2, new Vector3(0, 2, 0), new Vector3(0, 2, 0));


    }

    public start() {
        this._particleSystem.start();
    }

    public stop() {
        this._particleSystem.stop();
    }
}