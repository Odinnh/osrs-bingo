<template>
	<template v-if="boardData">

		<h1 class="fs-2">{{ boardData.name }}</h1>
		<section ref="el">
			<div
				:style="{ '--_image': `url('${tile.image}')` }"
				v-for="tile in sortedList"
				:key="tile.id"
			>
				<h2>{{ tile.title }}</h2>
				<h3>Description:</h3>
				<div v-html="tile.description"></div>
				<h3>Drops:</h3>
				<div v-for="drop in tile.drops">
					{{ drop.name }}
				</div>
				<h3>Metrics:</h3>
				<div v-for="metric in tile.metric">{{ metric }}</div>
			</div>
		</section>
	</template>
</template>
<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { db } from '../firebaseSettings'
import { useDocument, useCollection, getCurrentUser } from 'vuefire'
import { doc, collection } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import type {
	Tile,
	ModalElement
	// Team
} from '@/types'

// import ViewTileModal from '@/components/modals/ViewTileModal.vapor.vue'
const user = await getCurrentUser()
const route = useRoute()
const title = useTitle()
const { data: boardData, promise: boardDataPromise } = useDocument(
	doc(db, 'Boards', route.params.boardUUID as string)
)
// const { data: boardMetricData, promise: boardMetricDataPromise } = useCollection(
// 	collection(db, 'Boards', route.params.boardUUID as string, 'Metrics')
// )
if (boardData.value?.name) {
	title.value = boardData.value.name + ' - Bingo Bongo'
}
const { data: tilesData, promise: tilesDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
)
// const { data: teamsData, promise: teamsDataPromise } = useCollection(
// 	collection(db, 'Boards', route.params.boardUUID as string, 'Groups')
// )
await Promise.all([
	boardDataPromise.value,
	// boardMetricDataPromise.value,
	// teamsDataPromise.value,
	tilesDataPromise.value
])
// const teams: string[] = teamsData.value.map((team) => team.teamName)

const list = ref<Tile[]>(tilesData.value as unknown as Tile[])

const sortedList = computed(() => {
	if (list.value === undefined) return []

	if (!boardData.value || !boardData.value.orderOfList) {
		return list.value.map((tile) => tile)
	}

	const orderOfList = boardData.value.orderOfList

	return list.value.toSorted(
		(a: Tile, b: Tile) => orderOfList.indexOf(a.id) - orderOfList.indexOf(b.id)
	)
})

window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'Escape':
			if (asideModalEle.value && asideModalEle.value.closeModal) {
				selectedTile.value = {} as Tile
				closeTileModal()
			}
			break
		default:
			break
	}
})

const selectedTile = ref<Tile | null>(null)
const asideModalEle = ref<ModalElement | undefined>(undefined)
// const openModal = () => {
// 	asideModalEle.value?.showModal()
// }
const closeTileModal = () => {
	selectedTile.value = null
	asideModalEle.value?.closeModal()
}

// type MetricData = {
// 	metric: string
// 	[timestamp: string]: any
// }

// function getLatest(data: MetricData[]): { [metric: string]: { metric: string; data: any } } {
// 	const latest: { [metric: string]: { metric: string; data: any } } = {}
// 	data.forEach((metric: MetricData) => {
// 		latest[metric.metric] = { metric: metric.metric, data: metric[metric.timestamp] }
// 	})
// 	return latest
// }
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
