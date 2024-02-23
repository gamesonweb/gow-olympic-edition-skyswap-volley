import {Engine, MeshBuilder, Scene} from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import { Inspector } from '@babylonjs/inspector';
import {AbstractPlayer} from "./players/AbstractPlayer";
import {BoardSide} from "./enum/BoardSide";

import {Environment} from "./Environment";
import {SinglePlayerGameScene} from "./scene/SinglePlayerGameScene";
import {GameScene} from "./scene/GameScene";
import {PlayerInput} from "./PlayerInput";
import {PlayerKeyMapping} from "./players/PlayerKeyMapping";
import {ClientPlayer} from "./players/ClientPlayer";
import {MultiplayerPlayerGameScene} from "./scene/MultiplayerPlayerGameScene";

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

            this.scene = new SinglePlayerGameScene(this.engine, this.canvas, scene);
            // Debug
            // Inspector.Show(this.scene.scene, {})
            this.engine.runRenderLoop(() => {

                this.scene?.runRenderLoop();
            });
        })
        // Mouvements (tests)
    }
    run() {

    }
}