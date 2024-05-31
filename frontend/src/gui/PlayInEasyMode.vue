<template>
  <div class="menu">
    <div class="menu-text-container">
      <p class="menu-text text-white text-2xl">Voulez-vous jouer en mode facile ?</p>
      <p class="menu-text text-white">En mode facile, vous renvoyez la balle automatiquement sans que vous ayez besoin de tirer.</p>
      <p class="menu-text text-white">Attention, cela rend le jeu un peu moins amusant.</p>
    </div>
    <div class="menu-buttons-container">
      <button @click="handleButtonClick(true)" class="menu-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Oui</button>
      <button @click="handleButtonClick(false)" class="menu-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Non</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['buttonClicked']);

const handleButtonClick = (value: boolean) => {
  emits('buttonClicked', value);
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/assets/bg.png'); /* Remplacez par le chemin de votre image */
  background-size: cover; /* Assure que l'image couvre toute la zone de fond */
  background-position: center; /* Centre l'image de fond */
  background-repeat: no-repeat; /* Empêche l'image de fond de se répéter */
}

.menu-text-container {
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.6); /* Noir semi-transparent */
  border-radius: 10px; /* Bords arrondis */
  padding: 10px; /* Espace intérieur pour le texte */
}

.menu-buttons-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.menu-button {
  margin: 10px;
}
</style>