import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Vector3 } from "babylonjs";
import { PlayerInput } from "./PLayerInput";

export class AppOne {
    private engine: Engine;
    private scene: Scene;

    private input: PlayerInput;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);
        window.addEventListener("resize", () => {
            this.engine.resize();
        });

        this.scene = createScene(this.engine, this.canvas);

        // Mouvements (tests)
        this.input = new PlayerInput(this.scene);
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

const createScene = (engine: Engine, canvas: HTMLCanvasElement) => {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(engine);

    // La camera
    const camera = new ArcRotateCamera(
        "camera",
        0,
        1,
        15,
        Vector3.Zero(),
        scene
    );

    // XXX debug
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight(
        "light",
        new Vector3(0, 1, 0),
        scene
    );

    light.intensity = 0.7;

    // Le sol
    const ground = MeshBuilder.CreateGround(
        "ground",
        { width: 5, height: 15 },
        scene
    );
    const groundMaterial = new StandardMaterial(
        "groundMaterial",
        scene
    );
    groundMaterial.diffuseColor = new Color3(0.5, 0.8, 0.5);
    ground.material = groundMaterial;

    // Le filet
    const frontPole = MeshBuilder.CreateCylinder(
        "front-pole",
        { height: 2, diameter: 0.4 },
        scene
    );
    frontPole.position.x = 2;
    frontPole.position.y = 1;

    const backPole = MeshBuilder.CreateCylinder(
        "back-pole",
        { height: 2, diameter: 0.4 },
        scene
    );
    backPole.position.x = -2;
    backPole.position.y = 1;

    frontPole.parent = ground;
    backPole.parent = ground;

    // Le mur
    const wall = MeshBuilder.CreateBox("wall", {
        width: 5,
        depth: 0.5,
        height: 2,
    });
    wall.position.y = 1;

    wall.parent = ground;

    // Un "joueur"
    const leftPlayer = MeshBuilder.CreateCylinder("left-player");
    leftPlayer.position.y = 1;
    leftPlayer.position.z = -3.5;

    scene.registerBeforeRender(() => {});

    return scene;
};
