import { AnimationGroup, Mesh, Scene } from "@babylonjs/core";
import { EventListener } from "./EventListener";

export class PlayerEvents extends EventListener {
    private _playerName: any;

    private _idleAnim: AnimationGroup;
    private _runAnim: AnimationGroup;
    private _jumpAnim: AnimationGroup;

    constructor(scene: Scene, mesh: Mesh) {
        super(scene);
        this._playerName = mesh;

        this._safeGetAnim("Death").stop()

        this._idleAnim = this._safeGetAnim("Idle");
        this._runAnim = this._safeGetAnim("Run");
        this._jumpAnim = this._safeGetAnim("Jump");
    }

    private _safeGetAnim(name: string): AnimationGroup {
        const animationGroup = this._scene.getAnimationGroupByName(name);
        if (animationGroup == null) {
            throw new Error("Could not find animation named: " + name);
        }
        return animationGroup;
    }

    /**
     * Quand le joueur s'arrete de bouger.
     */
    onIdle() {
        this._runAnim.stop()
        this._idleAnim.start(true);
    }

    /**
     * Quand le joueur se déplace a gauche sur l'écran.
     */
    onMoveLeft() {
        this._runAnim.start(true, 1, this._runAnim.to, this._runAnim.from)
    }

    /**
     * Quand le joueur se déplace a droite sur l'écran.
     */
    onMoveRight() {
        this._runAnim.start(true)
    }

    /**
     * Quand le joueur saute.
     */
    onJump() {
        this._idleAnim.stop()
        this._runAnim.stop()
        this._jumpAnim.start()
    }

    /**
     * Quand le joueur atterit.
     */
    onLand() {}

    /**
     * Quand le joueur frappe la balle au sol.
     */
    onBallHitGrounded() {}

    /**
     * Quand le joueur frappe la balle en l'air.
     */
    onBallHitAirborn() {}
}
