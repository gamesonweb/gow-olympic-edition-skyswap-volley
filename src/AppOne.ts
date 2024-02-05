import * as BABYLON from "babylonjs";

export class AppOne {
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new BABYLON.Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
        this.scene = createScene(this.engine, this.canvas);
    }

    debug(debugOn: boolean = true) {
        if (debugOn) {
            this.scene.debugLayer.show({ overlay: true });
        } else {
            this.scene.debugLayer.hide();
        }
    }

    run() {
        this.debug(true);
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
}

const createScene = (engine: BABYLON.Engine, canvas: HTMLCanvasElement) => {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new BABYLON.Scene(engine);

    // La camera
    const camera = new BABYLON.ArcRotateCamera(
        "camera",
        0,
        1,
        15,
        BABYLON.Vector3.Zero(),
        scene
    );

    // XXX debug
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    light.intensity = 0.7;

    // Le sol
    const ground = BABYLON.MeshBuilder.CreateGround(
        "ground",
        { width: 5, height: 15 },
        scene
    );
    const groundMaterial = new BABYLON.StandardMaterial(
        "groundMaterial",
        scene
    );
    groundMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.8, 0.5);
    ground.material = groundMaterial;

    // Le filet
    const frontPole = BABYLON.MeshBuilder.CreateCylinder(
        "front-pole",
        { height: 2, diameter: 0.4 },
        scene
    )
    frontPole.position.x = 2;
    frontPole.position.y = 1;

    const backPole = BABYLON.MeshBuilder.CreateCylinder(
        "back-pole",
        { height: 2, diameter: 0.4 },
        scene
    )
    backPole.position.x = -2;
    backPole.position.y = 1;

    frontPole.parent = ground;
    backPole.parent = ground;

    scene.registerBeforeRender(() => {});

    return scene;
};
