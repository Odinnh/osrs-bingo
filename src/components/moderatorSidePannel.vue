<template>
  <div v-if="props.tileData" :key="props.tileData.id">
    <h2>{ {{ props.tileData.id.split('')[0] }} , {{ props.tileData.id.split('')[1] }} }</h2>
    <!-- <h1>{{ tileData.title }}</h1>
        <p>{{ tileData.description }}</p> -->
    <ul>
      <li
        v-for="group in props.groupsData"
        :key="group.id + tileData.id"
        :class="{ checkThis: group.verify.hasOwnProperty(props.tileData.id) }"
      >
        <label :for="group.id + tileData.id">
          {{ group.name }} : {{ group.verify.hasOwnProperty(props.tileData.id) }}<br />
          collected:
          <input
            :id="group.id + tileData.id"
            type="checkbox"
            class="toggle"
            :key="group.id + tileData.id"
            v-bind:checked="group.collected.hasOwnProperty(props.tileData.id)"
            @click.prevent="updateToCompleted({ tile: tileData, group: group })"
          />
        </label>
      </li>
    </ul>
    <!-- <AddTile :tile="tileData" :boardUUID="props.boardUUID" :boardSettings="props.boardSettings" /> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

// import AddTile from '@/components/addTile.vue'

const props = defineProps({
  tileData: { type: Object, required: true },
  boardUUID: { type: String, required: true },
  groupsData: { type: Object, required: true },
  boardData: { type: Object, required: true }
})
const tileData = computed(() => props.tileData)

// const groupsData = computed(() => props.groupsData.filter((group) => group.name !== 'moderator'))
const updateToCompleted = ({ tile, group }) => {
  if (!Object.hasOwn(group.collected, tile.id)) {
    let temp = {
      ...group.collected
    }
    temp[tile.id] = new Date()
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      collected: temp
    })
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      points: group.points + tile.points
    })
    if (Object.hasOwn(group.verify, tile.id)) {
      updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
        verify: group.verify.filter((item) => item != tile.id)
      })
    }
  } else {
    let temp = {
      ...group.collected
    }
    delete temp[tile.id]
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      collected: temp
    })
    updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', group.id), {
      points: group.points - tile.points
    })
  }
}
</script>
<style scoped></style>
