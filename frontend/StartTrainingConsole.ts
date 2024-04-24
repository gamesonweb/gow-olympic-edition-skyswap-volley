
import {NullEngine} from "@babylonjs/core";
import {TrainingGameScene} from "./src/NeatIA/TrainingGameScene";
import {MockScene} from "./src/networking/MockEngine";
import {Environment} from "./src/Environment";
import {ClientPlayer} from "./src/players/ClientPlayer";
import {TrainingGameSceneRandomShoot} from "./src/NeatIA/TrainingGameSceneRandomShoot";
// Create a new JSDOM instance

let engine = new NullEngine()

let scene = new MockScene(engine);
let nbRenderLoop = 0;
Environment.createInstance(scene);
Environment.instance.init().then(() => {
    console.log('Environment initialized');
    let trainingGameScene = new TrainingGameSceneRandomShoot(engine, null, scene, () => console.log('Game Over'), ClientPlayer, ClientPlayer);
    engine.runRenderLoop(() => {
        nbRenderLoop++;
        let t1 = performance.now();
        for (let i = 0; i < 100; i++){
            trainingGameScene.runRenderLoop();
        }
        let t2 = performance.now();
        if (nbRenderLoop %500 == 0){
            console.log('Time to run 100 render loops: ' + (t2 - t1) + 'ms');
        }
    });
});



