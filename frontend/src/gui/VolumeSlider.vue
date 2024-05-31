<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {Environment} from "../Environment.ts";
import {GameLoader} from "../GameLoader.ts";
import App from "./App.vue";


const sliderValue = ref(1000);


const handleSliderChange = (event:any) => {
  sliderValue.value = event.target.value;
  localStorage.setItem('volume', event.target.value);
  Environment.setGlobalVolume(event.target.value/1500);
  setTimeout(() => {
    if (!Environment.showMenu.value){
      GameLoader.instance._canvas.focus();
    }
  }, 0);
};


onMounted(() => {
  const storedValue = localStorage.getItem('volume');
  if (storedValue) {
    sliderValue.value = Number(storedValue);
    Environment.setGlobalVolume(Number(storedValue)/1500);
  }
});


</script>

<template>
  <div class="relative mb-6" style="position: fixed; bottom: 10px; right: 30px; width: 500px;">
    <img src="/assets/Speaker_Icon.svg" alt="Speaker_Icon" class="absolute left-0 bottom-0" style="width: 40px; height: 40px; left: -50px; bottom: -10px;">
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" :value="sliderValue" @input="handleSliderChange" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700">
    <span class="text-sm text-gray-500 dark:text-white absolute start-0 -bottom-6">Min </span>
    <span class="text-sm text-gray-500 dark:text-white absolute end-0 -bottom-6">Max </span>
  </div>
</template>
