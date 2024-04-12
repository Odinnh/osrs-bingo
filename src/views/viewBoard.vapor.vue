<template>
	<template v-if="boardData">
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
				<button class="close-modal" @click.prevent="closeModal" icon>close</button>
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
</template>
<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { db } from '../firebaseSettings'
import { useDocument, useCollection } from 'vuefire'
import { doc, collection } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { Tile, ModalElement } from '@/types'

const route = useRoute()
const title = useTitle()
const { data: boardData, promise: boardDataPromise } = useDocument(
	doc(db, 'Boards', route.params.boardUUID as string)
)
await boardDataPromise.value
if (boardData.value?.name) {
	title.value = boardData.value.name + ' - Bingo Bongo'
}

const { data: tilesData, promise: tilesDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Tiles')
)
await tilesDataPromise.value
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

const selectedTile = ref<Tile>()
const asideModalEle = ref<ModalElement | undefined>(undefined)
const openModal = (tile: Tile) => {
	selectedTile.value = tile
	asideModalEle.value?.showModal()
}
const closeModal = () => {
	asideModalEle.value?.close()
}
</script>

<style scoped></style>
