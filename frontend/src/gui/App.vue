<script setup lang="ts">
import ScoreDisplay from "./ScoreDisplay.vue";
import LoadingScreen from "./LoadingScreen.vue";
import GameMenu from "./GameMenu.vue";
import "./main.css"
import { onMounted, ref } from 'vue';
import { GameLoader } from "../GameLoader.ts";
import { FrontendEvent } from "../FrontendEvent.ts";
import { Api } from "../networking/Api.ts";
import GameModes from "./GameModes.ts";

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
      console.log("Game Ended");
      loading.value = true;
      // quand le jeu est terminé il faut re télécharger sertrains assets donc on remet le loading jusqu'à ce que le jeu soit chargé
    });

    FrontendEvent.setOnGameStart((finalScore: number) => {
      console.log("Game Started and ended with score: " + finalScore);
    });
  }
})

const handleGameStart = (mode: GameModes, roomId: null | string) => {
  showMenu.value = false;

  switch (mode) {
    case GameModes.botEasy:
      GameLoader.instance.startSinglePlayerGameAgainsEasyBot()
      break;

    case GameModes.botMedium:
      GameLoader.instance.startSinglePlayerGameAgainsMediumBot()
      break;

    case GameModes.botHard:
      GameLoader.instance.startSinglePlayerGameAgainsHardBot()
      break;

    case GameModes.multiplayer:
      if (roomId == null) break;
      Api.joinPrivateRoom((room) => {
        GameLoader.instance.startMultiplayerGame(room)
      }, "a", roomId)
      break;

    case GameModes.multilayerLocal:
      GameLoader.instance.startLocalMultiplayerPlayerGame()
      break;

    default:
      break;
  }

  renderCanvas.value?.focus();
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="!loading && !showMenu" class="absolute z-10 w-fit mx-auto left-0 right-0 pointer-events-none">
    <ScoreDisplay />
  </div>

  <div v-if="showMenu" style="background-image: url('/assets/bg.png');"
    class="overflow-hidden bg-center bg-cover bg-no-repeat h-full w-full">
    <GameMenu @on-play="handleGameStart" class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2" />
  </div>

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
