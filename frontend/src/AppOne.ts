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
import {BotStrong} from "./players/BotStrong.ts";
import {FrontendEvent} from "./FrontendEvent.ts";

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



    runMultiplayerGame(room: Room,onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void) {
        this.gameScene = new MultiplayerPlayerGameScene(this.engine, this.canvas, this.scene, room, onEnd);
        // Debug
        this.engine.runRenderLoop(() => {

            this.gameScene?.runRenderLoop();
        });
    }


    runSinglePlayerGame(leftPlayerType: PlayerType, rightPlayerType: PlayerType,onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void) {
        let leftPlayerClass = this.classFromType(leftPlayerType);
        let rightPlayerClass = this.classFromType(rightPlayerType);

        this.gameScene = new SinglePlayerGameScene(this.engine, this.canvas, this.scene, onEnd, leftPlayerClass, rightPlayerClass);
        // Debug
        // Inspector.Show(this.scene, this.engine.getRenderingCanvas());

        this.engine.runRenderLoop(() => {
            this.gameScene?.runRenderLoop();
        });
    }

    runCampaignGame(onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void) {
        let nbmatch = 0;
        let boucle = (_leftPlayerScore:number,_rightPlayerScore:number) => {
            if (_leftPlayerScore == -1 &&_rightPlayerScore ==-1){
                onEnd(-1,-1);
                return;
            }
            this.init().then(()=> {
                FrontendEvent.onGamePointScoredLeft(0);
                FrontendEvent.onGamePointScoredRight(0);
                nbmatch++;
                switch (nbmatch) {
                    case 1:
                        FrontendEvent.onShowImage("/assets/background.jpg");
                        break;
                    case 2:
                        FrontendEvent.onShowImage("assets/level2.png");
                        break;
                    case 3:
                        FrontendEvent.onShowImage("assets/level3.png");
                        break;

                }
                document.addEventListener("click", () => {
                    FrontendEvent.onMaskImage();

                    switch (nbmatch) {
                        case 1:
                            this.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT, boucle);
                            break;
                        case 2:
                            this.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT_POWERFUL_HITTER, boucle);
                            break;
                        case 3:
                            this.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT_STRONG, boucle);
                            break;
                        case 4:
                            onEnd(0, 0);
                            break;
                    }
                }, {once: true});
            });
        }
        boucle(0,0);


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
            case PlayerType.BOT_STRONG:
                return BotStrong;
        }
    }
}