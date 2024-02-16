import {Engine, Scene} from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import { Inspector } from '@babylonjs/inspector';
import {AbstractPlayer} from "./players/AbstractPlayer";
import {BoardSide} from "./enum/BoardSide";
import {GameScene} from "./scene/GameScene";
import {Environment} from "./Environment";

enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

export class AppOne {
    private engine: Engine;
    private scene: GameScene | undefined;




    private _state: State = State.START;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });

        let scene = new Scene(this.engine);

        new Environment(scene);
        Environment.instance.init().then(() => {
            this.scene = new GameScene(this.engine, this.canvas, scene);
            // Debug
            //Inspector.Show(this.scene.scene, {})
            this.engine.runRenderLoop(() => {

                this.scene?.runRenderLoop();
            });
        })
        // Mouvements (tests)
    }
    run() {

    }
}