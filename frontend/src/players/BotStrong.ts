// Le "ts-ignore" est obligatoire car le module "neat_net-js" n'est pas typé.
// @ts-ignore
import {NEAT, activation, crossover, mutate } from "neat_net-js";
import {ClientPlayer} from "./ClientPlayer.ts";
import {BoardSide} from "../enum/BoardSide.ts";
import {Mesh, Scene} from "@babylonjs/core";
import {PlayerInput} from "../PlayerInput.ts";
import {PlayerKeyMapping} from "./PlayerKeyMapping.ts";
import {GameInfo} from "../scene/GameInfo.ts";

export class BotStrong extends ClientPlayer{
    constructor( _xDefault:number,_yDefault:number,prefix: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        playerKeyMapping =new PlayerKeyMapping("","","","");
        super(_xDefault,_yDefault,prefix, boardSide, scene, null, playerKeyMapping, mesh,gameInfo);
    }

    public update() {
        super.shoot();
        super.update();
    }

    public getInputsNeatVector(): number[]{
        return [this.projectile.x, this.projectile.y, this.projectile.xVelocity, this.projectile.yVelocity, this._x, this._y, this._xVelocity, this._yVelocity];
    }

    public handleNeatVector(respond: number){
        if(respond === 0){
            this.jump();
        }
        if(respond === 1){
            this.moveLeft()
        }
        if(respond === 2){
            this.moveRight()
        }
    }
}