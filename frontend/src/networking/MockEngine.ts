import {Scene} from "@babylonjs/core";
import type {Engine} from "@babylonjs/core/Engines/engine";
import {SceneOptions} from "@babylonjs/core/scene";

export class MockScene extends Scene {
    constructor(engine: Engine, options?: SceneOptions) {
        super(engine, options);
    }

    public getAnimationRatio(): number {
        return 2;
    }


}