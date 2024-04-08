<template>
  <section>
    <h1 v-if="boardData">
      {{ boardData.name }}
    </h1>
    <code> Board ID: {{ router.params.boardUUID }}</code>
  </section>
  <section v-if="isEditingBoard">
    <button @click="updateWidth('remove')">-</button>
    <input
      id="widthInputElement"
      ref="widthInputForm"
      class="widthInput"
      v-model="widthInput"
      type="number"
      min="3"
      max="12"
      @blur="
        () => {
          widthInput = Math.min(widthInput, 12)
          widthInput = Math.max(widthInput, 3)
        }
      "
    />
    <button @click="updateWidth('add')">+</button>
    <button submit @click="saveTiles()">save</button>
    <button cancel @click="cancelEdit()">cancel</button>
    <button v-if="list.length < 100" class="add tile" @click="AddTileToList()">Add a tile</button>
  </section>
  <section v-else><button @click="editBoard()">edit</button></section>

  <section ref="el" class="board" :style="{ '--width': widthInput + 'rem' }">
    <div class="tile" :class="{ handle: isEditingBoard }" v-for="tile in sortedList" :key="tile.id">
      <button
        icon
        cancel
        v-if="isEditingBoard"
        @click="
          () => {
            selectedTile = tile
            showModal()
          }
        "
      >
        delete
      </button>
      {{ tile.title }}
      <button
        icon
        v-if="isEditingBoard"
        @click="
          () => {
            selectedTile = tile
            editTile()
          }
        "
      >
        edit
      </button>
    </div>
  </section>

  <modal ref="modalEle">
    <template #header> Delete tile: {{ selectedTile?.title }} </template>
    <template #body> are you sure you want to delete the tile {{ selectedTile?.title }} </template>
    <template #controls>
      <button submit @click="RemoveTileFromList">REMOVE</button>
      <button cancel @click="cancelRemoval">Cancel</button>
    </template>
  </modal>

  <dialog ref="asideModalEle">
    <div v-if="selectedTile && localTileData">
      <div>
        <h2>
          Edit tile: {{ localTileData?.title }}
          <small
            ><code>{{ localTileData?.id }}</code></small
          >
        </h2>
        <input type="text" v-model="localTileData!.title" />
        <h3 class="font-size-S">Description</h3>
        <editor class="editable" v-model="localTileData!.description" />
      </div>
      <div>
        <img :src="localTileData!.image" />
        <input type="text" v-model="localTileData!.image" />
      </div>
      <VueMultiselect
        v-model="localTileData!.type"
        :options="['drop', 'exp', 'kc']"
        :close-on-select="true"
        :clear-on-select="false"
        :allow-empty="true"
        placeholder="Choose a tile Type"
      />
      <div v-if="localTileData?.type !== 'exp'">
        <VueMultiselect
          v-model="localTileData!.metric"
          :options="filteredMetrics"
          :close-on-select="true"
          :clear-on-select="false"
          :allow-empty="true"
          placeholder="Choose a metric to track progress"
        />
      </div>
      <div v-else>
        <VueMultiselect
          v-model="localTileData!.metric"
          :options="SKILLS"
          :close-on-select="true"
          :clear-on-select="false"
          :allow-empty="true"
          placeholder="Choose a metric to track progress"
        />
      </div>
      <div v-if="localTileData && localTileData.repeatable?.toString()">
        <h3 class="font-size-S">Repeatable tile</h3>
        <p>Can the competitors complete the tile multiple times and gain points each time?</p>
        <label
          >Repeatable <input type="checkbox" v-model="localTileData.repeatable" />
          {{ localTileData.repeatable }}</label
        >
      </div>
      <div>
        <p>the points the players will get when they complete the tile</p>
        <label>points value: <input type="number" min="0" v-model="localTileData!.points" /></label>
      </div>
      <div>
        <p>
          amount that is needed to complete the tile <br /><em
            >a.e. 200.000.000 slayer exp or 5 unique barrows items</em
          >
        </p>
        <label>count: <input type="number" min="0" v-model="localTileData!.count" /></label>
      </div>
      <div>
        <p>
          this is the minimum required amount for the tile<br />
          <em
            >a.e. if the count is 5 and you want the team to collect at least one of each item, the
            minimum would be 1</em
          >
        </p>
        <label
          >minimum count:
          <input
            placeholder="unset"
            type="number"
            min="0"
            v-if="localTileData !== null"
            @blur="
              () => {
                if (!localTileData) return

                if (localTileData.min == undefined) {
                  return
                }
                localTileData.min = localTileData.min < 0 ? 0 : localTileData.min
              }
            "
            v-model="localTileData.min"
        /></label>
      </div>
      <div>
        <p>
          this is the maximum amount for the tile<br />
          <em
            >a.e. if the count is 5 and you want the team to collect at most two of each item, the
            maximum would be 2</em
          >
        </p>
        <label
          >maximum count:
          <input
            placeholder="unset"
            type="number"
            min="0"
            @blur="
              () => {
                if (!localTileData) return
                if (localTileData.max == undefined) {
                  return
                }
                localTileData.max = localTileData.max < 0 ? 0 : localTileData.max
              }
            "
            v-model="localTileData!.max"
        /></label>
      </div>
      <div v-if="localTileData?.type == 'drop'">
        <h3 class="font-size-S">Drops</h3>
        <p>add drops to the list of valid drops</p>
        <ul>
          <li v-for="drop in localTileData.drops">
            {{ drop }}
            <button icon cancel @click="removeDropFromTile(drop)">delete</button>
          </li>
          <li>
            <input type="text" v-model="newDropForTile" />
            <button @click="addDropToTile">Add Drop</button>
          </li>
        </ul>
      </div>

      <!-- a checkbox that toggles between AND or OR using localTileData>selector-->
      <div v-if="localTileData && localTileData.needAny.toString()">
        <h3 class="font-size-S">Need Any or All?</h3>
        <p>do the competors need to collect all of the requirements to complete the tile?</p>
        <label>All<input type="checkbox" choice v-model="localTileData.needAny" />Any</label>
      </div>
    </div>
    <button submit @click="saveEditTile">Save changes</button>
    <button cancel @click="cancelEditTile">Cancel</button>
  </dialog>
