import {PlayerType} from "./enum/TypeOfGame";
import {Room} from "colyseus.js";

export class GameLoader{
    private appOneModule: any;
    private appOneInstance: any;
    private module: Promise<any>;
    private init: Promise<any> | undefined;
    private _canvas: HTMLCanvasElement;
    public isLoaded: boolean = false;
    static instance: GameLoader;
    private _callback: () => void = () => {};
    private _callbackCatch: (e:Error) => void= () => {};

    constructor(canvas: HTMLCanvasElement){
        this._canvas = canvas;
        this.module = import('./AppOne');

        this.module.then((module) => {
            this.appOneModule = module.AppOne;
            this.appOneInstance = new module.AppOne(canvas);
            this.initAppOne();

        }).catch((e) => {
            this._callbackCatch(e);
        });
    }

    private initAppOne(){
        this.init = this.appOneInstance.init();
        this.init?.then(() => {
            this.isLoaded = true;
            this._callback();
        }).catch((e) => {
            this._callbackCatch(e);
        });
    }


    static Init(canvas: HTMLCanvasElement){
        if (this.instance){
            throw new Error("GameLoader already initialized");
        }
        this.instance = new GameLoader(canvas);
    }

    setEventListener( callback: () => void){
        this._callback = callback;

    };

    setEventListenerCatch( callbackCatch: (e:Error) => void){
        this._callbackCatch = callbackCatch;
    }

    startSinglePlayerGame(){
        console.log("startSinglePlayerGame");

        if (this.isLoaded){
            this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT_POWERFUL_HITTER,()=>{this.onGameEnd()});
        }else {
            throw new Error("Game not loaded");
        }
    }

    startSinglePlayerGameAgainsBot(){
        console.log("startSinglePlayerGame");

        if (this.isLoaded){
            this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT,()=>{this.onGameEnd()});
        }else {
            throw new Error("Game not loaded");
        }
    }
    startMultiplayerGame(room:Room){
        console.log("startMultiplayerGame");

        if (this.isLoaded){
            this.appOneInstance.runMultiplayerGame(room,()=>{this.onGameEnd()});
        }else {
            throw new Error("Game not loaded");
        }
    }

    private onGameEnd(){
        this.isLoaded = false;
        this.initAppOne();
    }

}