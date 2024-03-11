<script setup lang="ts">
import ScoreDisplay from "./ScoreDisplay.vue";
import LoadingScreen from "./LoadingScreen.vue";
import GameMenu from "./GameMenu.vue";
import "./main.css"
import { onMounted, ref } from 'vue';
import { GameLoader } from "../GameLoader.ts";
import { FrontendEvent } from "../FrontendEvent.ts";

const loading = ref(true)

const showMenu = ref(false)

const renderCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (renderCanvas.value) {
    GameLoader.Init(renderCanvas.value);

    GameLoader.instance.setEventListener(() => {
      console.log("Game Loaded");
      loading.value = false;
      showMenu.value = true;
    });
    GameLoader.instance.setEventListenerCatch((e) => {
      console.log("Game not loaded");
      console.error(e);
    });

    FrontendEvent.setOnGameEnd(() => {
      window.location.reload()  // XXX temporaire
    });

    FrontendEvent.setOnGameStart((finalScore: number) => {
      console.log("Game Started and ended with score: " + finalScore);
    });
  }
})

const singlePlayerGame = () => {
  showMenu.value = false;
  GameLoader.instance.startSinglePlayerGameAgainsBot()
  renderCanvas.value?.focus();
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="!loading" class="absolute z-10 w-fit mx-auto left-0 right-0 pointer-events-none">
    <ScoreDisplay />
  </div>

  <GameMenu
    v-if="showMenu"
    @singleplayer="singlePlayerGame()"
    class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2" 
  />

  <!-- Loading screen -->
  <div v-if="loading" class="absolute z-20 w-full h-full flex justify-center items-center">
    <LoadingScreen />
  </div>

  <!-- Game canvas -->
  <canvas ref="renderCanvas" id="renderCanvas" tabindex="1" />
</template>

<style>
#renderCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
