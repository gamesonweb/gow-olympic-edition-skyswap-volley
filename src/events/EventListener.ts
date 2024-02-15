import { Scene } from "babylonjs";

export abstract class EventListener {
    protected _scene: Scene;

    constructor(scene: Scene) {
        this._scene = scene;
    }
}
