<template>
  <div v-if="tileData" class="tile" :data-coord="tileData.id" :class="{ isCollected: collectedTile }">
    <img :src="tileData.img || 'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'" />
    <!-- <img src="https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e" /> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  tile: {
    type: Object,
    required: true
  },
  collected: {
    type: Array,
    default: () => { }
  }
})
const tileData = computed(() => props.tile)
const collectedTile = computed(() => props.collected.includes(tileData.value.id))
</script>

<style scoped>
.tile {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  box-sizing: border-box;
  border: var(--border);
  border-radius: var(--border-radius);
  position: relative;
  overflow: clip;
  aspect-ratio: 1;
}

.tile img {
  box-sizing: border-box;
  --size: 75%;
  position: absolute;
  inset: 50%;
  margin-left: calc(-1 * (var(--size) / 2));
  margin-top: calc(-1 * (var(--size) / 2));
  width: var(--size);
  height: var(--size);
  object-fit: contain;
}

.isCollected {
  background-color: red;
}
</style>
