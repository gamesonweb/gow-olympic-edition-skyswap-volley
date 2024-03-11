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
        <div class="flex flex-col gap-1">
            <MenuButton @click="$emit('singleplayer')" class="">
                J o u e r
            </MenuButton>

            <button @click="$emit('localMultiplayer')">
                Options
            </button>
            <button>
                À propos
            </button>
            <button>
                Crédits
            </button>
        </div>
    </div>
</template>