</template>

<script setup lang="ts">
// base imports
import { computed, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'
// database imports
import { db } from '@/firebaseSettings'
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'
import { collection, doc, getDocs, updateDoc, writeBatch } from 'firebase/firestore'
import { useCollection, useDocument } from 'vuefire'
//misc imports
import { generateName } from '@/assets/js/tileNameGenerator'
import { tinyid } from '@/assets/js/tinyid'
import { METRICS, SKILLS } from '@wise-old-man/utils'
// Component imports
import editor from '@/components/editor.vapor.vue'
import modal from '@/components/modal.vapor.vue'
import VueMultiselect from 'vue-multiselect'
// type imports
import type { ModalElement, Tile } from '@/types'

const filteredMetrics = ref(
  METRICS.filter((metric) => !['ehb', 'ehp', 'league_points'].includes(metric))
)
const selectedTile = ref<Tile | null>()
const isEditingTile = ref<boolean>(false)
const modalEle = ref<ModalElement>()
const asideModalEle = ref<ModalElement>()
const localTileData = ref<Tile | null>(null)
const newDropForTile = ref()
const showModal = () => {
  if (modalEle.value && modalEle.value.showModal) {
    modalEle.value.showModal()
  }
}
const closeModal = () => {
  if (modalEle.value && modalEle.value.closeModal) {
    modalEle.value.closeModal()
  }
}
const addDropToTile = () => {
  if (localTileData.value) {
    if (localTileData.value.drops) {
      localTileData.value.drops.push({
        id: tinyid(),
        name: newDropForTile.value
      }) as unknown as Tile['drops']
    } else {
      localTileData.value.drops = [{ id: tinyid(), name: newDropForTile.value }]
    }
  }
}
const removeDropFromTile = (drop) => {
  if (
    localTileData.value &&
    localTileData.value.drops &&
    localTileData.value.drops.indexOf(drop) > -1
  ) {
    localTileData.value.drops.splice(localTileData.value.drops.indexOf(drop), 1)
  }
}
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Escape':
      if (modalEle.value && modalEle.value.closeModal) {
        modalEle.value.closeModal()
        asideModalEle.value!.close()
        selectedTile.value = null
        localTileData.value = null
        isEditingTile.value = false
        isEditingTile.value = false
      }
      break
    default:
      break
  }
})
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement>()

const isEditingBoard = ref<boolean>(false)

const router = useRoute()
const { data: boardData, promise: boardDataPromise } = useDocument(
  doc(db, 'Boards', router.params.boardUUID as string)
)
await boardDataPromise.value
const widthInput = ref<number>(boardData.value?.boardWidt || 5)

let orderOfList = ref<string[]>([])
let localOrderOfList = <string[]>[]

