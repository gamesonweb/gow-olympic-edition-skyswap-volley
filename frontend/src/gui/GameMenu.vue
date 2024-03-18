<script setup lang="ts">
import { Api } from "../networking/Api";
import GameModes from "./GameModes";
import MenuButton from "./MenuButton.vue"
import { ref } from "vue"
import { ModalsContainer, VueFinalModal } from 'vue-final-modal'

import 'vue-final-modal/style.css'

defineEmits<{ (e: "onPlay", mode: GameModes, roomId: null | string): void }>()

const choosenMode = ref<GameModes>(GameModes.botEasy)

const centerScreenMode = ref("bot")

const roomId = ref<null | string>(null)

const createMultiplayerGame = () => {
    choosenMode.value = GameModes.multiplayer
    centerScreenMode.value = "create"

    Api.createPrivateRoom((room) => {
        roomId.value = room.id
    }, "a")
}

const joinMultiplayerGame = () => {
    choosenMode.value = GameModes.multiplayer
    centerScreenMode.value = "join"
}

const showAbout = ref(false)
const showCredits = ref(false)
</script>

<template>
    <div
        class="flex flex-col items-center gap-3 bg-gradient-to-br from-slate-500/90 to-slate-500/60 text-white p-7 rounded">
        <h1 class="text-4xl">
            SkySwap Volley
        </h1>
        <hr class="w-1/2">
        <div class="flex flex-col gap-2 items-center">
            <MenuButton @click="$emit('onPlay', choosenMode, roomId)" class="my-4"
                :disabled="(centerScreenMode == 'multiplayer-selection' && choosenMode != GameModes.multilayerLocal) || (centerScreenMode == 'join' && !roomId)">
                J o u e r
            </MenuButton>

            <div class="flex flex-col gap-2 p-2.5 outline-dashed rounded">
                <div class="flex gap-2">
                    <div>
                        <input type="radio" name="mode" id="bot" class="hidden peer" checked value="bot"
                            v-model="centerScreenMode" @click="choosenMode = GameModes.botEasy"/>
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
                <div class="relative w-full h-[130px]">
                    <div v-if="centerScreenMode == 'bot'"
                        class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 py-2 hidden-menu-option">
                        <div>
                            <input type="radio" name="difficulty" id="easy" class="hidden peer" checked
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
                        <div>
                            <input type="radio" name="difficulty" id="campaign" class="hidden peer" v-model="choosenMode"
                                :value="GameModes.campaign" />
                            <label for="campaign" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">⚔️
                                Campagne</label>
                        </div>
                    </div>
                    <div v-else-if="centerScreenMode == 'multiplayer-selection'"
                        class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div class="flex flex-col justify-between items-center h-[110px]">
                            <button class="inline-block p-1 rounded-md" :class="{'bg-[#86b6abe3]' : choosenMode == GameModes.multilayerLocal}" @click="choosenMode = GameModes.multilayerLocal">
                                Multijoueur local
                            </button>
                            <button class="p-1" @click="createMultiplayerGame">
                                Créer une partie en ligne
                            </button>
                            <button class="p-1" @click="joinMultiplayerGame">
                                Rejoindre une partie en ligne
                            </button>
                        </div>
                    </div>
                    <div v-else-if="centerScreenMode == 'create'"
                        class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div v-if="!roomId">
                            Création de la partie...
                        </div>
                        <div v-else>
                            {{ roomId }}
                        </div>
                    </div>
                    <div v-else class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                        <input type="text" class="text-black" v-model="roomId">
                    </div>
                </div>
            </div>

            <button class="underline" @click="showAbout = true">
                À propos
            </button>
            <VueFinalModal v-model="showAbout" class="flex justify-center items-center text-white" content-class="max-w-xl mx-4 p-4 bg-slate-500 rounded-lg space-y-2">
                À propos
            </VueFinalModal>

            <button class="underline" @click="showCredits = true">
                Crédits
            </button>
            <VueFinalModal v-model="showCredits" class="flex justify-center items-center text-white" content-class="max-w-xl mx-4 p-4 bg-slate-500 rounded-lg space-y-2">
                Crédits
            </VueFinalModal>

            <ModalsContainer />
        </div>
    </div>
</template>
