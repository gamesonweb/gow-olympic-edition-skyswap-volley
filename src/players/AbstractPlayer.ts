import BABYLON from "babylonjs";
import {Projectile} from "../Projectile";
import {BoardSide} from "../enum/BoardSide";
import {Env} from "../env";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "./PlayerKeyMapping";
import {GameInfo} from "../scene/GameInfo";
export class AbstractPlayer {
    private _name: string;
    private _x: number;
    private _y: number;
    private _xDefault: number;
    private _yDefault: number;
    private _xVelocity: number;
    private _yVelocity: number;
    private static _maxXVelocity: number= 0.12;
    private static _moveSpeed: number = 0.01;
    private static _jumpSpeed: number = 0.2;
    private static _gravity: number = Env.gravity;
    private static _friction: number = 0.005;
    private _boardSide: BoardSide;
    private _scene: BABYLON.Scene;
    private _projectile: Projectile;
    private _playerKeyMapping: PlayerKeyMapping;
    private _mesh: any;
    private _hitboxShootHeight: number = 3;
    private _hitboxShootWidth: number = 2;
    private _hitboxHeight: number = 3;
    private _hitboxWidth: number = 1;

    private _gameInfo: GameInfo;


    constructor(_xDefault:number,_yDefault:number,name: string, boardSide: BoardSide, scene: BABYLON.Scene, projectile: Projectile, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: any,gameInfo: GameInfo) {
        this._name = name;
        this._boardSide = boardSide;
        this._xVelocity = 0;
        this._yVelocity = 0;
        this._xDefault = _xDefault;
        this._yDefault = _yDefault;
        this._x = _xDefault;
        this._y = _yDefault;
        this._scene = scene;
        this._projectile = projectile;
        this._playerKeyMapping = playerKeyMapping;
        this._mesh = mesh;
        this._gameInfo = gameInfo;
        playerInput.subscribeToInput((inputMap: Map<string, boolean>) => {
            this.updateFromInput(inputMap);
        });
    }


    get name(): string {
        return this._name;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
    public resetPosition(){
        this._x = this._xDefault;
        this._y = this._yDefault;
        this._xVelocity = 0;
        this._yVelocity = 0;
    }

    get yFeet(): number {
        return this._y + 1;
    }

    get boardSide(): BoardSide {
        return this._boardSide;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    set xVelocity(value: number) {
        this._xVelocity = value;
    }

    set yVelocity(value: number) {
        this._yVelocity = value;
    }

    get xVelocity(): number {
        return this._xVelocity;
    }

    get yVelocity(): number {
        return this._yVelocity;
    }

    public jump() {
        if (this._y === 0) {
            this._yVelocity = 0.2;
        }
    }

    public shoot() {
        if (this.isBallCollidingWithPlayer()){//todo check if the player collides with the ball
            this._projectile.ballShoot(this._x, this._y);
        }
    }

    private isBallCollidingWithPlayer(): boolean {
        if (this._projectile.x > this._x - this._hitboxShootWidth / 2 && this._projectile.x < this._x + this._hitboxShootWidth / 2) {
            if (this._projectile.y > this._y - this._hitboxShootHeight / 2 && this._projectile.y < this._y + this._hitboxShootHeight / 2) {
                return true;
            }
        }
        return false;
    }

    public moveLeft() {
        if (this.canMoveLeft(this._boardSide)) {

            if (this._xVelocity > -AbstractPlayer._maxXVelocity) {
                let diff = AbstractPlayer._maxXVelocity + this._xVelocity * this._scene.getAnimationRatio();
                if (diff < AbstractPlayer._moveSpeed) {
                    this._xVelocity -= diff;
                } else {
                    this._xVelocity -= AbstractPlayer._moveSpeed;
                }
            }
        }else {
            this._xVelocity = 0;
            if (this._boardSide === BoardSide.Left) {
                this._x = (-this._gameInfo._terrainWidth / 2) + this._hitboxWidth / 2;
            }else {
                this._x = (this._gameInfo._netWidth / 2) + this._hitboxWidth / 2;
            }
        }
    }
    public moveRight() {
        if (this.canMoveRight(this._boardSide)) {
            if (this._xVelocity < AbstractPlayer._maxXVelocity) {
                let diff = AbstractPlayer._maxXVelocity - this._xVelocity * this._scene.getAnimationRatio();
                if (diff < AbstractPlayer._moveSpeed) {
                    this._xVelocity += diff;
                } else {
                    this._xVelocity += AbstractPlayer._moveSpeed;
                }
            }
        }else {
            this._xVelocity = 0;
            if (this._boardSide === BoardSide.Left) {
                this._x = (-this._gameInfo._netWidth / 2) - this._hitboxWidth / 2;
            }else {
                this._x = (this._gameInfo._terrainWidth / 2) - this._hitboxWidth / 2;
            }
        }
    }


    private canMoveLeft(boardSide: BoardSide): boolean {
        console.log(this.x);
        if (boardSide === BoardSide.Left) {
            if (this.x > (-this._gameInfo._terrainWidth / 2)+this._hitboxWidth/2) {
                return true;
            }else {
                return false;
            }
        }else {
            if (this.x > (this._gameInfo._netWidth / 2)+this._hitboxWidth/2) {
                return true;
            }else {
                return false;
            }
        }
    }
    private canMoveRight(boardSide: BoardSide): boolean {
        console.log(this.x);
        if (boardSide === BoardSide.Left) {
            if (this.x < (-this._gameInfo._netWidth / 2)-this._hitboxWidth/2) {
                return true;
            }else {
                return false;
            }
        }else {
            if (this.x < (this._gameInfo._terrainWidth / 2)-this._hitboxWidth/2) {
                return true;
            }else {
                return false;
            }
        }
    }


    public stop() {
        if (this._xVelocity > 0) {
            this._xVelocity -= AbstractPlayer._friction;
            if (this._xVelocity < 0) {
                this._xVelocity = 0;
            }
        } else if (this._xVelocity < 0) {
            this._xVelocity += AbstractPlayer._friction;
            if (this._xVelocity > 0) {
                this._xVelocity = 0;
            }
        }
    }

    public update() {
        this._x += this._xVelocity * this._scene.getAnimationRatio();
        this._y += this._yVelocity * this._scene.getAnimationRatio();
        this._yVelocity -= 0.01 * this._scene.getAnimationRatio();
        if (this._y < 0) {
            this._y = 0;
            this._yVelocity = 0;
        }
        //todo check for collision left and right

        //link mesh to player
        this._mesh.position.z = this.x;
        this._mesh.position.y = this.yFeet;
    }

    public updateFromInput(inputMap: Map<string, boolean>) {
        if (inputMap.get(this._playerKeyMapping.jump)) {
            // Sauter
            console.log("Je saute");
            this.jump();

        } else {
            // Plus de mouvement vertical
        }

        /// Mouvement horizontal
        if (inputMap.get(this._playerKeyMapping.left)) {
            // Gauche
            this.moveLeft();
        } else if (inputMap.get(this._playerKeyMapping.right)) {
            // Droite
            this.moveRight();
        } else {
            // Plus de mouvement horizontal
            this.stop();
        }

        if (inputMap.get(this._playerKeyMapping.shoot)) {
            // Tirer
            console.log("Je tire !");
            this.shoot();
        }
    }
}

