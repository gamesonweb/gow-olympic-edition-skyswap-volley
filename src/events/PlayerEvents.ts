import {Mesh, Scene} from "@babylonjs/core";
import { EventListener } from "./EventListener";


export class PlayerEvents extends EventListener {

    private _playerName: any;

    constructor(scene: Scene, mesh: Mesh) {
        super(scene);
        this._playerName = mesh;
    }

    /**
     * Quand le joueur s'arrete de bouger.
     */
    onIdle() {

    }

    /**
     * Quand le joueur se déplace a gauche sur l'écran.
     */
    onMoveLeft() {

    }

    /**
     * Quand le joueur se déplace a droite sur l'écran.
     */
    onMoveRight() {

    }

    /**
     * Quand le joueur saute.
     */
    onJump() {

    }

    /**
     * Quand le joueur atterit.
     */
    onLand() {

    }

    /**
     * Quand le joueur frappe la balle au sol.
     */
    onBallHitGrounded() {

    }

    /**
     * Quand le joueur frappe la balle en l'air.
     */
    onBallHitAirborn() {

    }
}