<script setup lang="ts">
const props = defineProps({
  img: {
    default: "/assets/bg.png",
    type: String
  }
})
</script>

<template>
    <img :src="img" class="fullscreen-image">
</template>

<style scoped>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>