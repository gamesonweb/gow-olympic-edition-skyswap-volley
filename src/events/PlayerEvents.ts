import { AnimationGroup, Mesh, Scene } from "@babylonjs/core";
import { EventListener } from "./EventListener";

enum EventId {
    IDLE = 0,
    MOVE_LEFT = 1,
    MOVE_RIGHT = 2,
    JUMP = 3,
    LAND = 4,
    BALL_HIT_GROUNDED = 5,
    BALL_HIT_AIRBORN = 6

}

export class PlayerEvents extends EventListener {
    private _prefix: string;

    private _idleAnim: AnimationGroup;
    private _runAnim: AnimationGroup;
    private _jumpAnim: AnimationGroup;
    private _ballHitGroundedAnim: AnimationGroup;
    private _ballHitAirbornAnim: AnimationGroup;
    private _eventListe: number[] = []

    constructor(scene: Scene, prefix: string) {
        super(scene);
        this._prefix = prefix + "_";

        this._safeGetAnim(this._prefix + "Death").stop()

        this._idleAnim = this._safeGetAnim(this._prefix + "Idle");
        this._runAnim = this._safeGetAnim(this._prefix + "Run");
        this._jumpAnim = this._safeGetAnim(this._prefix + "Jump");
        this._ballHitGroundedAnim = this._safeGetAnim(this._prefix + "Punch");
        this._ballHitAirbornAnim = this._safeGetAnim(this._prefix + "Victory");
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
        this._eventListe.push(EventId.IDLE)
        this._runAnim.stop()
        this._idleAnim.start(true);
    }

    /**
     * Quand le joueur se déplace a gauche sur l'écran.
     */
    onMoveLeft() {
        this._eventListe.push(EventId.MOVE_LEFT)
        this._runAnim.start(true, 1, this._runAnim.to, this._runAnim.from)
    }

    /**
     * Quand le joueur se déplace a droite sur l'écran.
     */
    onMoveRight() {
        this._eventListe.push(EventId.MOVE_RIGHT)
        this._runAnim.start(true)
    }

    /**
     * Quand le joueur saute.
     */
    onJump() {
        this._eventListe.push(EventId.JUMP)
        this._idleAnim.stop()
        this._runAnim.stop()
        this._jumpAnim.start()
    }

    /**
     * Quand le joueur atterit.
     */
    onLand() {
        this._eventListe.push(EventId.LAND)
    }

    /**
     * Quand le joueur frappe la balle au sol.
     */
    onBallHitGrounded() {
        this._eventListe.push(EventId.BALL_HIT_GROUNDED)
        this._ballHitGroundedAnim.start(false, 1.5, 15)
    }

    /**
     * Quand le joueur frappe la balle en l'air.
     */
    onBallHitAirborn() {
        this._eventListe.push(EventId.BALL_HIT_AIRBORN)
        this._ballHitAirbornAnim.start(false, 2, 20, 30)
    }

    public getEventListe(): number[] {
        return this._eventListe;
    }
    public clearEventListe() {
        this._eventListe = []
    }

    public setEventListe(eventList: number[]) {
        for (let event of eventList) {
            switch (event) {
                case EventId.IDLE:
                    this.onIdle()
                    break;
                case EventId.MOVE_LEFT:
                    this.onMoveLeft()
                    break;
                case EventId.MOVE_RIGHT:
                    this.onMoveRight()
                    break;
                case EventId.JUMP:
                    this.onJump()
                    break;
                case EventId.LAND:
                    this.onLand()
                    break;
                case EventId.BALL_HIT_GROUNDED:
                    this.onBallHitGrounded()
                    break;
                case EventId.BALL_HIT_AIRBORN:
                    this.onBallHitAirborn()
                    break;
            }
        }

    }
}
