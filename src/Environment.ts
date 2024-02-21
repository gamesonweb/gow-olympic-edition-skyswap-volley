import { Mesh, Scene, SceneLoader, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
export class Environment {
    private _scene: Scene;

    private _projectile: Mesh | undefined;

    private _player: Mesh | undefined;

    private _staduim: Mesh | undefined;

    private static _instance: Environment;

    constructor(scene: Scene) {
        this._scene = scene;
        if (Environment._instance) {
            throw new Error("Environment already created");
        }
        Environment._instance = this;
    }

    private async loadMesh(fileName: string): Promise<Mesh> {
        const result = await SceneLoader.ImportMeshAsync(
            "",
            "/assets/",
            fileName,
            this._scene
        );
        const mesh = result.meshes[0] as Mesh;
        mesh.getChildMeshes().forEach((child) => (child.isVisible = false)); // make all child meshes invisible by default
        return mesh;
    }

    public async init() {
        this._projectile = await this.loadMesh("volleyball.glb");

        this._player = await this.loadMesh("player.gltf");
        this._player.scaling.scaleInPlace(0.8);

        this._staduim = await this.loadMesh("volleyball.glb"); //TODO: change to staduim model
    }

    static get instance(): Environment {
        return Environment._instance;
    }

    get projectile(): Mesh {
        if (!this._projectile) {
            throw new Error("Projectile not yet created");
        }
        this._projectile
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._projectile;
    }

    get player(): Mesh {
        if (!this._player) {
            throw new Error("Player not yet created");
        }
        this._player
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._player;
    }

    get staduim(): Mesh {
        if (!this._staduim) {
            throw new Error("Staduim not yet created");
        }
        this._staduim
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._staduim;
    }
}
