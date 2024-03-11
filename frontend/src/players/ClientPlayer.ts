import { AbstractPlayer } from "./AbstractPlayer";
import { PlayerEvents } from "../events/PlayerEvents";
import { BoardSide } from "../enum/BoardSide";
import {AnimationPropertiesOverride, Mesh, Scene} from "@babylonjs/core";
import { PlayerInput } from "../PlayerInput";
import { PlayerKeyMapping } from "./PlayerKeyMapping";
import { GameInfo } from "../scene/GameInfo";

export class ClientPlayer extends AbstractPlayer{
    protected _playerKeyMapping: PlayerKeyMapping;
    protected _playerEvents: PlayerEvents;
    protected _ballShootSpeed: number = 0.22;

    constructor(_xDefault:number,_yDefault:number,prefix: string, boardSide: BoardSide, scene: Scene, playerInput: PlayerInput | null, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
        super(_xDefault,_yDefault,prefix, boardSide, scene, mesh,gameInfo);
        this._playerKeyMapping = playerKeyMapping;
        if (playerInput){
            playerInput.subscribeToInput((inputMap: Map<string, boolean>) => {
                this.updateFromInput(inputMap);
            });
        }
        this._playerEvents = new PlayerEvents(scene, prefix);

    }

    get eventList() : number[]{
        let list = this._playerEvents.getEventListe();
        this._playerEvents.clearEventListe();
        return list;
    }

    public jump() {
        if (this._y === 0) {
            this._yVelocity = 0.2;
        }
    }

    public shoot() {
        if (this.isBallCollidingWithPlayer()){//todo check if the player collides with the ball
            this.projectile.ballShoot(this._x, this._y, this._ballShootSpeed);
        }
    }

    private isBallCollidingWithPlayer(): boolean {
        if (this.projectile.x > this._x - this._hitboxShootWidth / 2 && this.projectile.x < this._x + this._hitboxShootWidth / 2) {
            if (this.projectile.y > this._y - this._hitboxShootHeight / 2 && this.projectile.y < this._y + this._hitboxShootHeight / 2) {
                return true;
            }
        }
        return false;
    }

    public moveLeft() {
        if (this._xVelocity > 0) { //if we have positive velocity
            this.stop();//apply friction
        }

        if (this._xVelocity > -AbstractPlayer._maxXVelocity) {
            let futureSpeed = this._xVelocity - (AbstractPlayer._moveSpeed * this._scene.getAnimationRatio());
            if (futureSpeed < -AbstractPlayer._maxXVelocity) {
                this._xVelocity = -AbstractPlayer._maxXVelocity;
            } else {
                this._xVelocity -= AbstractPlayer._moveSpeed * this._scene.getAnimationRatio();
            }
        }
    }
    public moveRight() {
        if (this._xVelocity < 0) { //if we have negative velocity
            this.stop();//apply friction
        }

        if (this._xVelocity < AbstractPlayer._maxXVelocity) {
            let futureSpeed = this._xVelocity + (AbstractPlayer._moveSpeed * this._scene.getAnimationRatio());
            if (futureSpeed > AbstractPlayer._maxXVelocity) {
                this._xVelocity = AbstractPlayer._maxXVelocity;
            } else {
                this._xVelocity += AbstractPlayer._moveSpeed * this._scene.getAnimationRatio();
            }
        }
    }

    public stop() {
        if (this._xVelocity > 0) {
            this._xVelocity -= AbstractPlayer._friction * this._scene.getAnimationRatio();
            if (this._xVelocity < 0) {
                this._xVelocity = 0;
            }
        } else if (this._xVelocity < 0) {
            this._xVelocity += AbstractPlayer._friction * this._scene.getAnimationRatio()
            if (this._xVelocity > 0) {
                this._xVelocity = 0;
            }
        }
    }



