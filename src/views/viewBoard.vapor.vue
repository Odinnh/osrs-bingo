<template>
  <h1>{{ boardData.name }}</h1>
  <section
    ref="el"
    class="board"
    :style="{ '--width': boardData.boardWidth, position: 'relative' }"
  >
    <div
      class="tile"
      :style="{ '--_image': `url('${tile.image}')` }"
      v-for="tile in sortedList"
      :key="tile.id"
      @click.prevent="openModal(tile)"
    >
      <img class="tile--image" :src="tile.image" />
    </div>
  </section>

  <dialog ref="asideModalEle" class="modal">
    <template v-if="selectedTile">
      <div>
        <img :src="selectedTile!.image" />
      </div>
      <div>
        <h2>{{ selectedTile?.title }}</h2>
        <div v-html="selectedTile.description"></div>
      </div>
      <div v-if="selectedTile!.type">
        <p>type: {{ selectedTile!.type }}</p>
      </div>
      <div v-if="selectedTile!.metric">
        <p>metric: {{ selectedTile!.metric }}</p>
      </div>
      <div v-if="selectedTile.repeatable?.toString()">
        <p>{{ selectedTile.repeatable }}</p>
      </div>
      <div>
        <p>points: {{ selectedTile!.points }}</p>
        <p>count: {{ selectedTile!.count }}</p>
        <p>minimum count: {{ selectedTile.min }}</p>
        <p>maximum count: {{ selectedTile!.max }}</p>
      </div>
      <div v-if="selectedTile?.type == 'drop'">
        <p>valid Drops</p>
        <ul>
          <li v-for="drop in selectedTile.drops">
            {{ drop }}
          </li>
        </ul>
      </div>
      <div>
        <p>need any:{{ selectedTile.needAny }}</p>
      </div>
    </template>
  </dialog>
</template>
<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { db } from '../firebaseSettings'
import { useDocument, useCollection } from 'vuefire'
import { doc, collection } from 'firebase/firestore'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { Tile, ModalElement } from '@/types'

const route = useRoute()
const router = useRouter()
const title = useTitle()
const orderOfList = ref()
const { data: boardData, promise: boardDataPromise } = useDocument(
  doc(db, 'Boards', route.params.boardUUID)
)

await boardDataPromise.value.then(() => {
  title.value = boardData.value.name + ' - Bingo Bongo'
})

const { data: tilesData, promise: tilesDataPromise } = useCollection(
  collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
)
await tilesDataPromise.value
const list = ref<Tile[]>(tilesData.value as unknown as Tile[])
if (boardData.value?.orderOfList) {
  orderOfList.value = boardData.value.orderOfList
} else {
  orderOfList.value = list.value.map((tile) => tile.id)
}
const sortedList = computed(() => {
  if (list.value === undefined) return []
  return list.value.toSorted(
    (a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})
const selectedTile = ref<Tile>()
const asideModalEle = ref<ModalElement>()
const openModal = (tile) => {
  selectedTile.value = tile as Tile
  asideModalEle.value.showModal()
}
const closeModal = (tile) => {
  asideModalEle.value.close()
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  gap: 1%;
  & .tile {
    border: 1px solid var(--primary);
    border-radius: var(--border-radius);
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    &:hover {
      scale: 1.05;
    }
    & .tile--image {
      position: absolute;
      width: 80%;
      inset: 0;
      margin: auto;
      transform-origin: center center;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
    button {
      position: relative;
    }
  }
}
.modal {
  width: 40ch;
  max-width: 1000px;
  & img {
    background-color: var(--background);
    width: 10ch;
    aspect-ratio: 1/1;
    object-fit: contain;
    padding: 20px;
    border-radius: var(--border-radius);
  }
}
</style>
