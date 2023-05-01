<template>
  <div v-if="props.tileData" :key="props.tileData.id">
    <BoardTile :tile="tileData" :groupsData="props.groups" />
    <h2>{ {{ tileData.id.split('')[0] }} , {{ tileData.id.split('')[1] }} }</h2>
    <!-- <h1>{{ tileData.title }}</h1>
        <p>{{ tileData.description }}</p> -->
    <ul>
      <li
        v-for="group in groups"
        :key="group.id + tileData.id"
        :class="{ checkThis: group.verify.includes(tileData.id) }"
      >
        <label :for="group.id + tileData.id">
          {{ group.name }} : {{ group.verify.includes(tileData.id) }}<br />
          collected:
          <input
            :id="group.id + tileData.id"
            type="checkbox"
            :key="group.id + tileData.id"
            v-bind:checked="group.collected.includes(tileData.id)"
            @click.prevent="updateToCompleted({ tile: tileData, group: group })"
          />
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFirestore } from 'vuefire'
import BoardTile from './BoardTile.vue'
import { doc, updateDoc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)

const props = defineProps({
  tileData: {
    type: Object,
    required: true
  },
  boardUUID: {
    type: Object,
    required: true
  },
  groups: {
    type: Object,
    required: true
  }
})
const tileData = computed(() => props.tileData)
// const groups = computed(() => props.groups)
const groups = computed(() => props.groups.filter((group) => group.name !== 'moderator'))
const updateToCompleted = ({ tile, group }) => {
  if (!group.collected.includes(tile.id)) {
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      collected: [...group.collected, tile.id]
    })
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      points: group.points + tile.points
    })
    if (group.verify.includes(tile.id)) {
      updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
        verify: group.verify.filter((item) => item != tile.id)
      })
    }
  } else {
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      collected: group.collected.filter((item) => item != tile.id)
    })
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      points: group.points - tile.points
    })
  }
}
</script>
<style scoped>
.checkThis {
  color: green;
  font-weight: bold;
}
</style>
