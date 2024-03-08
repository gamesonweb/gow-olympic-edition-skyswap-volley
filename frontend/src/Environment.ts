import { Mesh, Scene, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

export class Environment {
    private _scene: Scene;

    private _projectile: Mesh | undefined;

    private _leftPlayer: Mesh | undefined;
    private _rightPlayer: Mesh | undefined;

    private _buildings: Map<string, Mesh> = new Map();
    private _buildingsList = [
        "tall_building.glb",
        "building2.glb",
        "large_building.glb",
        "large_building_2.glb",
        "left_building.glb",
    ]

    private _wall: Mesh | undefined;

    private static _instance: Environment;

    constructor(scene: Scene) {
        this._scene = scene;
    }

    public static createInstance(scene: Scene) {
        Environment._instance = new Environment(scene);
    }

    private async loadMesh(fileName: string): Promise<Mesh> {
        const result = await SceneLoader.ImportMeshAsync(
            "",
            "/assets/models/",
            fileName,
            this._scene
        );
        const mesh = result.meshes[0] as Mesh;
        mesh.getChildMeshes().forEach((child) => (child.isVisible = false)); // make all child meshes invisible by default
        return mesh;
    }

    private async loadPlayerMesh(fileName: string, prefix: string): Promise<Mesh> {
        const mesh = await this.loadMesh(fileName);

        mesh.name = prefix + "_player"
        // Renomer les animations
        this._scene.animationGroups.forEach((ag) => {
            if (!ag.name.startsWith("!")) ag.name = prefix + "_" + ag.name
        })

        return mesh;
    }

    public async init() {
        // Obligatoirement charger les joueurs en premiers
        this._leftPlayer = await this.loadPlayerMesh("cowboy.glb", "!left");
        this._leftPlayer.scaling.scaleInPlace(0.8);

        this._rightPlayer = await this.loadPlayerMesh("ninja.glb", "!right")
        this._rightPlayer.scaling.scaleInPlace(0.8);
        if (this._rightPlayer.rotationQuaternion != null)
            this._rightPlayer.rotationQuaternion.y = 0

        this._projectile = await this.loadMesh("volleyball.glb");

        this._wall = await this.loadMesh("wall.glb");
        this._wall.scaling.scaleInPlace(3.5)

        for (const name of this._buildingsList) {
            const building = await this.loadMesh(name);
            building.name = name;
            building.rotationQuaternion = null;
            this._buildings.set(name, building);
        }
    }

    static get instance(): Environment {
        if (!Environment._instance) {
            throw new Error("Environment not yet created");
        }
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

    get leftPlayer(): Mesh {
        if (!this._leftPlayer) {
            throw new Error("Left player not yet created");
        }
        this._leftPlayer
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._leftPlayer;
    }

    get rightPlayer(): Mesh {
        if (!this._rightPlayer) {
            throw new Error("Right player not yet created");
        }
        this._rightPlayer
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._rightPlayer;
    }

    public getBuilding(name: string): Mesh {
        const building = this._buildings.get(name);
        if (!building) {
            throw new Error("Building does not exists: " + name);
        }
        building.getChildMeshes().forEach((child) => (child.isVisible = true));
        return building;
    }

    get wall(): Mesh {
        if (!this._wall) {
            throw new Error("Wall not yet created");
        }
        this._wall
            .getChildMeshes()
            .forEach((child) => (child.isVisible = true)); // make all child meshes visible when requested
        return this._wall;
    }
}
