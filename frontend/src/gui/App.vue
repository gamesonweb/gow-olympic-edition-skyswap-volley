<script setup lang="ts">
import ScoreDisplay from "./ScoreDisplay.vue";
import LoadingScreen from "./LoadingScreen.vue";
import "./main.css"
import { onMounted, ref } from 'vue';
import { GameLoader } from "../GameLoader.ts";
import { FrontendEvent } from "../FrontendEvent.ts";

const loading = ref(true)

const renderCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (renderCanvas.value) {
    GameLoader.Init(renderCanvas.value);

    GameLoader.instance.setEventListener(() => {
      console.log("Game Loaded");
      loading.value = false;
      GameLoader.instance.startSinglePlayerGameAgainsBot();
    });
    GameLoader.instance.setEventListenerCatch((e) => {
      console.log("Game not loaded");
      console.error(e);
    });

    FrontendEvent.setOnGameEnd(() => {
      console.log("Game Ended");
      // GameLoader.instance.startSinglePlayerGame();
    });

    FrontendEvent.setOnGameStart((finalScore: number) => {
      console.log("Game Started and ended with score: " + finalScore);
    });
  }
})
</script>

<template>
  <!-- Overlay -->
  <div v-if="!loading" class="absolute z-10 w-fit mx-auto left-0 right-0">
    <ScoreDisplay />
  </div>

  <!-- Loading screen -->
  <div v-if="loading" class="absolute z-20 w-full h-full flex justify-center items-center">
    <LoadingScreen />
  </div>

  <!-- Game canvas -->
  <canvas ref="renderCanvas" id="renderCanvas" />
</template>

<style>
#renderCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>./ScoreDisplay.vue/index.ts
