import { AnimationGroup, Scene } from "@babylonjs/core";
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
    private _animationWeightsObjectif: { [key: string]: number };
    private _animationWeights: { [key: string]: number };
    private _currentEvent: {[key: string]: boolean };

    constructor(scene: Scene, prefix: string) {
        super(scene);

        this._animationWeightsObjectif = {
            Idle: 0,
            Run: 0,
            Jump: 0,
            Punch: 0,
            Victory: 0
        };
        this._animationWeights = {
            Idle: 1,
            Run: 0,
            Jump: 0,
            Punch: 0,
            Victory: 0
        };
        this._currentEvent = {
            Idle: false,
            Run: false,
            Jump: false,
            Punch: false,
            Victory: false
        }

        this._prefix = prefix + "_";

        this._safeGetAnim(this._prefix + "Death").stop()

        this._idleAnim = this._safeGetAnim(this._prefix + "Idle");
        this._runAnim = this._safeGetAnim(this._prefix + "Run");
        this._jumpAnim = this._safeGetAnim(this._prefix + "Jump");
        this._ballHitGroundedAnim = this._safeGetAnim(this._prefix + "Punch");
        this._ballHitAirbornAnim = this._safeGetAnim(this._prefix + "Victory");

        // this._idleAnim.start(true);
        // this._runAnim.start(true);





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
        this._currentEvent.Run = false;
        // this._runAnim.stop()
        // this._idleAnim.start(true);
        this._animationWeightsObjectif.Run = 0;
        // this._animationWeightsObjectif.Idle = 1;
    }

    /**
     * Quand le joueur se déplace a gauche sur l'écran.
     */
    onMoveLeft() {
        this._eventListe.push(EventId.MOVE_LEFT)
        // this._runAnim.start(true, 1, this._runAnim.to, this._runAnim.from)
        this._animationWeightsObjectif.Run = 1;
        // this._animationWeightsObjectif.Idle = 0;
        this._currentEvent.Run = true;
    }

    /**
     * Quand le joueur se déplace a droite sur l'écran.
     */
    onMoveRight() {
        this._eventListe.push(EventId.MOVE_RIGHT)
        // this._runAnim.start(true)
        this._animationWeightsObjectif.Run = 1;
        // this._animationWeightsObjectif.Idle = 0;
        this._currentEvent.Run = true;
    }

    /**
     * Quand le joueur saute.
     */
    onJump() {
        this._eventListe.push(EventId.JUMP)
        // this._idleAnim.stop()
        // this._runAnim.stop()
        // this._jumpAnim.start()
        this._animationWeightsObjectif.Jump = 1;
        // this._animationWeightsObjectif.Idle = 0;
        this._currentEvent.Jump = true;
    }

    /**
     * Quand le joueur atterit.
     */
    onLand() {
        this._eventListe.push(EventId.LAND)
        this._animationWeightsObjectif.Jump = 0;
        // this._animationWeightsObjectif.Idle = 1;
        this._currentEvent.Jump = false;

    }

    /**
     * Quand le joueur frappe la balle au sol.
     */
    private punchIsPlaying = false;
    onBallHitGrounded() {
        this._currentEvent.Punch = true;

        if (this.punchIsPlaying) {
            return;
        }
        console.log("punch");
        this.punchIsPlaying = true;
        this._eventListe.push(EventId.BALL_HIT_GROUNDED)
        // this._ballHitGroundedAnim.start(false, 1.5, 15)
        this._ballHitGroundedAnim.start(false, 1.5, 15);

        this._animationWeightsObjectif.Punch = 1;
        this._ballHitGroundedAnim.onAnimationEndObservable.addOnce(() => {
            console.log("alalala");
            this.punchIsPlaying = false;
            this._ballHitGroundedAnim.speedRatio = 0;
        });
        setTimeout(() => {
            this.endBallHitGrounded();

        },300)
    }

    endBallHitGrounded() {
        this._currentEvent.Punch = false;
        this._animationWeightsObjectif.Punch = 0;
        // this._animationWeightsObjectif.Idle = 1;
        if (this._currentEvent.Run){
            this._animationWeightsObjectif.Run = 1;
        }
        console.log("end punch");
    }


    /**
     * Quand le joueur frappe la balle en l'air.
     */
    private victoryIsPlaying = false;
    onBallHitAirborn() {
        this._currentEvent.Victory = true;
        if (this.victoryIsPlaying) {
            return;
        }
        console.log("victory");
        this.victoryIsPlaying = true;
        this._eventListe.push(EventId.BALL_HIT_AIRBORN)
        this._ballHitAirbornAnim.start(false, 2, 20, 30);
        this._animationWeightsObjectif.Victory = 1;
        this._ballHitAirbornAnim.onAnimationEndObservable.addOnce(() => {
            console.log("alalala");
            this.victoryIsPlaying = false;
            this._ballHitAirbornAnim.speedRatio = 0;
        });
        setTimeout(() => {
            this.endBallHitAirborn();

        },300)
    }
    endBallHitAirborn() {
        this._currentEvent.Victory = false;
        this._animationWeightsObjectif.Victory = 0;
        if (this._currentEvent.Run){
            this._animationWeightsObjectif.Run = 1;
        }
    }



    private _updateAnimationWeights() {
        for (let key in this._animationWeights) {
            this._animationWeights[key] = this._animationWeights[key] + (this._animationWeightsObjectif[key] - this._animationWeights[key]) * 0.1;
            if (key!=="Punch" && this._animationWeights[key] >0.9) {
                this._ballHitGroundedAnim.speedRatio = 1.5;
                this._ballHitGroundedAnim.start()
                // console.log("stop punch");
            }
            if (this._animationWeightsObjectif[key] === 1) {
                switch (key) {
                    case "Idle":
                        this._idleAnim.start(true);
                        // console.log("start idle");
                        break;
                    case "Run":
                        this._runAnim.start(true);
                        // this._animationWeightsObjectif.Run *= 0.3;
                        console.log("start run");
                        break;
                    case "Jump":
                        this._jumpAnim.start()
                        // console.log("start jump");
                        this._animationWeightsObjectif.Run = 0.3;
                        break;
                    case "Punch":
                        // this._ballHitGroundedAnim.start(false, 1.5, 15);

                        this._animationWeightsObjectif.Run = 0.2;
                        console.log("start punch");
                        break;
                    case "Victory":
                        this._ballHitAirbornAnim.start(false, 2, 20, 30);
                        console.log("start victory");
                        break;
                }
            }
            if (this._animationWeights[key] < 0.1) {
                switch (key) {
                    case "Idle":
                        this._idleAnim.stop()
                        break;
                    case "Run":
                        this._runAnim.stop()
                        break;
                    case "Jump":
                        this._jumpAnim.stop()
                        break;
                    case "Punch":
                        this._ballHitGroundedAnim.stop()
                        break;
                    case "Victory":
                        this._ballHitAirbornAnim.stop()
                        break;
                }
            }

        }
        this._idleAnim.weight = this._animationWeights.Idle;
        this._runAnim.weight = this._animationWeights.Run;
        this._jumpAnim.weight = this._animationWeights.Jump;
        this._ballHitGroundedAnim.weight = this._animationWeights.Punch;
        this._ballHitAirbornAnim.weight = this._animationWeights.Victory;
    }

    public update() {
        this._updateAnimationWeights();
        if (this._prefix === "!left_")
            console.log(this._currentEvent);
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
