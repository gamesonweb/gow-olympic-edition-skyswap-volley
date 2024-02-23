import {Mesh, Scene} from "@babylonjs/core";
import { EventListener } from "./EventListener";

export class BallEvents extends EventListener {
    private _rotation: number = 0.1;
    private _mesh: Mesh;


    constructor(scene: Scene,mesh: Mesh) {
        super(scene);
        this._mesh = mesh;
    }

    /**
     * Quand la balle touche une surface autre que le sol (murs).
     */
    onSurfaceHit() {

    }

    /**
     * Quand un joueur frappe la balle
     */
    onBallShoot(xVelocity: number, yVelocity: number) {
        this._rotation = xVelocity;

    }

    update() {

        this._mesh.rotation.x += this._rotation * this._scene.getAnimationRatio();

    }
}
