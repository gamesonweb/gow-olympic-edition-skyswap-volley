<script setup lang="ts">
import "./main.css"
import { onMounted, ref } from 'vue';

const renderCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (renderCanvas.value) {
    const module = await import('../AppOne');

    let App = module.AppOne;
    let app = new App(renderCanvas.value);
    app.run();
  }
})
</script>

<template>
  <!-- Overlay -->
  <div class="absolute z-10">
    I'm an overlay
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
