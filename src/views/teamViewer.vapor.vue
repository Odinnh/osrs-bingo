<template>
	<div>
		<h1>teams</h1>
	</div>
	<button @click.prevent="synchTeams">synch teams<span icon>sync</span></button>
	<div class="teams" :style="{ '--width': teamsData.length }">
		<div v-for="team in teamsData" :key="team.id">
			<h2>{{ team.teamName }}</h2>
			<ul>
				<li
					v-for="player in team.players"
					:key="player.id"
					:class="{ hasHelmet: player.type !== 'regular' }"
					:style="{ '--marker': 'url(\'' + formatPlayerBadge(player.type) + '\')   ' }"
				>
					{{ player.displayName }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useCollection } from 'vuefire'

import { useRoute } from 'vue-router'

import { ref } from 'vue'

import { WOMClient } from '@wise-old-man/utils'
import type { Teams, Player } from '@/types'
import type { CompetitionDetails, ParticipationWithPlayerAndProgress } from '@wise-old-man/utils'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

const route = useRoute()
const { data: teamsData, promise: teamsDataPromise } = useCollection(
	collection(db, 'Boards', route.params.boardUUID as string, 'Groups')
)
const formatPlayerBadge = (playerType: string): string => {
	const f_PlayerType = playerType.charAt(0).toUpperCase() + playerType.slice(1)
	return 'https://oldschool.runescape.wiki/images/' + f_PlayerType + '_chat_badge.png'
}
await Promise.all([teamsDataPromise.value])
const client = new WOMClient()
const synchTeams = async () => {
	const batch = writeBatch(db)

	try {
		const result = await client.competitions.getCompetitionDetails(
			parseInt(route.params.boardUUID as string)
		)
		const teamsResult = formatTeams(result)

		//update or remove team from firebase
		teamsData.value.forEach((existingTeam) => {
			const existingTeamIndex = Object.keys(teamsResult).findIndex(
				(teamName) => teamName === existingTeam.teamName
			)

			if (existingTeamIndex !== -1) {
				batch.update(
					doc(db, 'Boards', route.params.boardUUID as string, 'Groups', existingTeam.id),
					{ ...teamsResult[existingTeam.teamName] }
				)
			} else {
				batch.delete(
					doc(db, 'Boards', route.params.boardUUID as string, 'Groups', existingTeam.id)
				)
			}
		})
		//add new team to firebase
		Object.values(teamsResult).forEach((team) => {
			//loop through WOM to WOM formatted data to find if team is a new team
			const existingTeamIndex = teamsData.value.findIndex(
				(existingTeam) => existingTeam.teamName === team.teamName
			)
			//if there's a new team, add them to the DB
			if (existingTeamIndex === -1) {
				const newTeamRef = doc(
					collection(db, 'Boards', route.params.boardUUID as string, 'Groups')
				)
				batch.set(newTeamRef, team)
			}
		})

		await batch.commit()
	} catch (error) {
		console.error('Error synchronizing data:', error)
	}
}

const formatTeams = (competitions: CompetitionDetails): Teams => {
	const participants = ref<ParticipationWithPlayerAndProgress[] | null>()
	const teams = ref<Teams>({})

	participants.value = competitions.participations
	participants.value?.map((participant) => {
		teams.value[participant.teamName as keyof Teams] = {
			teamName: participant.teamName,
			players: [],
			stats: null
		}
	})

	participants.value.map((participant: Player) => {
		delete participant.player.ehb
		delete participant.player.exp
		delete participant.player.ehp
		teams.value[participant.teamName as keyof Teams].players = [
			...teams.value[participant.teamName as keyof Teams].players,
			(teams.value[participant.teamName as keyof Teams].players[participant.player.username] =
				{
					...participant.player
				})
		]
	})
	return teams.value
}
</script>
<style scoped>
li {
	padding-left: 5px;
}
.hasHelmet::marker {
	content: var(--marker) '  ';
}
.teams {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
}
</style>
