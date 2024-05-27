<script setup lang="ts">
import ScoreDisplay from "./ScoreDisplay.vue";
import LoadingScreen from "./LoadingScreen.vue";
import PauseMenu from "./PauseMenu.vue";
import GameMenu from "./GameMenu.vue";
import "./main.css"
import { onMounted, ref } from 'vue';
import { GameLoader } from "../GameLoader.ts";
import { FrontendEvent } from "../FrontendEvent.ts";
import { Api } from "../networking/Api.ts";
import GameModes from "./GameModes.ts";
import DisplaysImage from "./DisplaysImage.vue";
import ContinueIfLoos from "./ContinueIfLoos.vue";

const loading = ref(true)

const showMenu = ref(false)

const showPause = ref(false)

const showImage = ref(false)

const showContinueIfLoos = ref(false)


const renderCanvas = ref<HTMLCanvasElement | null>(null)

const newImagePath = ref("/assets/bg.png");
let callback: (val:boolean) => void = (val:boolean) => {};
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

    FrontendEvent.setOnGamePaused(() => {
      showPause.value = true
    })

    FrontendEvent.setOnGameUnpaused(() => {
      showPause.value = false
    })

    FrontendEvent.setOnShowImage((path: string) => {
      newImagePath.value = path;
      showImage.value = true;
      console.log("Show image");
    })

    FrontendEvent.setOnMaskImage(() => {
      showImage.value = false;
      console.log("Hide image");
    })

    FrontendEvent.setOnShowContinueIfLoos((value:((val:boolean) => void)) => {
      showContinueIfLoos.value = true;
      callback = value;
    })
  }
})

const handleGameStart = (mode: GameModes, room: null | any) => {
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
      if (room == null) break;
      if (typeof room === "string") {
        Api.joinPrivateRoom((roomP :any) => {
          console.log(roomP)
          console.log(typeof roomP)
          GameLoader.instance.startMultiplayerGame(roomP)
        },"a",room)
      }else {
        GameLoader.instance.startMultiplayerGame(room)
      }
      break;

    case GameModes.multilayerLocal:
      GameLoader.instance.startLocalMultiplayerPlayerGame()
      break;
    case GameModes.campaign:
      GameLoader.instance.startCampaignGame()
      break;

    default:
      break;
  }



  renderCanvas.value?.focus();
  newImagePath.value = "/assets/background.jpg";
}
const handleContinueIfLoos = (value: boolean) => {
  console.log("Continue if loos: " + value);
  showContinueIfLoos.value = false;
  callback(value);
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="!loading && !showMenu" class="absolute z-10 w-fit mx-auto left-0 right-0 pointer-events-none">
    <ScoreDisplay />
  </div>

  <div v-if="loading || showMenu" style="background-image: url('/assets/bg.png');"
    class="overflow-hidden bg-center bg-cover bg-no-repeat h-full w-full">
    <GameMenu :loading="loading" @on-play="handleGameStart" class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2" />
  </div>

  <!-- Pause menu -->
  <div v-if="showPause">
    <PauseMenu class="absolute z-40 left-0 right-0 top-0 bottom-0"/>
  </div>

  <div v-if="showImage">
    <DisplaysImage :img="newImagePath" class="absolute z-40 left-0 right-0 top-0 bottom-0"/>
  </div>

  <div v-if="showContinueIfLoos">
    <ContinueIfLoos @button-clicked="handleContinueIfLoos" class="absolute z-40 left-0 right-0 top-0 bottom-0"/>
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