const { data: tilesData, promise: tilesDataPromise } = useCollection(
  collection(db, 'Boards', router.params.boardUUID as string, 'Tiles')
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
// set list to the tiles imported from firebase database
useSortable(el, sortedList, {
  inverted: true,
  handle: '.handle',
  ghostClass: 'blue-background-class',
  onUpdate: (e: any) => {
    moveArrayElement(sortedList.value, e.oldIndex, e.newIndex)

    nextTick(() => {
      orderOfList.value = sortedList.value.map((tile) => tile.id)
    })
  }
})

const AddTileToList = (): void => {
  const uuid = <string>tinyid()
  const name = <string>generateName()
  list.value.push({
    id: uuid,
    title: name,
    description: 'a sample description',
    image: 'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e',
    type: 'drop',
    needAny: false,
    points: 0,
    count: 0,
    repeatable: false
  })
  orderOfList.value.push(uuid)
}
//remove tile from local list
const RemoveTileFromList = (): void => {
  if (!selectedTile.value) return
  list.value = list.value.filter((_tile) => _tile.id !== selectedTile.value!.id)
  orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
  closeModal()
}
//cancel removal
const cancelRemoval = (): void => {
  selectedTile.value = null
  closeModal()
}

const updateWidth = (type: string): void => {
  //Width input can be at minimum be 3 and maximum be 12
  if (type === 'add') {
    widthInput.value = Math.min(widthInput.value + 1, 12)
  } else if (type === 'remove') {
    widthInput.value = Math.max(widthInput.value - 1, 3)
  }

  el.value?.style.setProperty('--width', widthInput.value.toString())
}
const saveTiles = async (): Promise<void> => {
  isEditingBoard.value = false

  try {
    const boardDocRef = doc(db, 'Boards', router.params.boardUUID as string)
    const tilesCollectionRef = collection(boardDocRef, 'Tiles')

    const batch = writeBatch(db)
    // update the order of the tiles
    batch.update(boardDocRef, {
      orderOfList: orderOfList.value,
      boardWidt: widthInput.value
    })

    // Update the tiles in Firestore
    // Get the current tiles from Firestore
    const querySnapshot = await getDocs(tilesCollectionRef)
    const existingTiles: { [id: string]: boolean } = {}
    querySnapshot.forEach((docSnapshot) => {
      const tileId = docSnapshot.id
      existingTiles[tileId] = true
      const tileData = docSnapshot.data() as Tile
      const matchingTile = list.value.find((tile) => tile.id === tileId)
      if (!matchingTile) {
        // If a tile exists in Firestore but not in the list, delete it
        const tileDocRef = doc(tilesCollectionRef, tileId)
        batch.delete(tileDocRef)
      } else if (JSON.stringify(matchingTile) !== JSON.stringify(tileData)) {
        // If the tile exists in both Firestore and the list but has changed, update it
        const tileDocRef = doc(tilesCollectionRef, tileId)
        batch.set(tileDocRef, {
          id: matchingTile.id,
          title: matchingTile.title,
          description: matchingTile.description,
          image: matchingTile.image,
          type: matchingTile.type,
          needAny: matchingTile.needAny,
          points: matchingTile.points,
          count: matchingTile.count
        })
      }
    })

    // Add new tiles to Firestore
    list.value.forEach((tile) => {
      if (!existingTiles[tile.id]) {
        const tileDocRef = doc(tilesCollectionRef, tile.id)
        batch.set(tileDocRef, {
          id: tile.id,
          title: tile.title,
          description: tile.description,
          image: tile.image,
          type: tile.type,
          needAny: tile.needAny,
          points: tile.points,
          count: tile.count
        })
      }
    })

    // Commit the batch
    await batch.commit()

    const { data: newTilesData, promise: newTilesDataPromise } = useCollection(
      collection(db, 'Boards', router.params.boardUUID as string, 'Tiles'),
      { once: true }
    )
    await newTilesDataPromise.value
    list.value = newTilesData.value as unknown as Tile[]
  } catch (error) {
    console.error('Error synchronizing tiles:', error)
  }
}
const cancelEdit = () => {
  list.value = tilesData.value as unknown as Tile[]
  // canceling anything you did between saves
  isEditingBoard.value = false
  orderOfList.value = localOrderOfList
}

const editBoard = (): void => {
  // make a local version of the current order of the tiles
  const snapshotTilesData = [...tilesData.value] as Tile[]
  list.value = snapshotTilesData
  localOrderOfList = orderOfList.value
  isEditingBoard.value = true
}

// edit tile functions
const saveEditTile = async () => {
  // this should save the localTile to firebase and close the modal
  updateDoc(
    doc(db, 'Boards', router.params.boardUUID as string, 'Tiles', localTileData.value!.id),
    { ...localTileData.value }
  )

  isEditingTile.value = false
  asideModalEle.value!.close()
  selectedTile.value = localTileData.value

  const { data: newTilesData, promise: newTilesDataPromise } = useCollection(
    collection(db, 'Boards', router.params.boardUUID as string, 'Tiles'),
    { once: true }
  )
  await newTilesDataPromise.value
  list.value = newTilesData.value as unknown as Tile[]
}
const cancelEditTile = () => {
  // canceling anything you did between saves
  isEditingTile.value = false
  asideModalEle.value!.close()
  localTileData.value = null
  selectedTile.value = null
}

const editTile = (): void => {
  // make a local version of the current Tile
  const snapshotTileData = { ...selectedTile.value } as Tile
  localTileData.value = snapshotTileData
  isEditingTile.value = true
  asideModalEle.value!.showModal()
}
</script>

<style scoped>
.editable {
  background-color: var(--background);
  border-radius: var(--border-radius);
}
dialog img {
  width: 100px;
  aspect-ratio: 1/1;
  object-fit: contain;
}
</style>
