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
// @ts-nocheck
<script setup lang="ts">
import { ref } from 'vue'
import { WOMClient } from '@wise-old-man/utils'
import type { Teams, Team, Player } from '../types'
import type { CompetitionDetails, ParticipationWithPlayerAndProgress } from '@wise-old-man/utils'
import { arrayUnion, collection, doc, setDoc } from 'firebase/firestore'
import { getCurrentUser, useDocument } from 'vuefire'

import { db } from '@/firebaseSettings'
import { useRouter } from 'vue-router'

const WOMCode = ref<number | null>(40963)
const ErrorMessage = ref<string>()
const client = new WOMClient()
const resultmsg = ref<Teams>({})
const createBingo = async (): Promise<void> => {
  if (!WOMCode.value || WOMCode.value <= 0 || isNaN(WOMCode.value as number)) {
    return
  }
  interface Response extends CompetitionDetails {
    message?: string
  }

  await client.competitions
    .getCompetitionDetails(WOMCode.value)
    .then((result: Response) => {
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
  const teams = ref<Teams>({})

  participants.value = competitions.participations
  participants.value?.map((participant) => {
    teams.value[participant.teamName as keyof Teams] = {
      teamName: participant.teamName,
      players: [],
      stats: null
    }
  })

  participants.value.map((participant) => {
    teams.value[participant.teamName as keyof Teams].players = [
      ...teams.value[participant.teamName as keyof Teams].players,
      (teams.value[participant.teamName as keyof Teams].players[
        participant.player.username as keyof Player
      ] = {
        ...participant.player
      })
    ]
  })
  return teams.value
}

const addBoardThenRoute = async () => {
  const newBoard = doc(collection(db, 'Boards'))
  const newGroup = doc(collection(db, 'Boards', newBoard.id, 'Groups'))

  await setDoc(newBoard, { ownerID: user.uid }).then(() => {
    setDoc(doc(db, newGroup.path), {
      name: 'all',
      collected: {},
      verify: {},
      icon: 'frog',
      color: '#8a038f',
      points: 0
    })
    setDoc(doc(db, 'Users', user.uid), {
      boards: arrayUnion(newBoard.id)
    })
  })
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
