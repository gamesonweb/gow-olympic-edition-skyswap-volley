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


export class BotStrong extends ClientPlayer{
    private _network: NeatCreature;
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




    }

    public update() {
        super.shoot();
        this.handleNeatVector(this._network.activate(this.getInputsNeatVector()));
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
        }
        if(respond === 1){
            if (this.boardSide === BoardSide.Left) {
                this.moveLeft();
            }else {
                this.moveRight();
            }
        }
        if(respond === 2){
            if (this.boardSide === BoardSide.Left) {
                this.moveRight();
            }else {
                this.moveLeft();
            }
        }
    }
}