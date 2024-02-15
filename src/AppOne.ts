import "@babylonjs/core/Debug/debugLayer";
import { Inspector } from '@babylonjs/inspector';
// import "@babylonjs/inspector";

import { Engine } from "@babylonjs/core";

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

        // Debug
        // Inspector.Show(this.scene.scene, {})

        // Mouvements (tests)
    }

    run() {
        this.engine.runRenderLoop(() => {

            this.scene.runRenderLoop();
        });
    }
}