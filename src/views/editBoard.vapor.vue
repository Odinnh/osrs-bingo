<template>
	<section>
		<a class="btn" @click.prevent="gatherWomEXP"> Update all metrics<span icon>sync</span></a>

		<router-link
			icon
			class="btn"
			:to="{
				name: 'viewBoard',
				params: {
					boardUUID: route.params.boardUUID
				}
			}"
			>visibility</router-link
		>
		<router-link
			icon
			class="btn"
			:to="{
				name: 'moderateBoard',
				params: {
					boardUUID: route.params.boardUUID
				}
			}"
		>
			library_add_check
		</router-link>
		<router-link
			icon
			class="btn"
			:to="{
				name: 'teamViewer',
				params: {
					boardUUID: route.params.boardUUID
				}
			}"
			>group</router-link
		>
	</section>
	<section id="board-info">
		<h1 v-if="boardData" class="fs-2">
			{{ boardData.name }}
		</h1>
		Board ID: <code> {{ route.params.boardUUID }}</code>
		<template v-if="boardData?.start">
			<p>
				Starts:
				{{
					new Date(boardData.start.seconds * 1000).toLocaleDateString(
						undefined,
						dateOptions
					)
				}}
			</p>
			<code>&lt;t:{{ boardData.start.seconds }}:F&gt;</code>
		</template>
		<template v-if="boardData?.end">
			<p>
				Ends:
				{{
					new Date(boardData.end.seconds * 1000).toLocaleDateString(
						undefined,
						dateOptions
					)
				}}
			</p>
			<code>&lt;t:{{ boardData.end.seconds }}:F&gt;</code>
		</template>
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

	<EditTileModal
		ref="asideModalEle"
		:selectedTile="selectedTile"
		:localTileData="localTileData"
		@save="saveEditTile"
		@cancel="cancelEditTile"
		@delete="primeForRemoval"
	/>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'Edit board - Bingo Bongo'
