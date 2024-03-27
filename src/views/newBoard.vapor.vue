<template>
  <div>
    <h1>Hello World</h1>
    <p v-if="ErrorMessage">{{ ErrorMessage }}</p>
    <input
      type="number"
      v-model="WOMCode"
      value="0"
      min="0"
      @focusin="
        () => {
          ErrorMessage = ''
        }
      "
    />
    <button @click="createBingo()">Create new Bingo</button>
    <div v-if="resultmsg !== null">
      <div v-for="team in resultmsg" :key="team.teamName">
        <h2>{{ team.teamName }}</h2>
        <div v-for="player in team.players" :key="player.username">
          <div>{{ player.username }}</div>
        </div>
      </div>
    </div>
    <div v-if="ErrorMessage !== ''">
      <div>{{ ErrorMessage }}</div>
    </div>
    <div v-if="resultmsg !== null">
      <div v-for="team in resultmsg.value" :key="team.teamName"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import Vue from 'vue'
import { ref } from 'vue'
import { WOMClient } from '@wise-old-man/utils'
import type { Teams, Player } from '../types'
import type { CompetitionDetails, ParticipationWithPlayerAndProgress } from '@wise-old-man/utils'

const WOMCode = ref<number | null>(40963)
const ErrorMessage = ref<string>()
const client = new WOMClient()
const resultmsg = ref<Teams>({})
const createBingo = async (): Promise<void> => {
  if (!WOMCode.value || WOMCode.value <= 0 || isNaN(WOMCode.value as number)) {
    return
  }
  await client.competitions

    .getCompetitionDetails(parseInt(WOMCode.value))
    .then((result) => {
      if (result?.message) {
        throw new Error('Error creating bingo: ' + result.message)
      }
      resultmsg.value = formatTeams(result)
    })
    .catch((error) => {
      ErrorMessage.value = error.message
    })
    .finally(() => {
      WOMCode.value = 0
    })
}

const formatTeams = (competitions: CompetitionDetails): Teams => {
  const participants = ref<ParticipationWithPlayerAndProgress[] | null>()
  const teams = ref({})

  participants.value = competitions.participations
  participants.value?.map((participant) => {
    const teamName = <string>participant.teamName

    teams.value[teamName] = { teamName: teamName, stats: null, players: [] }
  })

  participants.value.map((participant) => {
    teams.value[participant.teamName].players = [
      ...teams.value[participant.teamName].players,
      (teams.value[participant.teamName].players[participant.player.username] = {
        ...participant.player
      })
    ]
  })
  return teams.value
}
</script>
<style scoped>
h1 {
  color: rgb(163, 43, 43);
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outerspin-button {
    -webkit-appearance: textfield;
  }
}
</style>
