<template>
  <div
    class="tile"
    @click="setSelectedTile({ id: props.tileData.id, ...props.tileData })"
    :class="{
      isSelected: boardStore.selectedTile.id == props.tileData.id && groupsData,
      isCollected:
        props.teamData && props.teamData?.collected.hasOwnProperty(props.tileData.id) ? 1 : 0,
      isVerify: props.teamData?.verify?.includes(props.tileData.id),
      needVerifying: props.needVerifying,
      allowHover: groupsData ? true : false,
      hidden:
        props?.isEditor == false &&
        (props.tileData?.hidden == true || props.tileData?.type == 'null')
    }"
  >
    <div v-if="props?.isEditor == true && props.tileData?.hidden == true" class="hidden-indicator">
      <FontAwesomeIcon class="icon" :icon="['fas', 'eye-low-vision']" />
    </div>
    <img
      v-if="
        (props?.isEditor == true && props.tileData?.type != 'null' && !props.tileData?.hidden) ||
        props.tileData?.hidden ||
        (props.isEditor != true && props.tileData.type != 'null' && !props.tileData?.hidden)
      "
      :src="
        props.teamData &&
        props.tileData.altImg &&
        props.teamData?.collected.hasOwnProperty(props.tileData.id)
          ? props.tileData.altImg
          : props.tileData.img ||
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
            class="tileFlag"
            :class="'flag-end-' + group.flagEnd"
            :icon="group.icon"
            color="none"
            :inverted="true"
            :style="{
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

<style scoped></style>