    public update() {
        this._playerEvents.update();

        this._x += this._xVelocity * this._scene.getAnimationRatio();
        this._y += this._yVelocity * this._scene.getAnimationRatio();
        this._yVelocity -= 0.01 * this._scene.getAnimationRatio();
        if (this._y < 0) {
            this._y = 0;
            this._yVelocity = 0;
        }

        this.collisionLeft();
        this.collisionRight();
        //link mesh to player
        this._mesh.position.z = this.x;
        this._mesh.position.y = this.yFeet;

    }

    collisionLeft() {
        if (this.boardSide === BoardSide.Left) {
            if (this.x < (-this._gameInfo._terrainWidth / 2)+this._hitboxWidth/2) {
                this.x = (-this._gameInfo._terrainWidth / 2) + this._hitboxWidth / 2;
            }
        } else {
            if (this.x < (this._gameInfo._netWidth / 2)+this._hitboxWidth/2) {
                this.x = (this._gameInfo._netWidth / 2)+this._hitboxWidth/2;
            }
        }
    }

    collisionRight() {
        if (this.boardSide === BoardSide.Left) {
            if (this.x > (-this._gameInfo._netWidth / 2)-this._hitboxWidth/2) {
                this.x = (-this._gameInfo._netWidth / 2) - this._hitboxWidth / 2;
            }
        } else {
            if (this.x > (this._gameInfo._terrainWidth / 2)-this._hitboxWidth/2) {
                this.x = (this._gameInfo._terrainWidth / 2)-this._hitboxWidth/2;
            }
        }
    }

    handleJump(input: boolean | undefined) {
        if (input) {
            // Sauter
            this.jump();
            if (!this._jump){

                this._playerEvents.onJump();
            }
            this._jump = true;

        } else {
            if (this._jump && this._y === 0){

                this._playerEvents.onLand();
                this._jump = false;
            }
        }
    }

    handleMoveLeft(input: boolean | undefined) {
        if (input) {
            // Gauche
            this.moveLeft();
            if (!this._left){
                this._playerEvents.onMoveLeft();
            }

            this._left = true;
            this._right = false;
            this._idle = false;
        }
    }

    handleMoveRight(input: boolean | undefined) {
        if (input) {
            // Droite
            this.moveRight();
            if (!this._right){

                this._playerEvents.onMoveRight();
            }
            this._right = true;
            this._left = false;
            this._idle = false;
        }
    }

    handleStop(input: boolean | undefined, input2: boolean | undefined) {
        if (!input && !input2) {
            // Plus de mouvement horizontal
            this.stop();
            if (!this._idle){

                this._playerEvents.onIdle();
            }
            this._left = false;
            this._right = false;
            this._idle = true;

        }
    }

    handleShoot(input: boolean | undefined) {
        if (input) {
            // Tirer
            this.shoot();
            if (!this._shoot){
                if (this._jump){
                    this._playerEvents.onBallHitAirborn();

                }else {
                    this._playerEvents.onBallHitGrounded();
                }

                this._shoot = true;
            }
        }else {
            if (this._shoot){
                this._shoot = false;
            }
        }
    }

    private updateFromInput(inputMap: Map<string, boolean>) {
        this.handleJump(inputMap.get(this._playerKeyMapping.jump));
        this.handleMoveLeft(inputMap.get(this._playerKeyMapping.left));
        this.handleMoveRight(inputMap.get(this._playerKeyMapping.right));
        this.handleStop(inputMap.get(this._playerKeyMapping.left), inputMap.get(this._playerKeyMapping.right));
        this.handleShoot(inputMap.get(this._playerKeyMapping.shoot));
    }

    private _left: boolean = false;
    private _right: boolean = false;
    private _idle: boolean = false;
    private _jump: boolean = false;
    private _shoot: boolean = false;
    // private updateFromInput(inputMap: Map<string, boolean>) {
    //
    //
    //     /// Mouvement horizontal
    //
    //
    //
    // }
}