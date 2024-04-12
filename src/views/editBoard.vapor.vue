<template>
	<section>
		<a
			icon
			class="btn"
			@click.prevent="
				router.push({
					name: 'editBoard',
					params: {
						boardUUID: route.params.boardUUID
					}
				})
			"
			>edit</a
		>
		<a
			icon
			class="btn"
			@click.prevent="
				router.push({
					name: 'viewBoard',
					params: {
						boardUUID: route.params.boardUUID
					}
				})
			"
			>visibility</a
		>
	</section>
	<section id="board-info">
		<h1 v-if="boardData">
			{{ boardData.name }}
		</h1>
		<code> Board ID: {{ route.params.boardUUID }}</code>
	</section>
	<section id="controlls-are-editing" v-if="isEditingBoard">
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
		<button submit @click="saveBoard()">save</button>
		<button outline @click="cancelEditBoard()">cancel</button>
	</section>
	<section id="controlls-are-viewing" v-else>
		<button class="startEditing" @click="editBoard()">reorder / edit board</button>
	</section>

	<section ref="el" class="board" :style="{ '--width': widthInput, position: 'relative' }">
		<div
			class="tile"
			:class="{ handle: isEditingBoard }"
			v-for="tile in sortedList"
			:key="tile.id"
		>
			<img
				class="tile--image"
				:src="tile.image"
				@click="
					() => {
						isEditingTile = true
						selectedTile = tile
						editTile()
					}
				"
			/>
		</div>
		<button
			v-if="list.length < 100 && isEditingBoard"
			class="add_tile"
			icon
			@click="AddTileToList()"
			:style="{ order: sortedList.length + 1 }"
		>
			add_box
		</button>
	</section>

	<modal ref="modalEle">
		<template #header> Delete tile: {{ selectedTile?.title }} </template>
		<template #body>
			are you sure you want to delete the tile {{ selectedTile?.title }}
		</template>
		<template #controls>
			<button submit @click="RemoveTileFromList">REMOVE</button>
			<button outline @click="closeModal()">Cancel</button>
		</template>
	</modal>

	<TileDialog
		ref="asideModalEle"
		:selectedTile="selectedTile"
		:localTileData="localTileData"
		@save="saveEditTile"
		@cancel="cancelEditTile"
	/>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'Edit board - Bingo Bongo'
