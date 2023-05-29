<template>
  <div>
    <ul v-if="props.groupsData">
      <li v-for="(group, index) in props.groupsData" :key="index + group.id" class="tooltip">
        <tileFlag
          :color="group.color"
          class="tileFlag"
          :class="'flag-end-' + group.flagEnd"
          :inverted="group.name == `Ahka's Cum Balls`"
          :icon="group.icon"
          :style="{
            '--groupColor': group.color,
            '--width': (group.points / 750) * 100 * 1.5 + 'px'
          }"
        />
        {{ group.name }}<br />
        <span class="tooltiptext">
          <span v-for="member in group.member" :key="member">{{ member }}<br /></span>
        </span>
        score: {{ group.points }}<br /><br />
      </li>
      <li>
        <!-- <router-link class="btn" :to="{ name: 'stats-graph', params: { boardUUID: boardStore.boardUUID } }"
          >Go To Graph</router-link
        > -->
      </li>
      <li class="rules" v-if="boardStore.rules != undefined">
        {{ boardStore.rules }}
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { storeToRefs } from 'pinia'
import tileFlag from './tileFlag.vue'
import { useBoardStore } from '@/stores/board'
// import { route } from 'vue-router'
const boardStore = useBoardStore()
// boardStore.setBoardUUID(route.params.boardUUID)
const props = defineProps({
  groupsData: {
    type: Object,
    required: true
  }
})
</script>
<style scoped>
ul {
  list-style-type: none;
  z-index: 100;
}

.tileFlag {
  display: block;
  position: relative;
  width: var(--width);
  z-index: 100;
}

.tileFlag:after {
  display: block;
  height: 100%;
  position: absolute;
  aspect-ratio: 1;
  top: 0;
  left: var(--width);
  z-index: 50;
  content: ' ';
  background-color: var(--groupColor);
}

.flag-end-round:after {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}

.flag-end-split:after {
  background-color: unset;
  border-width: 11px;
  border-style: solid;
  height: 0;
  border-left-color: var(--groupColor);
  border-right-color: transparent;
  border-top-color: var(--groupColor);
  border-bottom-color: var(--groupColor);
}

.flag-end-point:after {
  background-color: unset;
  border-width: 11px;
  border-left-width: 22px;
  aspect-ratio: 2/4;
  border-style: solid;
  height: 0;
  border-left-color: var(--groupColor);
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
.rules {
  margin-top: 25px;
  white-space: pre-line;
  word-wrap: break-word;
  max-width: 31ch;
  background: var(--color-secondairy);
  border-radius: var(--border-radius);
  padding: 15px;
}
</style>
