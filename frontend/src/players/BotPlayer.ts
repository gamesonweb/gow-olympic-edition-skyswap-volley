import {BoardSide} from "../enum/BoardSide";
import {Mesh, Scene} from "@babylonjs/core";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "./PlayerKeyMapping";
import {GameInfo} from "../scene/GameInfo";
import {ClientPlayer} from "./ClientPlayer";

export class BotPlayerDumb extends ClientPlayer{




    constructor( _xDefault:number,_yDefault:number,prefix: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        playerKeyMapping =new PlayerKeyMapping("","","","");
        super(_xDefault,_yDefault,prefix, boardSide, scene, null, playerKeyMapping, mesh,gameInfo);

    }
    get eventList() : number[]{
        let list = this._playerEvents.getEventListe();
        this._playerEvents.clearEventListe();
        return list;
    }



    public update() {

        //si le projectile est en dessous de 3 on tire
        if (this._projectile && this._projectile?.y < 3) {
            this.shoot();
        }

        //si le projectile est de notre coté on le suit
        if (this._projectile && this._projectile?.x > 0) {
            // on engage le saut si le projectile est static
            if (this._projectile?.isStatic ) {
                this.jumpShoot();
            }

            //si le projectile est lent on se deplace un peux a droite pour le tirrer a goche
            if (this._projectile && Math.abs(this._projectile?.xVelocity) < 0.02) {
                const offset = 0.5;
                this.goToPoint(this.ballImpactEstimation(this.projectile.x, this.projectile.y, this.projectile.xVelocity, this.projectile.yVelocity) + offset);
            } else {
                this.goToPoint(this.ballImpactEstimation(this.projectile.x, this.projectile.y, this.projectile.xVelocity, this.projectile.yVelocity));
            }
        }else {
            //si le projectile est de l'autre coté on se deplace au 3/4 du terrain
            this.goToPoint(this._gameInfo._terrainWidth/2/1.5);
        }



        super.update();
    }

    ballImpactEstimation(x: number, y: number, xVelocity: number, yVelocity: number):number {
        return x;
    }

    goToPoint(x: number) {
        const delta = 0.3;
        if (x+delta < this.x) {
            this.handleMoveLeft(true);
            this.handleMoveRight(false);
            this.handleStop(true, false);
        } else if (x-delta > this.x) {
            this.handleMoveRight(true);
            this.handleMoveLeft(false);
            this.handleStop(false, true);
        }else {
            this.handleMoveRight(false);
            this.handleMoveLeft(false);
            this.handleStop(false, false);
        }

    }

    jumpShoot() {
        this.jump();
        this.shoot();

    }


}