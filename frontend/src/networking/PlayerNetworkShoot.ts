export class PlayerNetworkShoot{
    private _x: number;
    private _y: number;
    private _xVelocity: number;
    private _yVelocity: number;

    constructor(x: number, y: number, xVelocity: number, yVelocity: number) {
        this._x = x;
        this._y = y;
        this._xVelocity = xVelocity;
        this._yVelocity = yVelocity;
    }


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get xVelocity(): number {
        return this._xVelocity;
    }

    get yVelocity(): number {
        return this._yVelocity;
    }
}