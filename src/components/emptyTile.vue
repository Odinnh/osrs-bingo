<template>
  <div class="tile">
    {{ props.tile.coordinates }}
  </div>
</template>

<script setup>
const props = defineProps({
  tile: {
    type: Object
  }
})
</script>

<style scoped>
.tile {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  border: var(--border);
  border-radius: var(--border-radius);
  position: relative;
  overflow: clip;
  aspect-ratio: 1;
  box-sizing: border-box;
}
</style>
