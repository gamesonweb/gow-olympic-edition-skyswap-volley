import {Engine, Scene} from "@babylonjs/core";
// import "@babylonjs/core/Debug/debugLayer";
// import { Inspector } from '@babylonjs/inspector';


import {Environment} from "./Environment";
import {SinglePlayerGameScene} from "./scene/SinglePlayerGameScene";
import {GameScene} from "./scene/GameScene";

import {ClientPlayer} from "./players/ClientPlayer";
import {MultiplayerPlayerGameScene} from "./scene/MultiplayerPlayerGameScene";
import {Api} from "./networking/Api";
import {BotPlayerDumb} from "./players/BotPlayerDumb.ts";
import {PlayerType, TypeOfGame} from "./enum/TypeOfGame";
import {Room} from "colyseus.js";
import {BotPlayerPowerfulHitter} from "./players/BotPlayerPowerfulHitter.ts";
import {BotPlayerStrong} from "./players/BotPlayerStrong.ts";
import {FrontendEvent} from "./FrontendEvent.ts";
import {GameLoader} from "./GameLoader.ts";

enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

export class AppOne {
    public engine: Engine;
    private gameScene: GameScene | undefined;

    private _state: State = State.START;

    private _scene: Scene | undefined;

    public static instance: AppOne;

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


    runSinglePlayerGame(leftPlayerType: PlayerType, rightPlayerType: PlayerType,onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void,easyMode:boolean=false) {

        let leftPlayerClass = this.classFromType(leftPlayerType);
        let rightPlayerClass = this.classFromType(rightPlayerType);

        this.gameScene = new SinglePlayerGameScene(this.engine, this.canvas, this.scene, onEnd, leftPlayerClass, rightPlayerClass,easyMode);
        // Debug
        // Inspector.Show(this.scene, this.engine.getRenderingCanvas());

        this.engine.runRenderLoop(() => {
            this.gameScene?.runRenderLoop();
        });
    }

    runCampaignGame(onEnd : (_leftPlayerScore:number,_rightPlayerScore:number)=>void) {
        let nbmatch = 0;
        let esayMode = false;




        const handleGameEnd = (_leftPlayerScore:number,_rightPlayerScore:number) => {
            if (_leftPlayerScore == -1 && _rightPlayerScore == -1){
                onEnd(-1,-1);
                return;
            }

            if (_leftPlayerScore < _rightPlayerScore){
                FrontendEvent.onShowContinueIfLoos((val:boolean) => {
                    if (!val){
                        onEnd(-1,-1);
                        return;
                    }
                    startNextMatch();
                });
            } else {
                startNextMatch();
            }
        }

        const startNextMatch = () => {
            this.init().then(()=> {
                FrontendEvent.onGamePointScoredLeft(0);
                FrontendEvent.onGamePointScoredRight(0);
                nbmatch++;
                displayDialog(nbmatch,0,() => {
                    FrontendEvent.onMaskImage();
                    runMatch(nbmatch, handleGameEnd);
                });
            });
        }

        const displayDialog = (indexMatch: number,indexImg:number,callback: ()=>void) => {
            let img:any=[]
            switch (indexMatch) {
                case 1:
                    img = ["./assets/campaign/présentateur.jpg", "./assets/campaign/bot1.jpg", "./assets/campaign/player1.jpg"];
                    break;
                case 2:
                    img = ["./assets/campaign/bot2.jpg", "./assets/campaign/player2.jpg"];
                    break;
                case 3:
                    img = ["./assets/campaign/bot3.jpg", "./assets/campaign/player3.jpg"];
                    break;
                case 4:
                    img =["./assets/campaign/win.jpg"];
                    break;




            }
            if (indexImg >= img.length){
                callback();
                return;
            }
            FrontendEvent.onShowImage(img[indexImg]);
            document.addEventListener("click", () => {
                FrontendEvent.onMaskImage();
                displayDialog(indexMatch, indexImg + 1, callback);
            }, {once: true});

        }

        const runMatch = (matchNumber: number, callback: (_leftPlayerScore:number,_rightPlayerScore:number) => void) => {
            const botTypes = [PlayerType.BOT, PlayerType.BOT_POWERFUL_HITTER, PlayerType.BOT_STRONG];
            if (matchNumber <= botTypes.length) {
                this.runSinglePlayerGame(PlayerType.PLAYER, botTypes[matchNumber - 1], callback,esayMode);
            } else {
                displayDialog(4,0,() => {
                    onEnd(0, 0);
                });
            }
        }
        FrontendEvent.onShowPlayInEasyMode((val:boolean) => {
            esayMode = val;
            handleGameEnd(0,0);
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
            case PlayerType.BOT_STRONG:
                return BotPlayerStrong;
        }
    }
}