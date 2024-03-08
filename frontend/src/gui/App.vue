<script setup lang="ts">
import Overlay from "./Overlay.vue";
import "./main.css"
import { onMounted, ref } from 'vue';

const loading = ref(true)

const renderCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (renderCanvas.value) {
    const module = await import('../AppOne');

    loading.value = false

    let App = module.AppOne;
    let app = new App(renderCanvas.value);
    app.run();
  }
})
</script>

<template>
  <!-- Overlay -->
  <div class="absolute z-10">
    <!-- <Overlay /> -->
  </div>

  <!-- Loading screen -->
  <div v-if="loading" class="absolute z-20">
    Chargement en cours...
  </div>

  <!-- Game canvas -->
  <canvas ref="renderCanvas" id="renderCanvas"/>
</template>

<style>
#renderCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
