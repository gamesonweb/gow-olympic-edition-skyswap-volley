
import {ClientPlayer} from "../players/ClientPlayer.ts";
import {BoardSide} from "../enum/BoardSide.ts";
import {Mesh, Scene} from "@babylonjs/core";
import {PlayerInput} from "../PlayerInput.ts";
import {PlayerKeyMapping} from "../players/PlayerKeyMapping.ts";
import {GameInfo} from "../scene/GameInfo.ts";

export class TraingingBot extends ClientPlayer{
    constructor( _xDefault:number,_yDefault:number,prefix: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        playerKeyMapping =new PlayerKeyMapping("","","","");
        super(_xDefault,_yDefault,prefix, boardSide, scene, null, playerKeyMapping, mesh,gameInfo);
    }

    public update() {
        super.shoot();
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