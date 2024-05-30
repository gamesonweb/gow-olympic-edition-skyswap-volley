import {ClientPlayer} from "../players/ClientPlayer.ts";
import {BoardSide} from "../enum/BoardSide.ts";
import {Mesh, Scene} from "@babylonjs/core";
import {PlayerInput} from "../PlayerInput.ts";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping.ts";
import {GameInfo} from "../scene/GameInfo.ts";


import BotStrongModel from "../NeatIA/botStrongModel.ts";
import {NeatCreature} from "../NeatIA/NeatCreature.ts";
// Le "ts-ignore" est obligatoire car le module "neataptic" n'est pas en typescript.
// @ts-ignore
import {Neat,methods,architect} from "neataptic/src/neataptic";


export class BotPlayerStrong extends ClientPlayer{
    private _network: NeatCreature;
    private _startMouvement: boolean = false;
    constructor( _xDefault:number,_yDefault:number,prefix: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        playerKeyMapping =new PlayerKeyMapping("","","","");
        super(_xDefault,_yDefault,prefix, boardSide, scene, null, playerKeyMapping, mesh,gameInfo);
        let neat = new Neat(
            8,
            3,
            null,
            {
                mutation: methods.mutation.ALL,
                popsize: 1,
                mutationRate: 0,
                elitism: 0,
                network: new architect.Random(
                    8,
                    0,
                    3
                )
            }
        );

        neat.import([BotStrongModel]);
        console.log("loading model");
        if (neat.population.length != 1){
            throw new Error("Population size is not 1");
        }

        this._network = new NeatCreature(neat.population[0]);

        this.handleStop(false, false);


    }
    /*
    * Lance le déplacement du bot. Le bot ne doit pas bouger avant que cette méthode soit appelée.
     */
    public startMouvement(){
        this._startMouvement = true;

    }

    get eventList() : number[]{
        let list = this._playerEvents.getEventListe();
        this._playerEvents.clearEventListe();
        return list;
    }

    public update() {
        super.shoot();
        if (this._startMouvement){
            this.handleNeatVector(this._network.activate(this.getInputsNeatVector()));
        }
        super.update();
    }

    public getInputsNeatVector(): number[]{
        if (this.boardSide === BoardSide.Left){
            return [this.projectile.x, this.projectile.y, this.projectile.xVelocity, this.projectile.yVelocity, this._x, this._y, this._xVelocity, this._yVelocity];
        }else {
            return [-this.projectile.x, this.projectile.y, -this.projectile.xVelocity, this.projectile.yVelocity, -this._x, this._y, -this._xVelocity, this._yVelocity];
        }
    }

    public handleNeatVector(respond: number){
        if(respond === 0){
            this.jump();
            this.handleMoveRight(false);
            this.handleMoveLeft(false);
            this.handleStop(false, false);

        }
        if(respond === 1){
            if (this.boardSide === BoardSide.Left) {
                this.moveLeft();
                this.handleMoveLeft(true);
                this.handleMoveRight(false);
                this.handleStop(true, false);
            }else {
                this.moveRight();
                this.handleMoveRight(true);
                this.handleMoveLeft(false);
                this.handleStop(false, true);
            }
        }
        if(respond === 2){
            if (this.boardSide === BoardSide.Left) {
                this.moveRight();
                this.handleMoveRight(true);
                this.handleMoveLeft(false);
                this.handleStop(false, true);
            }else {
                this.moveLeft();
                this.handleMoveLeft(true);
                this.handleMoveRight(false);
                this.handleStop(true, false);
            }
        }
    }
}