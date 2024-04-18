<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.selectedTile">
			<div class="left-column">
				<div class="img-container">
					<img :src="props.selectedTile.image" />
				</div>
				<div class="verifyTile">
					<div v-for="team in teams" :key="team.teamName">
						<span icon v-if="verifiedTeams && verifiedTeams.includes(team.teamName)">
							check
						</span>
						{{ team.teamName }}
						<button @click="verifyTeam({ teamName: team.teamName })">verify</button>
					</div>
				</div>
				<button @click.prevent="$emit('close')">close</button>
				<div v-html="props.selectedTile.description" />
				<small> tile id: {{ props.selectedTile.id }} </small>
				<div>Points: {{ props.selectedTile.points }}</div>
				<div v-if="props.selectedTile.repeatable"><em>This tile is repeatable</em></div>
			</div>
			<div class="right-column">
				<h2 class="fs-1 title" style="margin-bottom: var(--size-4)">
					{{ props.selectedTile.title }}
				</h2>
				<div v-if="props.selectedTile.type == 'drop'">
					<h2 v-if="props.selectedTile.needAny === false" class="fs-4">
						Get the following items:
					</h2>
					<h2 v-else class="fs-4">
						Get a total of {{ props.selectedTile.count }} items:
					</h2>
					<div class="drop-table" :style="{ '--_width': teams.length }">
						<div></div>
						<div v-for="team in teams">{{ team.teamName }}</div>
						<template v-for="drop in props.selectedTile.drops">
							<div>
								<button icon @click.prevent="showMiniModal(drop)">
									playlist_add</button
								>{{ drop.name }}
							</div>
							<div v-for="team in teams" :class="getDropClass(team, drop)">
								<span>{{ getDropCount(team, drop) }}</span>
								<template v-if="props.selectedTile.needAny === false"
									>/ {{ drop.count }}</template
								>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</dialog>
	<dialog ref="mini" class="mini">
		<template v-if="selectedDrop">
			<h2 class="fs-2">{{ selectedDrop.name }}:</h2>
			<div class="controls">
				<button @click.prevent="showMicroModal()">Add drop</button>
				<button @click="closeMiniModal()">Close</button>
			</div>
			<div class="mini__team-list" v-for="team in teams">
				<div class="mini__team-header">
					<div class="mini__team-icon">{{ team.teamName }}</div>
					<div class="mini__team-total">
						{{ getTeamDropCount(team) }}
						<template v-if="!props.selectedTile?.needAny"
							>/ {{ selectedDrop.count }}</template
						>
					</div>
				</div>
				<div class="mini__team-player-entry" v-for="entry in getTeamEntries(team)">
					{{ entry.playerName }}:
					{{ formatDate(entry.timestamp.seconds) }}
					<div icon class="mini__team-player-remove" @click="removeEntry(entry)">
						delete
					</div>
				</div>
			</div>
		</template>
	</dialog>
	<dialog ref="micro" class="micro">
		<h2>Add a drop:</h2>
		<VueMultiselect
			v-model="singleSelectTeam"
			:options="teams"
			:multiple="false"
			:close-on-select="true"
			:clear-on-select="false"
			:preserve-search="true"
			:allow-empty="true"
			label="teamName"
			placeholder="Choose a team"
		/>
		<VueMultiselect
			v-model="singleSelectPlayer"
			:options="computedAvailablePlayers"
			:multiple="false"
			:close-on-select="true"
			:clear-on-select="false"
			:preserve-search="true"
			:allow-empty="true"
			placeholder="Choose a team"
		/>
		<button @click="addToDrop()">add</button>
		<button @click="closeMicroModal()">close</button>
	</dialog>
</template>

<script setup lang="ts">
import { modalClose } from '@/assets/js/modalClose'
import { ref, computed } from 'vue'
import VueMultiselect from 'vue-multiselect'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import { useRoute } from 'vue-router'
import type { Team, ModalElement, Tile, collectionLogItem } from '@/types'

const props = defineProps<{
	selectedTile: Tile | null
	teams: Team[]
}>()

const route = useRoute()
const dialog = ref<ModalElement>()
modalClose(dialog, () => {
	dialog.value!.close()
})
const mini = ref<ModalElement>()
modalClose(mini, () => {
	closeMiniModal()
})
const micro = ref<ModalElement>()
modalClose(micro, () => {
	closeMicroModal()
})

