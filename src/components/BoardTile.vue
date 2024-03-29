<template>
  <div
    v-if="!props.tileData?.hidden || props?.isEditor"
    class="tile"
    @click="setSelectedTile({ id: props.tileData.id, ...props.tileData })"
    :class="{
      isSelected: boardStore.selectedTile.id == props.tileData.id && groupsData,
      isCollected:
        props.teamData && props.teamData?.collected.hasOwnProperty(props.tileData.id) ? 1 : 0,
      allowHover: groupsData ? true : false,
      hidden: props?.isEditor == false && props.tileData?.hidden == true,
      nullTile: props.tileData?.type == 'null' && props?.isEditor == false
    }"
    :style="{ '--_backgroundColor': props.tileData?.bgColor }"
  >
    <div v-if="props?.isEditor == true && props.tileData?.hidden == true" class="hidden-indicator">
      <FontAwesomeIcon class="icon" :icon="['fas', 'eye-low-vision']" />
    </div>
    <img
      v-if="props.tileData?.type !== 'null' || (props.isEditor && props.tileData?.type == 'null')"
      :src="
        props.tileData?.img ||
        props.tileData?.type == 'null' ||
        'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'
      "
    />
    <div class="boardTileFlags">
      <template v-if="props.groupsData">
        <template
          v-for="group in props.groupsData"
          :key="'tile-flag-' + group.name + '-' + props.tileData.id"
        >
          <tileFlag
            v-if="
              (group.collected != undefined &&
                group.collected.hasOwnProperty(props.tileData.id) &&
                isBlackout) ||
              !isBlackout
            "
            class="tileFlag"
            :class="{
              BigFlag: isBlackout,
              'flag-end-round': group.end == 'round',
              'flag-end-split': group.end == 'split',
              'flag-end-point': group.end == 'point'
            }"
            :icon="group.icon"
            :group="group.name"
            :data-name="group?.collected.hasOwnProperty(props.tileData.id) ? group.name : ''"
            :color="isBlackout ? group.color : 'none'"
            :inverted="true"
            :isBlackout="isBlackout"
            :style="{
              '--bg-color': isBlackout ? group.color : 'var(--color-primary)',
              opacity:
                group?.collected != undefined && group?.collected.hasOwnProperty(props.tileData.id)
                  ? 1
                  : 0
            }"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import tileFlag from './tileFlag.vue'
import { useBoardStore } from '@/stores/board.js'
const boardStore = useBoardStore()
const isBlackout = boardStore.isBlackout
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
  },
  isEditor: {
    type: Boolean,
    required: false
  }
})
const setSelectedTile = (tile) => {
  boardStore.setSelectedTile(tile)
}
</script>
<style scoped>
.tile {
  opacity: var(--_opacity);
  font-family: 'Roboto', sans-serif;
  user-select: none;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--_bgClr, var(--_backgroundColor, --color-secondairy));
  position: relative;
  overflow: clip;
  aspect-ratio: 1;
  box-sizing: border-box;
}
.tile.isSelected {
  --color-primary: var(--color-accent);
  border-color: var(--color-accent);
  border-width: 3px;
  border-collapse: separate;
}
.tile.allowHover:hover {
  --color-primary: var(--color-accent);
  scale: 1.05;
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--_backgroundColor, --color-secondairy) 90%, black 100%);
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
  /* filter: brightness(70%) contrast(118%) saturate(0%) hue-rotate(-46deg); */
}
.isVerify,
.needVerifying {
  background-color: var(--color-verifying);
}
.isCollected {
  position: relative;
  background-color: var(--color-collected);
  filter: unset;
}
.tileFlag {
  --width: 24px;
  display: block;
  position: relative;
  width: var(--width);
  height: calc(var(--width) / 2);
  z-index: 100;

  &:after {
    display: block;
    width: 100%;
    height: 200%;
    position: absolute;
    aspect-ratio: 1;
    top: calc(var(--width) / 2);
    left: 0;
    z-index: 50;
    content: ' ';
    background-color: --bg-color;
  }
  &.BigFlag {
    height: 100%;
    width: 100%;
  }
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
  &:has(.BigFlag) {
    height: 100%;
  }
}
.tile img {
  z-index: 2;
}
.hidden {
  display: none;
  pointer-events: none;
}
.nullTile {
  opacity: 0;
  pointer-events: none;
}
.hidden-indicator {
  color: var(--color-primary);
  margin: 3px;
}
</style>
