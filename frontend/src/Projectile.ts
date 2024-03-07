import { Scene, Mesh, Vector3, ShadowGenerator } from "@babylonjs/core";
import {BallSide} from "./enum/BallSide";
import {GameInfo} from "./scene/GameInfo";


import {Environment} from "./Environment";
import {BallEvents} from "./events/BallEvents";


export class Projectile {
    _x: number;
    _y: number;
    _xVelocity: number;
    _yVelocity: number;
    private _scene: Scene;
    private _isStatic: boolean=true;
    private _mesh: Mesh;
    private _gameInfo: GameInfo;
    private _ballRadius: number=0.5;
    private _ballShootListener: (x: number, y: number, xVelocity: number, yVelocity: number) => void = (x: number, y: number, xVelocity: number, yVelocity: number) => {};
    private _onBallPositionUpdate: (x: number, y: number) => void = () => {}
    private _ballEvents: BallEvents;
    private _isShootAllowed: boolean=true;

    constructor(scene: Scene, gameInfo: GameInfo, shadowGenerator: ShadowGenerator) {
        this._x = 0;
        this._y = 0;
        this._xVelocity = 0;
        this._yVelocity = 0;
        this._scene = scene;
        this._gameInfo = gameInfo;
        // this._mesh = MeshBuilder.CreateSphere('ball', {diameter: 0.1}, this._scene);
        this._mesh = Environment.instance.projectile;
        shadowGenerator.addShadowCaster(this._mesh)
        this._mesh.scaling = new Vector3(0.1, 0.1, 0.1);
        this._mesh.rotationQuaternion = null;

        this._ballEvents = new BallEvents(scene, this._mesh);

    }

    public update() {
        if (this._isStatic) {
            this._mesh.position.z = this.x;
            this._mesh.position.y = this.y;
            return;
        }


        this._x += this._xVelocity * this._scene.getAnimationRatio();
        this._y += this._yVelocity * this._scene.getAnimationRatio();
        this._yVelocity -= 0.006 * this._scene.getAnimationRatio();


        //link mesh to ball
        this._mesh.position.z = this.x;
        this._mesh.position.y = this.y;

        if (this.x>this._gameInfo._terrainWidth/2 || this.x<-this._gameInfo._terrainWidth/2){
            this._xVelocity*=-1;
            this._x = this.x>0?this._gameInfo._terrainWidth/2:-this._gameInfo._terrainWidth/2;
        }
        if (this.y>this._gameInfo._terrainHeight){
            this._yVelocity*=-1;
            this._y = this._gameInfo._terrainHeight;
        }
        this.ballCollisionNet();

        this._onBallPositionUpdate(this._x, this._y);
        this._ballEvents.update();
    }

    private ballCollisionNet() {
        const delta = 0.5;
        // Check if the ball is within the net's width
        if (this._x > -this._gameInfo._netWidth / 2 - this._ballRadius && this._x < this._gameInfo._netWidth / 2 + this._ballRadius ) {
            // Check if the ball is at the net's height
            if (this._y < this._gameInfo._netHeight + this._ballRadius) {




                if (this._y <= this._gameInfo._netHeight + this._ballRadius && this._y >= this._gameInfo._netHeight - delta + this._ballRadius) {
                    // Reverse the y velocity to make the ball bounce
                    this._yVelocity *= -1;
                    // Set the ball's y position to the net's height to prevent it from going inside the net
                    this._y = this._gameInfo._netHeight + this._ballRadius;
                    console.log("ballCollisionNettop");
                }


                if (this._y < this._gameInfo._netHeight + this._ballRadius-0.1){
                    //side hit left
                    if (this._x >= (-this._gameInfo._netWidth / 2) -this._ballRadius/2 && this._x <= (-this._gameInfo._netWidth / 2) + delta -this._ballRadius/2) {
                        // Reverse the x velocity to make the ball bounce
                        this._xVelocity *= -1;
                        this._x = (-this._gameInfo._netWidth / 2)-this._ballRadius/2;
                        console.log("ballCollisionNetSide");
                    }
                    //side hit right

                    if (this._x <= (this._gameInfo._netWidth / 2) +this._ballRadius/2 && this._x >= (this._gameInfo._netWidth / 2) - delta +this._ballRadius/2) {
                        // Reverse the x velocity to make the ball bounce
                        this._xVelocity *= -1;
                        this._x = (this._gameInfo._netWidth / 2)+this._ballRadius/2;
                        console.log("ballCollisionNetSide");
                    }
                }


            }
        }

        //
        //     // Check if the ball is at the net's sides
        //
        // }
        // if (this._y <= this._gameInfo._netHeight) {
        //     console.log("dessouballCollisionNetSide");
        //
        // }
    }

    public ballShoot(xShooter: number, yShooter: number) {
        if (!this._isShootAllowed) {
            return;
        }
        this._isStatic = false;

        let dx = this._x - xShooter;
        let dy = this._y - yShooter;

        let length = Math.sqrt(dx * dx + dy * dy);

        dx /= length;
        dy /= length;

        let speed = 0.22;

        this._xVelocity = dx * speed;
        this._yVelocity = dy * speed;
        this._ballShootListener(-this.x, this.y, -this.xVelocity, this.yVelocity);
        this._ballEvents.onBallShoot(this.xVelocity, this.yVelocity);
        // this._rezo.sendBallUpdate(-this.x, this.y, -this.xVelocity, this.yVelocity)
    }

    public resetPosition(ballSide: BallSide) {
        this._isStatic = true;
        // this._xVelocity = -0.2;
        this._xVelocity = 0;
        this._yVelocity = 0;
        switch (ballSide) {
            case BallSide.left:
                this._x = -0.5;
                this._y = 3;
                break;
            case BallSide.right:
                this._x = 0.5;
                this._y =3;
                break;
            case BallSide.middle:
                this._x = 0;
                this._y = 3;

                break;
        }
        this._onBallPositionUpdate(this._x, this._y);
    }

    public setBallPositionUpdate(fn: (x: number, y: number) => void) {
        this._onBallPositionUpdate = fn;
    }

    public resivePosition(x: number, y: number, xVelocity: number, yVelocity: number) {
        this._isStatic = false;
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

    set x(value: number) {
        this._x = value;
        this._mesh.position.z = value;
    }

    set y(value: number) {
        this._y = value;
        this._mesh.position.y = value;
    }

    get isStatic(): boolean {
        return this._isStatic;
    }

    set isStatic(value: boolean) {
        this._isStatic = value;
    }

    get isShootAllowed(): boolean {
        return this._isShootAllowed;
    }

    set isShootAllowed(value: boolean) {
        this._isShootAllowed = value;
    }

    set ballShootListener(value: (x: number, y: number, xVelocity: number, yVelocity: number) => void) {
        this._ballShootListener = value;
    }






}