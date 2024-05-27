<template>
  <div class="score-display">
    <p class="score-text">Score final:</p>
    <p class="score-text">Joueur 1: {{ scorePlayer1 }}</p>
    <p class="score-text">Joueur 2: {{ scorePlayer2 }}</p>
    <button @click="handleButtonClick" class="my-button">Cliquez moi</button>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

const emits = defineEmits(['buttonClicked']);

const handleButtonClick = () => {
  emits('buttonClicked');
}

const props = defineProps({
  scorePlayer1: {
    default: 0,
    type: Number
  },
  scorePlayer2: {
    default: 0,
    type: Number
  }
})
</script>

<style scoped>
.score-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.score-text {
  margin-bottom: 20px;
}
</style>