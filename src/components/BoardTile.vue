<template>
  <div
    v-if="tileData"
    class="tile"
    :data-coord="tileData.id"
    :class="{
      isCollected: collectedTile,
      needVerifying: props.needVerifying,
      isVerify: verifyTile,
      isSelected: tileSelected
    }"
  >
    <!-- <img :src="'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'" /> -->
    <img
      :src="
        tileData.img ||
        'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'
      "
    />

    <div class="boardTileFlags">
      <template v-if="groups">
        <template v-for="group in groups">
          <tileFlag
            class="tileFlag"
            v-if="group.collected.includes(tileData.id)"
            :class="'flag-end-' + group.flagEnd"
            :key="tileData.id + group.color"
            :icon="group.icon"
            :color="none"
            :inverted="true"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import tileFlag from './tileFlag.vue'
const props = defineProps({
  tile: {
    type: Object,
    required: true
  },
  collected: {
    type: Array,
    default: () => {}
  },
  verify: {
    type: Array,
    default: () => {}
  },
  selected: {
    type: Boolean,
    default: false
  },
  needVerifying: {
    type: Boolean,
    required: false
  },
  groupsData: {
    type: Object
  }
})
const tileData = computed(() => props.tile)
const groups = computed(() => props.groupsData)
const tileSelected = computed(() => props.selected)
const collectedTile = computed(() => props.collected?.includes(tileData.value.id))
const verifyTile = computed(() => props.verify?.includes(tileData.value.id))
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
  box-sizing: border-box;
}

.tile.isSelected {
  border-color: rgb(252, 229, 55);
  border-width: 3px;
  border-collapse: separate;
}

.tile:hover {
  scale: 1.05;
  border-color: rgb(252, 229, 55);
  background-color: #3c3c3c;
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

.isVerify,
.needVerifying {
  background-color: rgba(249, 191, 83, 0.1);
}

.isCollected {
  position: relative;
  background-color: rgba(83, 249, 93, 0.1);
}

.tileFlag {
  --width: 24px;
  display: block;
  position: relative;
  width: var(--width);
  height: calc(var(--width) / 2);
  z-index: 100;
}

.tileFlag:after {
  display: block;
  width: 100%;
  height: 200%;
  position: absolute;
  aspect-ratio: 1;
  top: calc(var(--width) / 2);
  left: 0;
  z-index: 50;
  content: ' ';
  background-color: white;
}

.flag-end-round:after {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.flag-end-split:after {
  background-color: unset;
  border-width: 12px;
  border-style: solid;
  height: 0;
  width: 0px;
  border-left-color: white;
  border-right-color: white;
  border-top-color: white;
  border-bottom-color: transparent;
}

.flag-end-point:after {
  background-color: unset;
  border-width: 12px;
  border-top-width: 22px;
  width: 0px;
  aspect-ratio: 1;
  border-style: solid;
  height: 0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: white;
  border-bottom-color: transparent;
}

.boardTileFlags {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: -1;
}

img {
  z-index: 1000000;
}
</style>