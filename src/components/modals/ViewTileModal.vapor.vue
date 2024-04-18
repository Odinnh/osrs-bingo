<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.selectedTile">
			<div class="left-column">
				<div class="img-container">
					<img :src="props.selectedTile!.image" />
				</div>
				<button @click.prevent="$emit('close')">close</button>
				<div v-for="team in teams" :key="team">
					<span icon v-if="verifiedTeams && verifiedTeams.includes(team)"> check </span>
					{{ team }}
				</div>
				<div v-html="props.selectedTile.description" />
				<small> tile id: {{ props.selectedTile?.id }} </small>
				<div>Points: {{ props.selectedTile!.points }}</div>
				<div v-if="props.selectedTile.repeatable"><em>This tile is repeatable</em></div>
			</div>
			<div class="right-column">
				<h2 class="fs-1 title" style="margin-bottom: var(--size-4)">
					{{ props.selectedTile.title }}
				</h2>
				<div v-if="props.selectedTile?.type == 'drop'">
					<h2 v-if="props.selectedTile.needAny === false" class="fs-4">
						Get the following items:
					</h2>
					<h2 v-else class="fs-4">
						Get a total of {{ props.selectedTile.count }} items:
					</h2>
					<div class="drop-table" :style="{ '--_width': teams.length }">
						<div></div>
						<div v-for="team in teams">{{ team }}</div>
						<template v-for="drop in props.selectedTile.drops">
							<div>{{ drop.name }}</div>
							<div v-for="team in teams" :class="getDropClass(team, drop)">
								<span>{{ getDropCount(team, drop) }}</span>
								<template v-if="props.selectedTile.needAny === false"
									>/ {{ drop.count }}</template
								>
							</div>
						</template>
					</div>
				</div>
				<div>
					<h3 class="fs-4" v-if="!['kc', 'exp'].includes(props.selectedTile.type)">
						Metric
					</h3>
				</div>
				<div>
					<template v-for="metric in props.selectedTile.metric">
						<h3
							class="metric-list"
							@click.prevent="
								(el) => {
									const htmlELE = <HTMLElement>el.target
									console.log(htmlELE.classList.toggle('open-list'))
								}
							"
						>
							<template v-if="['kc', 'exp'].includes(props.selectedTile.type)">
								{{ formatNumberToShort(props.selectedTile.count) }}
							</template>
							{{ titleCase(metric.replaceAll('_', ' ')) }}
							<template v-if="['kc', 'exp'].includes(props.selectedTile.type)">
								{{ titleCase(props.selectedTile.type) }}
							</template>
						</h3>
						<div
							v-if="['kc', 'exp'].includes(props.selectedTile.type)"
							class="metric-item"
						>
							<div v-for="team in getMetricWithTotals(metric)?.totals">
								{{ team.team }}
								<div class="spread">
									<progress
										min="0"
										:value="team.total"
										:max="props.selectedTile.count"
									></progress>
									<p
										class="totals"
										:class="{
											completed: team.total >= props.selectedTile.count,
											notStarted: team.total == 0
										}"
									>
										{{
											team.total >= props.selectedTile.count
												? formatNumberToShort(props.selectedTile.count) +
												  '+'
												: formatNumberToShort(team.total)
										}}{{ ' ' + titleCase(props.selectedTile.type) }}
									</p>
								</div>
							</div>
						</div>
						<div v-else class="metric-item">
							<div v-for="team in getMetricWithTotals(metric)?.totals">
								{{ team.team }}
								<div class="spread">
									<progress
										min="0"
										:value="
											team.total != 0
												? team.total + getHighestTotal(metric) * 0.05
												: 0
										"
										:max="
											getHighestTotal(metric) + getHighestTotal(metric) * 0.1
										"
									></progress>
									<p class="totals">
										{{ formatNumberToShort(team.total) }}
									</p>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</dialog>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

import type { ModalElement, Tile, collectionLogItem } from '@/types'
import { formatNumberToShort } from '@/assets/js/helpers'

const props = defineProps<{
	selectedTile: Tile | null
	latestData: Data
	teams: string[]
}>()

const dialog = ref<ModalElement>()
interface PlayerData {
	name: string
	teamName: string
	gained: number
}
const verifiedTeams = computed(
	() => props.selectedTile?.verified?.map((entry) => entry.teamName) || []
)
interface Metric {
	metric: string
	data: { [playerName: string]: PlayerData }
	totals?: { team: string; total: number }[]
}

interface Data {
	[metricName: string]: Metric
}

