<template>
	<template v-if="boardData">
		<h1 class="fs-2">{{ boardData.name }}</h1>
		<div style="display: flex; flex-direction: row; gap: var(--gap); font-size: var(--fs-4)">
			<div v-for="team in teamsData">
				<template v-if="team?.icon">
					<font-awesome-icon :icon="['fas', team.icon]" :title="team.teamName" />
				</template>
				<template v-else> {{ team.teamName }} </template>:
				{{ getTeamsTotalVerified[team.teamName] }}
			</div>
		</div>
		<section
			ref="el"
			class="board"
			:style="{ '--width': boardData.boardWidth, position: 'relative' }"
		>
			<div
				class="tile"
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
				<div class="verifyTile">
					<div v-for="team in <Team[]>teamsData" :key="team.teamName">
						<template v-if="team?.icon">
							<font-awesome-icon
								:titie="team.teamName"
								class="verify-icon"
								:class="{
									verified:
										verifiedTeams(tile) &&
										verifiedTeams(tile).includes(team.teamName)
								}"
								:icon="['fas', team.icon]"
							/>
						</template>
					</div>
				</div>
			</div>
		</section>
		<ViewTileModal
			ref="asideModalEle"
			@close="closeTileModal"
			:selectedTile="selectedTile"
			:latestData="getLatest(boardMetricData as MetricData[])"
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
import { ref, computed } from 'vue'
import type { Tile, ModalElement, Team } from '@/types'

import ViewTileModal from '@/components/modals/ViewTileModal.vapor.vue'
const user = await getCurrentUser()
const route = useRoute()
const title = useTitle()
const { data: boardData, promise: boardDataPromise } = useDocument(
	doc(db, 'Boards', route.params.boardUUID as string)
)
const verifiedTeams = (tile: Tile) => tile.verified?.map((entry) => entry.teamName) || []

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
const getTeamsTotalVerified = computed(() => {
	const teamsTotalVerified = <{ [key: string]: any }>{}

	if (teamsData.value && tilesData.value) {
		// Initialize teamsTotalVerified object with team names
		teamsData.value.forEach((team) => {
			teamsTotalVerified[team.teamName] = 0
		})

		// Loop through each entry in tilesData.value.verified
		tilesData.value.forEach((tile) => {
			if (tile.verified) {
				// Loop through each verified entry for the current tile
				tile.verified.forEach((verification: { [key: string]: any }) => {
					// Check if the teamName matches with any team in teamsData.value
					if (teamsData.value.some((team) => team.teamName === verification.teamName)) {
						// Increment total verified count for the corresponding team
						teamsTotalVerified[verification.teamName] += tile.points
					}
				})
			}
		})
	}
	console.log(teamsTotalVerified)
	return teamsTotalVerified
})
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
const openModal = () => {
	asideModalEle.value?.showModal()
}
const closeTileModal = () => {
	selectedTile.value = null
	asideModalEle.value?.closeModal()
}

type MetricData = {
	metric: string
	[timestamp: string]: any
}

function getLatest(data: MetricData[]): { [metric: string]: { metric: string; data: any } } {
	const latest: { [metric: string]: { metric: string; data: any } } = {}
	data.forEach((metric: MetricData) => {
		latest[metric.metric] = { metric: metric.metric, data: metric[metric.timestamp] }
	})
	return latest
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

.verify-icon {
	color: var(--mid);
	&.verified {
		color: var(--color-text);
	}
}
.verifyTile:has(.verify-icon) {
	background-color: color-mix(in srgb, var(--color-background) 80%, transparent);

	backdrop-filter: blur(3px);
	border-radius: var(--border-radius);
	/* border: 1px solid var(--color-background__inv); */
	padding: 5px 10px;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	position: absolute;
	bottom: 0;
	inset-inline: 0;
}
</style>
