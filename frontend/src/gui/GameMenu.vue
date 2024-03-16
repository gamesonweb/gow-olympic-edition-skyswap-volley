<script setup lang="ts">
import MenuButton from "./MenuButton.vue"
import { ref } from "vue"

defineEmits<{(e: "onPlay", mode: string): void}>()
// TODO : le second agrument, enum, controle tout

const againstBot = ref("bot")
</script>

<template>
    <div class="flex flex-col items-center gap-3 bg-slate-700 text-white p-7 rounded">
        <h1 class="text-4xl">
            SkySwap Volley
        </h1>
        <hr class="w-1/2">
        <div class="flex flex-col gap-2 items-center">
            <MenuButton @click="$emit('onPlay', 'bot-easy')" class="my-4">
                J o u e r
            </MenuButton>

            <div class="flex gap-2">
                <div>
                    <input type="radio" name="mode" id="bot" class="hidden peer" checked value="bot" v-model="againstBot"/>
                    <label for="bot" class="peer-checked:bg-[#3da78e] p-1 rounded-md cursor-pointer">🤖 Contre un bot</label>
                </div>
                <div>
                    <input type="radio" name="mode" id="multiplayer" value="multiplayer" class="hidden peer" v-model="againstBot"/>
                    <label for="multiplayer" class="peer-checked:bg-[#3da78e] p-1 rounded-md cursor-pointer">🤼‍♂️ Multijoueur</label>
                </div>
            </div>

            <div class="relative w-full h-[110px]">
                <div v-if="againstBot == 'bot'" class="absolute top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 py-2 hidden-menu-option">
                    <div>
                        <input type="radio" name="difficulty" id="easy" class="hidden peer" checked />
                        <label for="easy" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer">👶 Facile</label>
                    </div>
                    <div>
                        <input type="radio" name="difficulty" id="medium" class="hidden peer" disabled/>
                        <label for="medium" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer hover:cursor-not-allowed">🤯 Moyen</label>
                    </div>
                    <div>
                        <input type="radio" name="difficulty" id="hard" class="hidden peer" disabled/>
                        <label for="hard" class="peer-checked:bg-[#86b6abe3] p-1 rounded-md cursor-pointer hover:cursor-not-allowed">☠️ Difficile</label>
                    </div>
                </div>
                <div v-else class="absolute w-full top-2/4 left-2/4 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                    Multijoueur basique séléctionné
                </div>
            </div>

            <button>
                À propos
            </button>
            <button>
                Crédits
            </button>
        </div>
    </div>
</template>
