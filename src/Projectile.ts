import BABYLON from "babylonjs";


export class Projectile {
    _x: number;
    _y: number;
    _xVelocity: number;
    _yVelocity: number;
    private _scene: BABYLON.Scene;

    constructor(x: number, y: number, scene: BABYLON.Scene) {
        this._x = x;
        this._y = y;
        this._xVelocity = 0;
        this._yVelocity = 0;
        this._scene = scene;
    }

    update() {
        this._x += this._xVelocity * this._scene.getAnimationRatio();
        this._y += this._yVelocity * this._scene.getAnimationRatio();
        this._xVelocity -= 0.5 * this._scene.getAnimationRatio();
        //todo check for collision with walls and net
    }

    ballShoot(xShooter: number, yShooter: number) {

        let dx = this._x - xShooter;
        let dy = this._y - yShooter;

        let length = Math.sqrt(dx * dx + dy * dy);

        dx /= length;
        dy /= length;

        let speed = 10;

        this._xVelocity = dx * speed;
        this._yVelocity = dy * speed;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }






}