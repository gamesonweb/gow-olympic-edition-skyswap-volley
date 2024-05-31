import {PlayerType} from "./enum/TypeOfGame";
import {Room} from "colyseus.js";
import {FrontendEvent} from "./FrontendEvent.ts";

export class GameLoader{
    private appOneModule: any;
    private appOneInstance: any;
    private module: Promise<any>;
    private init: Promise<any> | undefined;
    public _canvas: HTMLCanvasElement;
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

    startLocalMultiplayerPlayerGame(){
        console.log("startSinglePlayerGame");

        if (this.isLoaded){
            FrontendEvent.onShowPlayInEasyMode((val:boolean) => {
                this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.PLAYER,(_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                    FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);},val);
            });

        }else {
            throw new Error("Game not loaded");
        }
    }

    startCampaignGame(){
        console.log("startCampaignGame");

        if (this.isLoaded){
            this.appOneInstance.runCampaignGame((_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);});
        }else {
            throw new Error("Game not loaded");
        }

    }

    startSinglePlayerGameAgainsEasyBot(){
        console.log("startSinglePlayerGame easy");

        if (this.isLoaded){
            this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT,(_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);});
        }else {
            throw new Error("Game not loaded");
        }
    }

    startSinglePlayerGameAgainsMediumBot(){
        console.log("startSinglePlayerGame medium");

        if (this.isLoaded){
            this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT_POWERFUL_HITTER,(_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);});
        }else {
            throw new Error("Game not loaded");
        }
    }

    startSinglePlayerGameAgainsHardBot(){
        console.log("startSinglePlayerGame hard");

        if (this.isLoaded){
            console.log("Pas encore implémenté");
            this.appOneInstance.runSinglePlayerGame(PlayerType.PLAYER, PlayerType.BOT_STRONG,(_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);});
        }else {
            throw new Error("Game not loaded");
        }
    }

    startMultiplayerGame(room:Room){
        console.log("startMultiplayerGame");

        if (this.isLoaded){
            this.appOneInstance.runMultiplayerGame(room,(_leftPlayerScore:number,_rightPlayerScore:number)=>{this.onGameEnd();
                FrontendEvent.onGameEnd(_leftPlayerScore, _rightPlayerScore);
            });
        }else {
            throw new Error("Game not loaded");
        }
    }

    private onGameEnd(){
        this.isLoaded = false;
        this.initAppOne();
    }

}