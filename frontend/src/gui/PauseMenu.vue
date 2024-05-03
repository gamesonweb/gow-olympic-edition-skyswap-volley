<script setup lang="ts">
import {FrontendEvent} from "../FrontendEvent.ts";

const toMenu = () => {
  FrontendEvent.onGameAborted();
  FrontendEvent.onGameUnpaused();
}
</script>

<template>
    <div class="w-full h-full bg-black/50 grid place-items-center text-white">
        <div class="bg-gradient-to-br from-slate-500/90 to-slate-500/60 w-40 rounded">
            <h1>
                Jeu en Pause
            </h1>

            <p>
                Le jeu est en pause, appuyez sur echap pour revenir au jeu.
            </p>

            <button @click="toMenu" class="bg-black">
                Revenir au menu
            </button>
        </div>
    </div>
</template>
