import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Vector3 } from "babylonjs";

import {AbstractPlayer} from "./players/AbstractPlayer";
import {BoardSide} from "./enum/BoardSide";
import {GameScene} from "./scene/GameScene";

enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

export class AppOne {
    private engine: Engine;
    private scene: GameScene;




    private _state: State = State.START;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });

        this.scene = new GameScene(this.engine, this.canvas);

        // Mouvements (tests)
    }

    debug(debugOn: boolean = true) {
        if (debugOn) {
            this.scene.scene.debugLayer.show({ overlay: true });
        } else {
            this.scene.scene.debugLayer.hide();
        }
    }

    run() {
        this.debug(false);

        this.engine.runRenderLoop(() => {

            this.scene.runRenderLoop();
        });
    }
}