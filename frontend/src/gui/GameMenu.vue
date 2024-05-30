<script setup lang="ts">
import {Api} from "../networking/Api";
import GameModes from "./GameModes";
import MenuButton from "./MenuButton.vue"
import {computed, ref} from "vue"
import {ModalsContainer, VueFinalModal} from 'vue-final-modal'

import 'vue-final-modal/style.css'
import {PlayerAction} from "../enum/PlayerAction.ts";
import {BoardSide} from "../enum/BoardSide.ts";
import {KeyMappingInterface} from "../interface/KeyMappingInterface.ts";
import {FrontendEvent} from "../FrontendEvent.ts";


const emit = defineEmits<{ (e: "onPlay", mode: GameModes, roomId: null | any): void }>()

const props = defineProps({
    loading: {
        default: true,
        type: Boolean
    }
})

const choosenMode = ref<GameModes>(GameModes.campaign)

const centerScreenMode = ref("bot")

const roomId = ref<null | any>(null)

const createMultiplayerGame = () => {
    choosenMode.value = GameModes.multiplayer;
    centerScreenMode.value = "create";

    Api.createPrivateRoom((room) => {
        roomId.value = room;
    },(room) => {
      emitOnPlay();
    }, "a")
}

const joinMultiplayerGame = () => {
    roomId.value = ""
    choosenMode.value = GameModes.multiplayer
    centerScreenMode.value = "join"
}

const joinPublicGame = () => {
    choosenMode.value = GameModes.multiplayer
    centerScreenMode.value = "join-public"

    Api.startMatchMaking((room) => {
        roomId.value = room
        emitOnPlay()
    })
}

const cancelMatchmaking = async () => {
    try {
        await Api.stopMatchMaking()
    } catch (error) {}

    centerScreenMode.value = "multiplayer-selection"
}

const emitOnPlay = () => {
    emit("onPlay", choosenMode.value, roomId.value)
}

const showAbout = ref(false)
const showCredits = ref(false)
const showSetting = ref(false)

const isMainButtonDisabled = computed(() => {
    return props.loading // Pas possible de jouer tant qu'on charge la page
        || (centerScreenMode.value == "multiplayer-selection" && choosenMode.value != GameModes.multilayerLocal) // Pas possible si on a pas cliqué sur multi local
        || (["join", "create"].includes(centerScreenMode.value) && !roomId.value) // Pas possible tant qu'on a pas un ID de room à rejoindre
})
const isKeyText = ref("Modifier");
const keyEdit = (playerAction: PlayerAction, boardSide: BoardSide) => {
  console.log("edit");
  isKeyText.value = "Appuyez sur une touche";
  KeyMappingInterface._instance.listenTotKeyPress(playerAction, boardSide);
}
KeyMappingInterface.init();
function replaceCharToKey(char: string) {
  switch (char) {
    case "ArrowUp":
      return "↑";
    case "ArrowDown":
      return "↓";
    case "ArrowLeft":
      return "←";
    case "ArrowRight":
      return "→";
    case " ":
      return "Space";
    default:
      return char;
  }
}
const LeftKeyMappingJump =ref(replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.jump));
const LeftKeyMappingLeft =ref(replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.left));
const LeftKeyMappingRight =ref(replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.right));
const LeftKeyMappingShoot =ref(replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.shoot));

const RightKeyMappingJump =ref(replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.jump));
const RightKeyMappingLeft =ref(replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.left));
const RightKeyMappingRight =ref(replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.right));
const RightKeyMappingShoot =ref(replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.shoot));

KeyMappingInterface._instance.addObserver(()=>{
  isKeyText.value = "Modifier";


  LeftKeyMappingJump.value = replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.jump);
  LeftKeyMappingLeft.value = replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.left);
  LeftKeyMappingRight.value = replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.right);
  LeftKeyMappingShoot.value = replaceCharToKey(KeyMappingInterface._instance.playerLeftKeyMapping.shoot);

  RightKeyMappingJump.value = replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.jump);
  RightKeyMappingLeft.value = replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.left);
  RightKeyMappingRight.value = replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.right);
  RightKeyMappingShoot.value = replaceCharToKey(KeyMappingInterface._instance.playerRightKeyMapping.shoot);
})

function waitForKeypress(): Promise<KeyboardEvent> {
  return new Promise((resolve) => {
    window.addEventListener('keydown', function onKeydown(event) {
      if (event.key === 'Enter') {
        window.removeEventListener('keydown', onKeydown); // Supprimer l'écouteur d'événements après avoir reçu la première touche
        resolve(event);
      }
    });
  });
}