const calculateTotals = (metricData: {
	[playerName: string]: PlayerData
}): { team: string; total: number }[] => {
	const totals: { [teamName: string]: number } = {}

	// Iterate through each player data in the metric
	for (const playerName in metricData) {
		const player = metricData[playerName]
		const teamName = player.teamName
		const gained = player.gained || 0

		// Add gained to the team's total
		if (!totals[teamName]) {
			totals[teamName] = gained
		} else {
			totals[teamName] += gained
		}
	}

	// Convert totals object to array of objects
	const totalsArray = Object.keys(totals).map((teamName) => ({
		team: teamName,
		total: totals[teamName]
	}))
	return totalsArray
}

const getMetricWithTotals = (metricName: string): Metric | null => {
	const metric = ref(props.latestData[metricName])

	if (!metric) {
		console.error(`Metric ${metricName} not found`)
		return null
	}

	const metricData = metric.value.data
	if (metricData == undefined) return null
	const totalsArray = calculateTotals(metricData).toSorted((a, b) => {
		if (a.team < b.team) return -1
		if (a.team > b.team) return 1
		return 0
	})
	return {
		...metric.value,
		totals: totalsArray
	}
}

const getHighestTotal = (metric: string): number => {
	const measuredTotal = ref<number>(0) // Initialize ref with default value 0

	const metricData = getMetricWithTotals(metric)

	if (!metricData || !metricData.totals || metricData.totals.length === 0) {
		return measuredTotal.value // Return the default value from the ref
	}

	// Sort totals array in descending order based on total value
	const sortedTotals = metricData.totals.sort((a, b) => b.total - a.total)

	// Update ref with the highest total
	measuredTotal.value = sortedTotals[0].total

	// Return the highest total
	return measuredTotal.value
}
const teamsCollected = computed(() => {
	const teamsWithCollected: Record<string, collectionLogItem[]> = {}
	props.teams.forEach((team) => {
		teamsWithCollected[team] =
			props.selectedTile?.collected?.filter((item) => item.teamName === team) || []
	})
	return teamsWithCollected
})
const getDropCount = (team: string, drop: any) => {
	const count = teamsCollected.value[team]?.filter((item) => item.id === drop.id)?.length || 0

	return `${count}`
}
const getDropClass = (team: string, drop: any) => {
	const count = teamsCollected.value[team]?.filter((item) => item.id === drop.id)?.length || 0
	return {
		completed: count >= drop.count,
		notStarted: count === 0
	}
}
const getDropCollectedByTeam = (collected: collectionLogItem[] | undefined, iId?: string) => {
	const teamTotals = ref<{ [key: string]: number | undefined }>({})
	props.teams.forEach((team) => {
		const tempTotal = ref(
			collected?.filter((item) => {
				item.id === iId && item.teamName === team
			}).length
		)

		teamTotals.value[team as string] = tempTotal.value ?? 0
	})
	return teamTotals.value
}

function titleCase(str: string) {
	return str
		.toLowerCase()
		.split(' ')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1)
		})
		.join(' ')
}

const showModal = () => {
	if (dialog.value) {
		dialog.value.showModal()
	}
}

const closeModal = () => {
	if (dialog.value) {
		dialog.value.close()
	}
}
defineExpose({
	showModal,
	closeModal
})
defineEmits(['close'])
</script>
<style scoped>
dialog {
	width: 800px;
	border: 1px solid var(--color-background__inv);
	outline: none;
}
dialog > div {
	display: grid;
	grid-template-columns: 0.3fr 0.7fr;
	gap: var(--gap);
}
dialog img {
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: contain;
	padding: 5px;
	border: 1px solid var(--color-background__inv);
	border-radius: var(--border-radius);
}
.img-container {
	display: flex;
	flex-direction: column;
}
.left-column {
	display: flex;
	flex-direction: column;
	gap: var(--gap);
}

.title span {
	outline: unset;
	border: 1px solid transparent;
	display: inline-block;
	word-break: break-word;
	&:focus-within {
		border: 1px solid var(--color-background__inv);
		border-radius: var(--border-radius);
	}
}
.drop-list {
	list-style-type: none;
	margin: inherit;
	padding: inherit;
}
.drop-table {
	display: grid;
	grid-template-columns: max-content repeat(var(--_width), 6ch);
	justify-content: space-between;
}
.drop-table__row {
	display: grid;
	grid-template-columns: subgrid;
	/* justify-content: space-between; */
}
.drop-table__row :not(:nth-child(1)) {
	background-color: red;
	margin-right: auto;
	text-align: right;
}
.right-column {
	width: 100%;
}
.spread {
	width: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	gap: var(--gap);
	justify-content: space-between;
	& p {
		width: 12ch;
		text-align: end;
	}
}
.totals {
	margin: 0;
}
.completed {
	font-weight: bold;
}
.notStarted {
	font-style: italic;
	color: var(--mid-text);
}
.metric-list {
	cursor: pointer;
}
.open-list + .metric-item {
	display: none;
}
</style>
