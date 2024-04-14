<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.selectedTile">
			<div class="left-column">
				<div class="img-container">
					<img :src="props.selectedTile!.image" />
				</div>
				<div v-html="props.selectedTile.description" />

				<div>
					<p>Points: {{ props.selectedTile!.points }}</p>
					<p v-if="props.selectedTile.repeatable"><em>This tile is repeatable</em></p>
				</div>
			</div>
			<div class="right-column">
				<h2 class="fs-1 title">
					{{ props.selectedTile.title }}
				</h2>
				<small>
					tile id: <code>{{ props.selectedTile?.id }}</code>
				</small>
				<button @click.prevent="$emit('close')">close</button>
				<h2>Get</h2>
				<div v-if="props.selectedTile?.type == 'drop'">
					<h3 class="fs-4">Drops</h3>
					<ul class="drop-list">
						<li
							style="padding-block: var(--size-5)"
							v-for="drop in props.selectedTile.drops"
						>
							<div class="drop-row">
								<div>
									{{ drop.name }}
									<small
										v-if="(drop.min || drop.max) && props.selectedTile.needAny"
									>
										<span v-if="drop.min">min : {{ drop.min }}</span>
										<span v-if="drop.min && drop.max">/</span>
										<span v-if="drop.max">max : {{ drop.max }}</span>
									</small>
								</div>
								<div v-if="!props.selectedTile.needAny">{{ drop.count }}</div>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="fs-4" v-if="!['kc', 'exp'].includes(props.selectedTile.type)">
						Metric
					</h3>
				</div>
				<div>
					<template v-for="metric in props.selectedTile.metric">
						<h3>
							{{ metric.replace('_', ' ') }} x{{
								formatNumberToShort(props.selectedTile.count)
							}}
						</h3>
						<div v-for="team in getMetricWithTotals(metric)?.totals">
							{{ team.team }}
							<div class="spread">
								<progress
									min="0"
									:value="team.total"
									:max="props.selectedTile.count"
								></progress>

								<p class="totals">
									{{
										team.total >= props.selectedTile.count
											? formatNumberToShort(props.selectedTile.count) + '+'
											: formatNumberToShort(team.total)
									}}
								</p>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import type { ModalElement, Tile } from '@/types'
import { formatNumberToShort } from '@/assets/js/helpers'

const props = defineProps<{
	selectedTile: Tile | null
	latestData: Data
}>()

const dialog = ref<ModalElement>()

interface PlayerData {
	name: string
	teamName: string
	gained: number
}

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
	const totalsArray = calculateTotals(metricData)

	return {
		...metric.value,
		totals: totalsArray
	}
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
.drop-row {
	display: flex;
	justify-content: space-between;
}
.right-column {
	width: 100%;
}
.spread {
	width: 100%;
	display: flex;
	width: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	gap: var(--gap);
	& p {
		width: 4ch;
		display: inline-block;
	}
}
.totals {
	margin: 0;
}
</style>
