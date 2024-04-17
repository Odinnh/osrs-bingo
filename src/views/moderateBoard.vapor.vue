<template>
	<template v-if="boardData">
		<section>
			<router-link
				v-if="user?.uid == boardData?.ownerID"
				icon
				class="btn"
				:to="{
					name: 'editBoard',
					params: {
						boardUUID: route.params.boardUUID
					}
				}"
				>edit</router-link
			>
			<router-link
				v-if="user?.uid == boardData?.ownerID"
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
				v-if="user?.uid == boardData?.ownerID"
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
		<h1 class="fs-2">{{ boardData.name }}</h1>
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
				@click.prevent="
					() => {
						selectedTile = tile
						openModal()
					}
				"
			>
				<img class="tile--image" :src="tile.image" />
			</div>
		</section>
		<VerifyTileModalVapor
			ref="asideModalEle"
			@close="closeTileModal"
			:selectedTile="selectedTile"
			:teams="<Team[]>teamsData"
		/>
	</template>
</template>
<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { db } from '../firebaseSettings'
import { useDocument, useCollection, getCurrentUser } from 'vuefire'
import { doc, collection } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { ref, computed, watchEffect } from 'vue'
import { Tile, ModalElement, Team } from '@/types'
import VerifyTileModalVapor from '@/components/modals/verifyTileModal.vapor.vue'

const user = await getCurrentUser()
const route = useRoute()
const title = useTitle()
const { data: boardData, promise: boardDataPromise } = useDocument(
	doc(db, 'Boards', route.params.boardUUID as string)
)
const { data: boardMetricData, promise: boardMetricDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Metrics')
)
if (boardData.value?.name) {
	title.value = boardData.value.name + ' - Bingo Bongo'
}
const { data: tilesData, promise: tilesDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
)
const { data: teamsData, promise: teamsDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Groups')
)
await Promise.all([
	boardDataPromise.value,
	boardMetricDataPromise.value,
	teamsDataPromise.value,
	tilesDataPromise.value
])

const list = ref<Tile[]>(tilesData.value as unknown as Tile[])

const sortedList = computed(() => {
	if (list.value === undefined) return []

	if (!boardData.value || !boardData.value.orderOfList) {
		return list.value.map((tile) => tile)
	}

	const orderOfList = ref(boardData.value.orderOfList)

	return list.value.toSorted(
		(a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
	)
})

const selectedTile = ref<Tile | null>(null)
// Watch for changes in the tiles collection and update selectedTile accordingly
watchEffect(() => {
	const selectedTileId = selectedTile.value?.id
	const updatedTile = list.value.find((tile) => tile.id === selectedTileId)
	if (updatedTile) {
		selectedTile.value = updatedTile
	}
})

const asideModalEle = ref<ModalElement | undefined>(undefined)
const openModal = () => {
	asideModalEle.value?.showModal()
}
const closeTileModal = () => {
	selectedTile.value = null
	asideModalEle.value?.closeModal()
}
</script>

<style scoped>
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
			cursor: help;
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
</style>
