import {AbstractPlayer} from "./AbstractPlayer";
import {BoardSide} from "../enum/BoardSide";
import {Mesh, Scene} from "@babylonjs/core";
import {Projectile} from "../Projectile";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "./PlayerKeyMapping";
import {GameInfo} from "../scene/GameInfo";
import {PlayerEvents} from "../events/PlayerEvents";

export class DistantPlayer extends AbstractPlayer{
    private targetX: number;
    private targetY: number;



    constructor( _xDefault:number,_yDefault:number,name: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        super(_xDefault,_yDefault,name, boardSide, scene, mesh,gameInfo);

        this.targetX = _xDefault;
        this.targetY = _yDefault;

    }
    timeBetweenUpdates: number = 50;
    lastUpdate: number = Date.now();
    public update() {
        let objectif = this.lastUpdate + this.timeBetweenUpdates;
        let delta = (objectif - Date.now());
        let ratio = 1-(delta / this.timeBetweenUpdates);
        if (ratio > 1) {
            ratio = 1;
        }
        // console.log("update", ratio);
        let diffx = this.targetX - this.x;
        let diffy = this.targetY - this.y;
        this.x = this.x + diffx * ratio;
        this.y = this.y + diffy * ratio;

        this._mesh.position.z = this.x;
        this._mesh.position.y = this.yFeet;
    }


    public resivePosition(x: number, y: number) {

        this.lastUpdate = Date.now();
        this.targetX = x;
        this.targetY = y;
    }

}