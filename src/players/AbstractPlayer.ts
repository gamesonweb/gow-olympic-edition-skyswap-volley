import BABYLON from "babylonjs";
import {Projectile} from "../Projectile";

export abstract class AbstractPlayer {
    private _name: string;
    private _x: number;
    private _y: number;
    private _xVelocity: number;
    private _yVelocity: number;
    private static _maxXVelocity: number= 5;
    private static _moveSpeed: number = 1;
    private _boardSide: BoardSide;
    private _scene: BABYLON.Scene;
    private _projectile: Projectile;


    constructor(name: string, boardSide: BoardSide,scene: BABYLON.Scene,projectile: Projectile) {
        this._name = name;
        this._boardSide = boardSide;
        this._xVelocity = 0;
        this._yVelocity = 0;
        this._scene = scene;
        this._projectile = projectile;
        if (boardSide === BoardSide.Left) {
            this._x = 0; //set the x position depending on the board side todo
            this._y = 0;
        }
        else {
            this._x = 100;
            this._y = 100;
        }
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
        //todo if the player is on the ground then jump
        this._yVelocity = 10;
    }

    public shoot() {
        if (true){//todo check if the player collides with the ball
            this._projectile.ballShoot(this._x, this._y);
        }

    }

    public moveLeft() {
        if (this._xVelocity > -AbstractPlayer._maxXVelocity) {
            let diff = AbstractPlayer._maxXVelocity + this._xVelocity * this._scene.getAnimationRatio();
            if (diff < AbstractPlayer._moveSpeed) {
                this._xVelocity -= diff;
            } else {
                this._xVelocity -= AbstractPlayer._moveSpeed;
            }
        }
    }
    public moveRight() {
        if (this._xVelocity < AbstractPlayer._maxXVelocity) {
            let diff = AbstractPlayer._maxXVelocity - this._xVelocity * this._scene.getAnimationRatio();
            if (diff < AbstractPlayer._moveSpeed) {
                this._xVelocity += diff;
            } else {
                this._xVelocity += AbstractPlayer._moveSpeed;
            }
        }
    }

    public stop() {
        this._xVelocity = 0;
    }

    public update() {
        this._x += this._xVelocity * this._scene.getAnimationRatio();
        this._y += this._yVelocity * this._scene.getAnimationRatio();
        this._yVelocity -= 0.5 * this._scene.getAnimationRatio();
        if (this._y < 0) {
            this._y = 0;
            this._yVelocity = 0;
        }
        //todo check for collision left and right
    }
}

