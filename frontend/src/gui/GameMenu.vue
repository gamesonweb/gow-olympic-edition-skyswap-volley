<script setup lang="ts">
import MenuButton from "./MenuButton.vue"

defineEmits(["singleplayer", "localMultiplayer", "networkMultiplayer"])
</script>

<template>
    <div class="flex flex-col items-center gap-3 bg-slate-700 text-white p-7 rounded">
        <h1 class="text-4xl">
            SkySwap Volley
        </h1>
        <hr class="w-1/2">
        <div class="flex flex-col gap-2">
            <MenuButton @click="$emit('singleplayer')" class="">
                J o u e r
            </MenuButton>

            <button @click="$emit('localMultiplayer')">
                Contre un bot
            </button>

            <!-- <div class="">
                <div>
                    <input type="radio" name="mode" id="bot" class="hidden peer"/>
                    <label for="bot" class="peer-checked:bg-[#3da78e] p-1 rounded-md">Contre un bot</label>
                </div>
                <div>
                    <input type="radio" name="mode" id="bot" class="hidden peer"/>
                    <label for="bot" class="peer-checked:bg-[#3da78e] p-1 rounded-md">Contre un bot</label>
                </div>
                <div>
                    <input type="radio" name="mode" id="bot" class="hidden peer"/>
                    <label for="bot" class="peer-checked:bg-[#3da78e] p-1 rounded-md">Contre un bot</label>
                </div>
            </div>

            <button>
                À propos
            </button>
            <button>
                Crédits
            </button> -->
        </div>
    </div>
</template>
