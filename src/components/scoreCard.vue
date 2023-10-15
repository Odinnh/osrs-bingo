<template>
  <div>
    <ul v-if="props.groupsData">
      <li v-for="(group, index) in props.groupsData" :key="index + group.id" class="tooltip">
        <!-- #TODO: need to calculate the max score dynamically -->
        <tileFlag
          :color="group.color"
          class="tileFlag"
          :class="'flag-end-' + group.flagEnd"
          :icon="group.icon"
          :style="{
            '--groupColor': group.color,
            '--width': (group.points / 25) * 100 * 1.5 + 'px'
          }"
        />
        {{ group.name }}<br />
        <iconButton
          class="iconBtn"
          :label="'view details'"
          @click="openList(group.name)"
          :fasIcon="'eye'"
        />
        <ul v-if="openedLists.includes(group.name)">
          <li v-for="member in group.members" :key="member">{{ member }}</li>
        </ul>
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
import { reactive } from 'vue'
import tileFlag from './tileFlag.vue'
import iconButton from './buttons/iconButton.vue'
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
const openedLists = reactive([])
const openList = (groupName) => {
  document.querySelectorAll(`[name]`).forEach((el) => {
    el.parentNode.parentNode.style.opacity = 1
    el.parentNode.parentNode.style.backgroundColor = 'initial'
    el.parentNode.parentNode.style.borderColor = ''
    el.parentNode.style.opacity = 1
  })
  if (!openedLists.includes(groupName)) {
    openedLists[0] = groupName
    document.querySelectorAll(`[name]`).forEach((el) => {
      el.parentNode.style.opacity = 0.1
      el.parentNode.parentNode.style.borderColor = 'var(--color-accent)'
    })

    document.querySelectorAll(`[name='${groupName}']`).forEach((el) => {
      // el.parentNode.parentNode.style.opacity = 0.05
      el.parentNode.parentNode.style.borderColor = ''
      el.parentNode.parentNode.style.backgroundColor = 'color-mix(in srgb, lime, transparent 90%)'
    })
  } else {
    openedLists[0] = ''
  }
  console.log(groupName)
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
ul li ul {
  list-style-type: circle;
  margin-bottom: 15px;
}
.tileFlag {
  width: var(--width);
}
</style>