// base imports
import { computed, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// database imports
import { db } from '@/firebaseSettings'
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'
import { collection, doc, getDocs, updateDoc, writeBatch } from 'firebase/firestore'
import { useCollection, useDocument } from 'vuefire'
//misc imports
import { generateName } from '@/assets/js/tileNameGenerator'
import { tinyid } from '@/assets/js/tinyid'

// Component imports
import modal from '@/components/Modal.vapor.vue'
import TileDialog from '@/components/modals/EditTileModal.vapor.vue'

// type imports
import type { ModalElement, Tile } from '@/types'

const route = useRoute()
const router = useRouter()
//DOM elements
const modalEle = ref<ModalElement>()
const asideModalEle = ref<ModalElement>()
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement>()

//state
const isEditingBoard = ref<boolean>(false)
const isEditingTile = ref<boolean>(false)
const isDeletingTile = ref<boolean>(false)

const selectedTile = ref<Tile | null>()
const localTileData = ref<Tile | null>(null)

const originalWidth = ref<number>(0)

const orderOfList = ref<string[]>([])
let localOrderOfList = <string[]>[]

//event listened
window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'Escape':
			if (
				modalEle.value &&
				modalEle.value.closeModal &&
				asideModalEle.value &&
				asideModalEle.value.closeModal
			) {
				modalEle.value.closeModal()
				asideModalEle.value!.closeModal()
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

//firebase imports
const { data: boardData, promise: boardDataPromise } = useDocument(
	doc(db, 'Boards', route.params.boardUUID as string)
)
const { data: tilesData, promise: tilesDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
)
await Promise.all([boardDataPromise.value, tilesDataPromise.value])

const widthInput = ref<number>(boardData.value?.boardWidth || 5)
const list = ref<Tile[]>(tilesData.value as unknown as Tile[])

// modal functions
const showModal = (): void => {
	if (modalEle.value && modalEle.value.showModal && isDeletingTile.value) {
		modalEle.value.showModal()
	}
	if (asideModalEle.value && asideModalEle.value.showModal && isEditingTile.value) {
		asideModalEle.value.showModal()
	}
}
const closeModal = (): void => {
	if (modalEle.value && modalEle.value.closeModal && isDeletingTile.value) {
		modalEle.value.closeModal()
	}
	if (asideModalEle.value && asideModalEle.value.closeModal && isEditingTile.value) {
		asideModalEle.value.closeModal()
	}
}

// sort order of list into the required order
orderOfList.value = boardData.value?.orderOfList
	? boardData.value.orderOfList
	: list.value.map((tile) => tile.id)

// sortedList is a list that respects the order in orderOfList
const sortedList = computed((): Tile[] => {
	if (list.value === undefined) return []
	return list.value.toSorted(
		(a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
	)
})

// instanciate useSortable
useSortable(el, sortedList, {
	inverted: true,
	handle: '.handle',
	ghostClass: 'blue-background-class',
	animation: 200,
	onUpdate: (e: any) => {
		moveArrayElement(sortedList.value, e.oldIndex, e.newIndex)

		nextTick(() => {
			orderOfList.value = sortedList.value.map((tile) => tile.id)
		})
	}
})

// ## Board methods
// changes width of board
const updateWidth = (type: string): void => {
	//Width input can be at minimum be 3 and maximum be 12
	if (type === 'add') {
		widthInput.value = Math.min(widthInput.value + 1, 12)
	} else if (type === 'remove') {
		widthInput.value = Math.max(widthInput.value - 1, 3)
	}

	el.value?.style.setProperty('--width', widthInput.value.toString())
}
// publish board changes to Firestore
const saveBoard = async (): Promise<void> => {
	isEditingBoard.value = false

	try {
		const boardDocRef = doc(db, 'Boards', route.params.boardUUID as string)
		const tilesCollectionRef = collection(boardDocRef, 'Tiles')

		const batch = writeBatch(db)
		// update the order of the tiles
		batch.update(boardDocRef, {
			orderOfList: orderOfList.value,
			boardWidth: widthInput.value
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
				batch.update(tileDocRef, matchingTile)
			}
		})

		// Add new tiles to Firestore
		list.value.forEach((tile) => {
			if (!existingTiles[tile.id]) {
				const tileDocRef = doc(tilesCollectionRef, tile.id)
				batch.set(tileDocRef, tile)
			}
		})

		// Commit the batch
		await batch.commit()

		const { data: newTilesData, promise: newTilesDataPromise } = useCollection(
			collection(db, 'Boards', route.params.boardUUID as string, 'Tiles'),
			{ once: true }
		)
		await newTilesDataPromise.value
		list.value = newTilesData.value as unknown as Tile[]
	} catch (error) {
		console.error('Error synchronizing tiles:', error)
	}
}
// cancel editing board and resetting values
const cancelEditBoard = async (): Promise<void> => {
	// canceling anything you did between saves
	list.value = tilesData.value as unknown as Tile[]
	widthInput.value = originalWidth.value

	isEditingBoard.value = false
	orderOfList.value = localOrderOfList
}
// start editing board
const editBoard = (): void => {
	// make a local version of the current order of the tiles
	const snapshotTilesData = [...tilesData.value] as Tile[]
	list.value = snapshotTilesData
	localOrderOfList = orderOfList.value
	originalWidth.value = widthInput.value
	isEditingBoard.value = true
	return
}

// ## Tile methods
// publish tile changes to Firestore
const saveEditTile = async (): Promise<void> => {
	// this should save the localTile to firebase and close the modal
	updateDoc(
		doc(db, 'Boards', route.params.boardUUID as string, 'Tiles', localTileData.value!.id),
		{
			...localTileData.value
		}
	)

	isEditingTile.value = false
	if (asideModalEle.value && asideModalEle.value.closeModal) {
		asideModalEle.value!.closeModal()
	}
	selectedTile.value = localTileData.value

	const { data: newTilesData, promise: newTilesDataPromise } = useCollection(
		collection(db, 'Boards', route.params.boardUUID as string, 'Tiles'),
		{ once: true }
	)
	await newTilesDataPromise.value
	list.value = newTilesData.value as unknown as Tile[]
	return
}
// cancel editing a tile and resetting values
const cancelEditTile = (): void => {
	// canceling anything you did between saves
	if (asideModalEle.value && asideModalEle.value.closeModal) {
		isEditingTile.value = false
		localTileData.value = null
		selectedTile.value = null
		asideModalEle.value.closeModal()
	}
	return
}
// start editing a tile
const editTile = (): void => {
	// make a local version of the current Tile
	const snapshotTileData = { ...selectedTile.value } as Tile
	localTileData.value = snapshotTileData
	isEditingTile.value = true
	asideModalEle.value!.showModal()
	return
}

//add tile to local list
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
	return
}
//remove tile from local list
const RemoveTileFromList = (): void => {
	if (!selectedTile.value) return
	list.value = list.value.filter((_tile) => _tile.id !== selectedTile.value!.id)
	orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
	closeModal()
	return
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
.board {
	display: grid;
	grid-template-columns: repeat(var(--width), 1fr);
	gap: 0.5vw;
	& .tile {
		padding: 10%;
		border: 1px solid var(--color-text);
		border-radius: var(--border-radius);
		position: relative;
		width: 100%;
		aspect-ratio: 1;
		&:hover {
			scale: 1.05;
			cursor: move;
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
.add_tile {
	font-size: 1;
	padding: 0;
	aspect-ratio: 1;
}
</style>