// base imports
import { computed, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'
// database imports
import { db } from '@/firebaseSettings'
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'
import { collection, doc, getDocs, getDoc, writeBatch } from 'firebase/firestore'
import { useCollection, useDocument } from 'vuefire'
//misc imports
import { generateName } from '@/assets/js/tileNameGenerator'
import { tinyid } from '@/assets/js/tinyid'
// Component imports
import modal from '@/components/Modal.vapor.vue'
import EditTileModal from '@/components/modals/EditTileModal.vapor.vue'

import { WOMClient } from '@wise-old-man/utils'

// type imports
import type { ModalElement, Tile } from '@/types'
import type { Metric as WOMMetric } from '@wise-old-man/utils'

const route = useRoute()

const dateOptions = ref<{}>({
	weekday: 'short',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
})
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

// WOM
const Client = new WOMClient()
const WOMCode = ref<number>(parseInt(route.params.boardUUID as string))

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
const primeForRemoval = () => {
	isDeletingTile.value = true
	showModal()
}
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
	if (
		asideModalEle.value &&
		asideModalEle.value.closeModal &&
		isEditingTile.value &&
		!isDeletingTile.value
	) {
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
		const trackingMetrics = ref<Set<string>>(new Set())
		list.value.forEach((tile) => {
			tile.metric?.forEach((metric) => {
				trackingMetrics.value.add(metric)
			})
		})
		// update the order of the tiles
		batch.update(boardDocRef, {
			orderOfList: orderOfList.value,
			boardWidth: widthInput.value,
			trackingMetrics: [...trackingMetrics.value]
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
	// Create references to the tile document and the board document
	const tileRef = doc(
		db,
		'Boards',
		route.params.boardUUID as string,
		'Tiles',
		localTileData.value!.id
	)
	const boardRef = doc(db, 'Boards', route.params.boardUUID as string)

	try {
		// Start a batch write
		const batch = writeBatch(db)

		// Check if the tile exists by trying to fetch it
		const existingTile = (await getDoc(tileRef)).data()

		// If the tile doesn't exist, create it; otherwise, update it
		if (!existingTile) {
			batch.set(tileRef, localTileData.value)
		} else {
			batch.update(tileRef, localTileData.value as Partial<Tile>)
		}

		// Update the orderOfList
		const boardSnapshot = await getDoc(boardRef)
		const orderOfList = boardSnapshot.data()?.orderOfList || []
		if (!orderOfList.includes(localTileData.value!.id)) {
			orderOfList.push(localTileData.value!.id)
			batch.update(boardRef, { orderOfList })
		}

		// Commit the batch write
		await batch.commit()

		// Close the modal
		isEditingTile.value = false
		if (asideModalEle.value && asideModalEle.value.closeModal) {
			asideModalEle.value!.closeModal()
		}

		// Set the selectedTile
		selectedTile.value = localTileData.value

		// Fetch updated tile data
		const tilesRef = collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
		const querySnapshot = await getDocs(tilesRef)
		list.value = querySnapshot.docs.map((doc) => doc.data() as Tile)

		// Update trackingMetrics
		const trackingMetrics = new Set<string>()
		list.value.forEach((tile) => {
			tile.metric?.forEach((metric) => {
				trackingMetrics.add(metric)
			})
		})

		// Update board document with trackingMetrics
		const boardBatch = writeBatch(db)
		boardBatch.update(boardRef, {
			boardWidth: widthInput.value,
			trackingMetrics: Array.from(trackingMetrics)
		})
		await boardBatch.commit()
	} catch (error) {
		// Handle any errors
		console.error('Error saving tile:', error)
	}
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
	modalEle.value!.closeModal()
	asideModalEle.value!.closeModal()
	saveBoard()
	return
}

const gatherWomEXP = async () => {
	const currentTime = Date.now()
	const gatheredMetrics = {} as {
		[key: string]: { [key: number]: { timeStamp: number; exp: number } }
	}

	if (boardData.value) {
		boardData.value.trackingMetrics = ref([
			...boardData.value.trackingMetrics,
			'overall',
			'hitpoints'
		])
		boardData.value.trackingMetrics.forEach((metric: string) => {
			gatheredMetrics[metric] = { [currentTime]: { timeStamp: currentTime, exp: 1 } }
		})
	}

	if (boardData.value?.lastUpdate && currentTime - boardData.value.lastUpdate < 3600000) {
		console.log('no need to update')
		return null
	} else {
		const batch = writeBatch(db)
		boardData.value!.lastUpdate = currentTime
		batch.update(doc(db, 'Boards', route.params.boardUUID as string), {
			lastUpdate: boardData.value!.lastUpdate
		})
		boardData.value!.trackingMetrics.push('overall')
		boardData.value!.trackingMetrics.push('hitpoints')
		await Promise.all(
			boardData.value!.trackingMetrics.map(async (metric: WOMMetric) => {
				const MetricRef = doc(
					db,
					'Boards',
					route.params.boardUUID as string,
					'Metrics',
					metric
				)
				await Client.competitions
					.getCompetitionDetails(WOMCode.value, metric)
					.then((result) => {
						// Assuming `result` is your response object
						const parsedData: { [key: string]: any } = parseResponse(
							result,
							currentTime
						)
						// Use parsedData to update your database
						const timeQ = 't-' + currentTime
						const players = parsedData[timeQ]
						batch.set(
							MetricRef,
							{ [currentTime]: players, metric: metric, timestamp: currentTime },
							{ merge: true }
						)
					})
					.catch((error) => {
						console.error('Error fetching competition details:', error)
					})
			})
		)

		await batch.commit()
	}
}

const parseResponse = (response: any, Timestamp: number) => {
	const parsedData: { [key: string]: any } = {}

	const timeQ = <string>'t-' + Timestamp
	parsedData[timeQ] = {}
	response.participations.forEach((participation: any) => {
		const playerName = participation.player.username
		const gained = participation.progress.gained

		parsedData[timeQ][playerName] = {
			name: playerName,
			gained,
			teamName: participation.teamName
		}
	})

	return parsedData
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
.handle:hover {
	cursor: move;
}
.add_tile {
	font-size: 1;
	padding: 0;
	aspect-ratio: 1;
}
</style>
