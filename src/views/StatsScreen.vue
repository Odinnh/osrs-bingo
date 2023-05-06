<template>
  <h1>{{ boardData?.name }} stats:</h1>
  <div class="graph">
    <BarChart :datasets="datasets" />
  </div>
</template>
<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'
//external modules
import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
import BarChart from '@/components/BarChart.vue'
const route = useRoute()
const boardUUID = computed(() => route.params.boardUUID || '')
let GROUPS = undefined
let TILESDATA = undefined
onBeforeMount(() => {
  GROUPS = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))
  TILESDATA = useDocument(collection(db, 'Boards', boardUUID.value, 'Tiles'))
})
const db = useFirestore(firebaseApp)

const boardData = useDocument(doc(db, 'Boards', boardUUID.value))
const tiles = computed(() => {
  let tempObject = []
  if (TILESDATA) {
    TILESDATA?.value?.forEach((tile) => {
      tempObject[tile.id] = tile.points
    })
  }
  return tempObject || []
})

const generateDataArray = (group) => {
  let tempArr = [
    {
      x: 1682942400000,
      y: 0
    }
  ]
  let points = 0

  const sortable = Object.entries(group.collected).sort((a, b) => a[1].seconds - b[1].seconds)

  Object.keys(sortable).forEach((key) => {
    points += tiles.value[sortable[key][0]]
    tempArr.push({ y: points, x: new Date(sortable[key][1].seconds * 1000) })
  })
  tempArr.push({ x: Date.now(), y: points })
  return tempArr
}
const datasets = computed(() => {
  let tempObject = []

  if (GROUPS?.value) {
    GROUPS?.value?.forEach((group) => {
      if (group.name != 'moderator') {
        tempObject.push({
          label: group.name,
          borderColor: group.color,
          backgroundColor: group.color,
          data: generateDataArray(group)
        })
      }
    })
  }

  return tempObject || []
})
</script>
<style>
.container {
  width: 100%;
  height: 100%;
}
</style>
