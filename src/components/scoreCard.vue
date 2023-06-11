<template>
  <div>
    <ul v-if="props.groupsData">
      <li v-for="(group, index) in props.groupsData" :key="index + group.id" class="tooltip">
        <tileFlag
          :color="group.color"
          class="tileFlag"
          :class="'flag-end-' + group.flagEnd"
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
        score: {{ group.points ? group.points : '0' }}<br /><br />
      </li>
      <!-- <li>
        <router-link class="btn" :to="{ name: 'stats-graph', params: { boardUUID: boardStore.boardUUID } }"
          >Go To Graph</router-link
        >
      </li> -->
      <li class="rules" v-if="boardStore?.rules != undefined">
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
}
.tileFlag {
  width: var(--width);
}
</style>
