import { Scene, Mesh } from "@babylonjs/core";
import {Projectile} from "../Projectile";
import {BoardSide} from "../enum/BoardSide";
import {Env} from "../env";
import {PlayerInput} from "../PlayerInput";
import {PlayerKeyMapping} from "./PlayerKeyMapping";
import {GameInfo} from "../scene/GameInfo";
import {PlayerEvents} from "../events/PlayerEvents";
export abstract class AbstractPlayer {
    protected _name: string;
    protected _x: number;
    protected _y: number;
    protected _xDefault: number;
    protected _yDefault: number;
    protected _xVelocity: number;
    protected _yVelocity: number;
    protected static _maxXVelocity: number= 0.12;
    protected static _moveSpeed: number = 0.01;
    protected static _jumpSpeed: number = 0.2;
    protected static _gravity: number = Env.gravity;
    protected static _friction: number = 0.005;
    protected _boardSide: BoardSide;
    protected _scene: Scene;
    protected _projectile: Projectile;
    protected _playerKeyMapping: PlayerKeyMapping;
    protected _mesh: Mesh;
    protected _hitboxShootHeight: number = 3;
    protected _hitboxShootWidth: number = 2;
    protected _hitboxHeight: number = 3;
    protected _hitboxWidth: number = 1;


    protected _gameInfo: GameInfo;


    constructor(_xDefault:number,_yDefault:number,name: string, boardSide: BoardSide, scene: Scene, projectile: Projectile, playerInput: PlayerInput, playerKeyMapping: PlayerKeyMapping, mesh: Mesh,gameInfo: GameInfo) {
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


    abstract update(): void;
}

