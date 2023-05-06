<template>
  <div
    class="tile"
    :class="{
      isSelected: store.selectedTile.id == props.tileData.id && groupsData,
      isCollected: props.teamData?.collected.hasOwnProperty(props.tileData.id) ? 1 : 0,
      isVerify: props.teamData?.verify?.includes(props.tileData.id),
      needVerifying: props.needVerifying,
      allowHover: groupsData ? true : false
    }"
  >
    <img
      :src="
        props.tileData.img ||
        'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'
      "
    />
    <div class="boardTileFlags">
      <template v-if="props.groupsData">
        <template v-for="group in props.groupsData" :key="props.tileData.id + group.color">
          <tileFlag
            class="tileFlag"
            :class="'flag-end-' + group.flagEnd"
            :icon="group.icon"
            :color="none"
            :inverted="true"
            :style="{
              opacity: group.collected.hasOwnProperty(props.tileData.id) ? 1 : 0
            }"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import tileFlag from './tileFlag.vue'
import { useBoardStore } from '@/stores/board.js'
const store = useBoardStore()
const props = defineProps({
  tileData: {
    type: Object,
    required: true
  },
  groupsData: {
    type: Object,
    required: false
  },
  teamData: {
    type: Object,
    required: false
  },
  needVerifying: {
    type: Boolean,
    required: false
  }
})
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

.tile.allowHover:hover {
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
  background-color: var(--color-verifying);
}

.isCollected {
  position: relative;
  background-color: var(--color-collected);
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
  background-color: var(--color-primary);
}

.flag-end-round:after {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.flag-end-split:after {
  background-color: unset;
  border-width: calc(var(--width) / 2);
  border-style: solid;
  height: 0;
  width: 0px;
  border-left-color: var(--color-primary);
  border-right-color: var(--color-primary);
  border-top-color: var(--color-primary);
  border-bottom-color: transparent;
}

.flag-end-point:after {
  background-color: unset;
  border-width: calc(var(--width) / 2);
  border-top-width: var(--width);
  width: 0px;
  aspect-ratio: 1;
  border-style: solid;
  height: 0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: var(--color-primary);
  border-bottom-color: transparent;
}

.boardTileFlags {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: -1;
}
.tile img {
  z-index: 1000000;
}
</style>
