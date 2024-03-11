import {Engine, Scene} from "@babylonjs/core";
// import "@babylonjs/core/Debug/debugLayer";
// import { Inspector } from '@babylonjs/inspector';


import {Environment} from "./Environment";
import {SinglePlayerGameScene} from "./scene/SinglePlayerGameScene";
import {GameScene} from "./scene/GameScene";

import {ClientPlayer} from "./players/ClientPlayer";
import {MultiplayerPlayerGameScene} from "./scene/MultiplayerPlayerGameScene";
import {Api} from "./networking/Api";
import {BotPlayerDumb} from "./players/BotPlayer";
import {PlayerType, TypeOfGame} from "./enum/TypeOfGame";
import {Room} from "colyseus.js";
import {BotPlayerPowerfulHitter} from "./players/BotPlayerPowerfulHitter.ts";

enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

export class AppOne {
    private engine: Engine;
    private gameScene: GameScene | undefined;

    private _state: State = State.START;

    private _scene: Scene | undefined;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

    async init() {
        this._scene = new Scene(this.engine);
        Environment.createInstance(this._scene);
        await Environment.instance.init();
    }



    runMultiplayerGame(room: Room) {
        this.gameScene = new MultiplayerPlayerGameScene(this.engine, this.canvas, this.scene, room, () => {});
        // Debug
        this.engine.runRenderLoop(() => {

            this.gameScene?.runRenderLoop();
        });
    }


    runSinglePlayerGame(leftPlayerType: PlayerType, rightPlayerType: PlayerType) {
        let leftPlayerClass = this.classFromType(leftPlayerType);
        let rightPlayerClass = this.classFromType(rightPlayerType);





        let callback = () => {
            console.log("Game Over");
        }
        console.log("runSinglePlayerGame");

        this.gameScene = new SinglePlayerGameScene(this.engine, this.canvas, this.scene, callback, leftPlayerClass, rightPlayerClass);
        // Debug
        // Inspector.Show(this.scene, this.engine.getRenderingCanvas());

        console.log("runSinglePlayerGame");
        this.engine.runRenderLoop(() => {
            this.gameScene?.runRenderLoop();
        });

    }

    get scene() {
        if (this._scene === undefined) {
            throw new Error("Scene not initialized");
        }
        return this._scene;
    }

    classFromType(type: PlayerType) {
        switch (type) {
            case PlayerType.PLAYER:
                return ClientPlayer;
            case PlayerType.BOT:
                return BotPlayerDumb;
            case PlayerType.BOT_POWERFUL_HITTER:
                return BotPlayerPowerfulHitter;
        }
    }
}