async function onStartup() {
  if (localStorage.getItem("tuto") === "true")
    return;
  for (let i = 1; i <= 5; i++) {
    FrontendEvent.onShowImage(`assets/tuto/${i}.jpg`);
    await waitForKeypress();
    FrontendEvent.onMaskImage();
  }
  localStorage.setItem("tuto", "true");




}

setTimeout(() => {
    onStartup()
}, 0)



const handleBeforeClose = (event: { stop: () => void }) => {
  if (isKeyText.value !== 'Modifier') {
     event.stop();
  }
};
</script>

<template>
    <div
        class="flex flex-col items-center gap-3 bg-gradient-to-br from-slate-500/90 to-slate-500/60 text-white p-7 rounded">
        <div v-if="loading" class="absolute top-[-40px] animate-pulse text-lg">
            Chargement en cours...
        </div>
        <h1 class="text-4xl">
            SkySwap Volley
        </h1>
        <hr class="w-1/2">
        <div class="flex flex-col gap-2 items-center">
            <MenuButton @click="emitOnPlay" class="my-4"
                :disabled="isMainButtonDisabled">
                J o u e r
            </MenuButton>

            <div class="flex flex-col gap-2 p-2.5 outline-dashed rounded">
                <div class="flex gap-3">
                    <div>
                        <input type="radio" name="mode" id="bot" class="hidden peer" checked value="bot"
                            v-model="centerScreenMode" @click="choosenMode = GameModes.campaign"/>
                        <label for="bot" class="peer-checked:bg-[#3da78e] p-1 rounded-md cursor-pointer">🤖 Contre un
                            bot</label>
                    </div>
                    <div>
                        <input type="radio" name="mode" id="multiplayer" value="multiplayer-selection" class="hidden peer"
                            v-model="centerScreenMode" />
                        <label for="multiplayer" class="peer-checked:bg-[#3da78e] p-1 rounded-md cursor-pointer">🤼‍♂️
                            Multijoueur</label>
                    </div>
                </div>
                <div class="relative w-full h-[170px]">
                    <div v-if="centerScreenMode == 'bot'"
                        class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start gap-2 py-2 hidden-menu-option">
                        <div>
                            <input type="radio" name="difficulty" id="campaign" class="hidden peer" v-model="choosenMode"
                                :value="GameModes.campaign" />
                            <label for="campaign" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">⚔️
                                Campagne</label>
                        </div>
                        <hr class="border-dashed w-1/2 self-center m-2">
                        <div>
                            <input type="radio" name="difficulty" id="easy" class="hidden peer"
                                v-model="choosenMode" :value="GameModes.botEasy" />
                            <label for="easy" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">👶
                                Facile</label>
                        </div>
                        <div>
                            <input type="radio" name="difficulty" id="medium" class="hidden peer" v-model="choosenMode"
                                :value="GameModes.botMedium" />
                            <label for="medium" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">🤯
                                Moyen</label>
                        </div>
                        <div>
                            <input type="radio" name="difficulty" id="hard" class="hidden peer" v-model="choosenMode"
                                :value="GameModes.botHard" />
                            <label for="hard" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">☠️
                                Difficile</label>
                        </div>
                    </div>
                    <div v-else-if="centerScreenMode == 'multiplayer-selection'"
                        class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div class="flex flex-col justify-between items-center h-[160px]">
                            <button class="inline-block p-1 rounded-md" :class="{'bg-[#86b6abe3]' : choosenMode == GameModes.multilayerLocal}" @click="choosenMode = GameModes.multilayerLocal">
                                🧔Multijoueur local👩‍🦰
                            </button>
                            <hr class="border-dashed w-1/2 self-center m-2">
                            <button class="p-1 rounded hover:bg-white/20 transition-all" @click="joinPublicGame">
                                Rejoindre une partie publique
                            </button>
                            <button class="p-1 rounded hover:bg-white/20 transition-all" @click="createMultiplayerGame">
                                Créer une partie privée en ligne
                            </button>
                            <button class="p-1 rounded hover:bg-white/20 transition-all" @click="joinMultiplayerGame">
                                Rejoindre une partie privée en ligne
                            </button>
                        </div>
                    </div>
                    <div v-else-if="centerScreenMode == 'create'"
                        class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div v-if="!roomId" class="animate-pulse">
                            Création de la partie...
                        </div>
                        <div v-else>
                            {{ roomId.id }}
                        </div>
                    </div>
                    <div v-else-if="centerScreenMode == 'join'" class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-3">
                        <label for="menu-room-id">Entrer le code de la partie</label>
                        <input type="text" id="menu-room-id" class="border text-sm rounded-lg block w-5/6 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="roomId">
                    </div>
                    <div v-else class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-5">
                        <div class="animate-pulse">
                            Attente d'une partie libre...
                        </div>
                        <button class="p-1 rounded hover:bg-white/20 transition-all" @click="cancelMatchmaking">
                            ❌ Annuler
                        </button>
                    </div>
                </div>
            </div>

            <button class="underline" @click="showSetting = true">
              ⚙️ Paramètres des touches ⚙️
            </button>
          <VueFinalModal v-model="showSetting" :onBeforeClose="handleBeforeClose" class="flex justify-center items-center text-white" content-class="max-w-xl mx-4 p-4 bg-slate-500 rounded-lg space-y-2">
            <h1 class="text-xl mb-4">
              Paramètres des touches
            </h1>

            <p class="font-bold">
              Joueur de gauche :
            </p>
            <div class="flex flex-col space-y-2">
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ LeftKeyMappingJump }}': Sauter</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Jump,BoardSide.Left)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ LeftKeyMappingLeft }}': Gauche</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Left,BoardSide.Left)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ LeftKeyMappingRight }}': Droite</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Right,BoardSide.Left)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ LeftKeyMappingShoot }}': Frapper</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Shoot,BoardSide.Left)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
            </div>
            <p class="font-bold">
              Joueur de droite :
            </p>
            <div class="flex flex-col space-y-2">
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ RightKeyMappingJump }}': Sauter</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Jump,BoardSide.Right)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ RightKeyMappingLeft }}': Gauche</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Left,BoardSide.Right)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ RightKeyMappingRight }}': Droite</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Right,BoardSide.Right)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
              <div class="flex justify-between items-center gap-2">
                <p>Touche '{{ RightKeyMappingShoot }}': Frapper</p>
                <button class="p-1 rounded hover:bg-white/20 transition-all"
                        :class="{ 'opacity-50 cursor-not-allowed': isKeyText !== 'Modifier' }"
                        @click="keyEdit(PlayerAction.Shoot,BoardSide.Right)"
                        :disabled="isKeyText !== 'Modifier'">
                  {{ isKeyText }}
                </button>
              </div>
            </div>

          </VueFinalModal>

            <button class="underline" @click="showAbout = true">
                À propos
            </button>
            <VueFinalModal v-model="showAbout" class="flex justify-center items-center text-white" content-class="max-w-xl mx-4 p-4 bg-slate-500 rounded-lg space-y-2">
                <h1 class="text-xl">
                    À propos
                </h1>
                <p>
                    Ce jeu a été crée par Corentin VEILLARD et Raphaël CALDWELL pour
                    <a href="https://www.cgi.com/france/fr-fr/event/games-on-web-2024" target="_blank">l'édition 2024 du Games on Web</a>.
                </p>
            </VueFinalModal>

            <button class="underline" @click="showCredits = true">
                Crédits
            </button>
            <VueFinalModal v-model="showCredits" class="flex justify-center items-center text-white" content-class="max-w-xl mx-4 p-4 bg-slate-500 rounded-lg space-y-2">
                <h1 class="text-xl">
                  Crédits
                </h1>
                <ul class="list-disc list-inside">
                  <li>
                    3D character models and animations : <a href="https://quaternius.com">https://quaternius.com</a>
                  </li>
                  <li>
                    Volleyball by jeremy [<a href="https://creativecommons.org/licenses/by/3.0/">CC-BY</a>] via <a href="https://poly.pizza/m/dLNXjvvcDQ_">Poly Pizza</a>
                  </li>
                  <li>
                    Apartment building by Poly by Google [<a href="https://creativecommons.org/licenses/by/3.0/">CC-BY</a>] via <a href="https://poly.pizza/m/01lqee-dZAr">Poly Pizza</a>
                  </li>
                  <li>
                    Large Building 1 by <a href="https://poly.pizza/m/sxXonOmtct">Kenney</a>
                  </li>
                  <li>
                    Large Building 2 by <a href="https://poly.pizza/m/yKo7F36Qk2">Kenney</a>
                  </li>
                  <li>
                    Large Building 3 by <a href="https://poly.pizza/m/h7Jaq7bqMq">Kenney</a>
                  </li>
                  <li>
                    Wooden Wall by <a href="https://poly.pizza/m/8C9NBoi9cA">Quaternius</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=RqZIVrPm5RY">Volley ball Sound Effect</a>
                  </li>
                </ul>
            </VueFinalModal>



            <ModalsContainer />
        </div>

    </div>
</template>
