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
import {Api} from "./networking/Api";
import {KeyMapping} from "./interface/KeyMapping";
import {BotPlayerDumb} from "./players/BotPlayer";

enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

export class AppOne {
    private engine: Engine;
    private scene: GameScene | undefined;

    private debug: boolean = false;

    private multiplayer: boolean = false;




    private _state: State = State.START;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });

        let scene = new Scene(this.engine);
        // new KeyMapping().listenToFirstKeyPress();

        new Environment(scene);
        Environment.instance.init().then(() => {
            if (this.multiplayer) {
                this.runMultiplayerGame(scene);
            }else {
                this.runSinglePlayerGame(scene);
            }


        });


    }
    runMultiplayerGame(scene: Scene) {
        Api.startMatchMaking((room) => {
            this.scene = new MultiplayerPlayerGameScene(this.engine, this.canvas, scene, room, () => {});
            // Debug
            if (this.debug)
                Inspector.Show(this.scene.scene, {})

            this.engine.runRenderLoop(() => {

                this.scene?.runRenderLoop();
            });
        });
    }
    runSinglePlayerGame(scene: Scene) {
        this.scene = new SinglePlayerGameScene(this.engine, this.canvas, scene, () => {}, ClientPlayer, BotPlayerDumb);
        // Debug
        if (this.debug)
            Inspector.Show(this.scene.scene, {})
        this.engine.runRenderLoop(() => {
            this.scene?.runRenderLoop();
        });
    }
}