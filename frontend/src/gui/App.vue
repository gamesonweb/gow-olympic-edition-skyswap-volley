<script setup lang="ts">
import Overlay from "./Overlay.vue";
import "./main.css"
import { onMounted, ref } from 'vue';
import {GameLoader} from "../GameLoader.ts";
import {FrontendEvent} from "../FrontendEvent.ts";

const loading = ref(true)

const renderCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (renderCanvas.value) {
    let canvas = renderCanvas.value;
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

    FrontendEvent.setOnGameStart((finalScore:number) => {
      console.log("Game Started and ended with score: " + finalScore);
    });

    FrontendEvent.setOnGamePointScoredLeft((scored:number) => {
      console.log("Left Player Scored "+ scored);
    });

    FrontendEvent.setOnGamePointScoredRight((scored:number) => {
      console.log("Right Player Scored "+ scored);
    });
  }
})
</script>

<template>
  <!-- Overlay -->
  <div class="absolute z-10">
    <!-- <Overlay /> -->
  </div>

  <!-- Loading screen -->
  <div v-if="loading" class="absolute z-20">
    Chargement en cours...
  </div>

  <!-- Game canvas -->
  <canvas ref="renderCanvas" id="renderCanvas"/>
</template>

<style>
#renderCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>