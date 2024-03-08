<script setup lang="ts">
import { ref } from "vue";
import { FrontendEvent } from "../FrontendEvent.ts";

const leftScore = ref(0)
const rightScore = ref(0)

FrontendEvent.setOnGamePointScoredLeft((scored: number) => {
    console.log("Left Player Scored " + scored);
    leftScore.value = scored;
});

FrontendEvent.setOnGamePointScoredRight((scored: number) => {
    console.log("Right Player Scored " + scored);
    rightScore.value = scored;
});
</script>

<template>
    <div
        class="flex items-center gap-4 px-5 py-3 text-6xl text-white select-none rounded-b-lg backdrop-blur-sm bg-gradient-to-br from-white/40 to-white/20 border-white">
        <span>{{ leftScore }}</span>
        <span>-</span>
        <span>{{ rightScore }}</span>
    </div>
</template>