const singleSelectTeam = ref<Team | null>(null)
const singleSelectPlayer = ref<string | null>(null)
const dateOptions = ref<{}>({
	weekday: 'short',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
})

const showModal = () => dialog.value?.showModal()
const closeModal = () => dialog.value?.close()
const showMiniModal = (drop: any) => {
	selectedDrop.value = drop
	mini.value?.showModal()
}
const closeMiniModal = () => mini.value?.close()
const showMicroModal = () => micro.value?.showModal()
const closeMicroModal = () => micro.value?.close()

const computedAvailablePlayers = computed(() => {
	if (!singleSelectTeam.value) return []
	return singleSelectTeam.value.players.map((player) => player.displayName)
})

const addToDrop = async () => {
	if (
		!props.selectedTile ||
		!singleSelectTeam.value ||
		!singleSelectPlayer.value ||
		!selectedDrop.value
	)
		return
	const newData = {
		playerName: singleSelectPlayer.value,
		timestamp: new Date(),
		teamName: singleSelectTeam.value.teamName,
		id: selectedDrop.value.id
	}

	const updatedTile = props.selectedTile.collected
		? { ...props.selectedTile, collected: [...props.selectedTile.collected, newData] }
		: { ...props.selectedTile, collected: [newData] }

	await updateDoc(
		doc(
			db,
			'Boards',
			route.params.boardUUID as string,
			'Tiles',
			props.selectedTile.id as string
		),
		updatedTile
	)
	singleSelectTeam.value = null
	singleSelectPlayer.value = null
}

const removeEntry = async (entry: collectionLogItem) => {
	if (!props.selectedTile) return
	const newCollected = props.selectedTile.collected?.filter((item) => item !== entry) || []
	const updatedTile = { ...props.selectedTile, collected: newCollected }
	await updateDoc(
		doc(
			db,
			'Boards',
			route.params.boardUUID as string,
			'Tiles',
			props.selectedTile.id as string
		),
		updatedTile
	)
}

const teamsCollected = computed(() => {
	const teamsWithCollected: Record<string, collectionLogItem[]> = {}
	props.teams.forEach((team) => {
		teamsWithCollected[team.teamName] =
			props.selectedTile?.collected?.filter((item) => item.teamName === team.teamName) || []
	})
	return teamsWithCollected
})

const verifiedTeams = computed(
	() => props.selectedTile?.verified?.map((entry) => entry.teamName) || []
)

const verifyTeam = async ({ teamName }: { teamName: string }) => {
	if (!props.selectedTile) return
	const isVerified = verifiedTeams.value.includes(teamName)
	const updatedVerifiedTeams = isVerified
		? (props.selectedTile.verified || []).filter((entry) => entry.teamName !== teamName)
		: [...(props.selectedTile.verified || []), { teamName, timestamp: new Date() }]

	await updateDoc(
		doc(
			db,
			'Boards',
			route.params.boardUUID as string,
			'Tiles',
			props.selectedTile.id as string
		),
		{
			...props.selectedTile,
			verified: updatedVerifiedTeams
		}
	)
}

const formatDate = (seconds: number) => {
	const date = new Date(seconds * 1000)
	return date.toLocaleDateString(undefined, dateOptions.value)
}

const getDropClass = (team: Team, drop: any) => {
	const count =
		teamsCollected.value[team.teamName]?.filter((item) => item.id === drop.id)?.length || 0
	return {
		completed: count >= drop.count,
		notStarted: count === 0
	}
}

const getDropCount = (team: Team, drop: any) => {
	const count =
		teamsCollected.value[team.teamName]?.filter((item) => item.id === drop.id)?.length || 0

	return `${count}`
}

const getTeamDropCount = (team: Team) => {
	return teamsCollected.value[team.teamName]?.length || 0
}

const getTeamEntries = (team: Team) => {
	return teamsCollected.value[team.teamName] || []
}

const selectedDrop = ref<any>(null)

defineExpose({
	showModal,
	closeModal
})

const emit = defineEmits(['close'])
</script>
<style scoped>
dialog {
	width: 800px;
	border: 1px solid var(--color-background__inv);
	outline: none;
	min-height: 400px;
}
dialog:not(.micro, .mini) > div {
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
