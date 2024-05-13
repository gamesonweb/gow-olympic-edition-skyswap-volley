<script setup lang="ts">
import {FrontendEvent} from "../FrontendEvent.ts";

const toMenu = () => {
  FrontendEvent.onGameAborted();
  FrontendEvent.onGameUnpaused();
}
</script>

<template>
    <div class="w-full h-full bg-black/30 grid place-items-center text-white">
        <div class="flex flex-col items-center gap-10 p-10 bg-gradient-to-br from-slate-500/90 to-slate-500/60 rounded">
            <h1 class="text-5xl text-center">
                Jeu en Pause
            </h1>

            <p>
                Le jeu est en pause, appuyez sur la touche
                <kbd class="px-2 py-1.5 text-xs font-semibold rounded-lg bg-gray-600 text-gray-100 border-gray-500">
                    échap</kbd> pour revenir au jeu.
            </p>

            <button @click="toMenu" class="bg-[#3da78e] p-2 rounded transition-colors hover:bg-[#4accad]">
                Revenir au menu
            </button>
        </div>
    </div>
</template>
