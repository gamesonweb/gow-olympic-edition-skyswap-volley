import { createApp } from 'vue'
import App from './gui/App.vue'
import {Api} from "./networking/Api";
import {GameLoader} from "./GameLoader";
import {FrontendEvent} from "./FrontendEvent";

createApp(App).mount('#app')
/*
window.addEventListener("DOMContentLoaded", async () => {
    let canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    GameLoader.Init(canvas);
    GameLoader.instance.setEventListener(() => {
        console.log("Game Loaded");
        GameLoader.instance.startSinglePlayerGame();
    });
    GameLoader.instance.setEventListenerCatch((e) => {
        console.log("Game not loaded");
        console.error(e);
    });

    FrontendEvent.setOnGameEnd(() => {
        console.log("Game Ended");
        // GameLoader.instance.startSinglePlayerGame();
    });

    FrontendEvent.setOnGameStart((finalScore) => {
        console.log("Game Started and ended with score: " + finalScore);
    });

    FrontendEvent.setOnGamePointScoredLeft((scored) => {
        console.log("Left Player Scored "+ scored);
    });

    FrontendEvent.setOnGamePointScoredRight((scored) => {
        console.log("Right Player Scored "+ scored);
    });

});*/