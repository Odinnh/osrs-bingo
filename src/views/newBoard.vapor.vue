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
    <button @click="addBoard()">finish setup</button>
    <div v-if="teams !== null">
      {{ teams }}
      <div v-for="team in teams" :key="(team.teamName as string)">
        <h2>{{ team.teamName }}</h2>
        <div v-for="player in team.players" :key="player.username">
          <div>{{ player.username }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
// @ts-nocheck
<script setup lang="ts">
import { ref } from 'vue'
import { WOMClient } from '@wise-old-man/utils'
import type { Teams, Player } from '../types'
import type { CompetitionDetails, ParticipationWithPlayerAndProgress } from '@wise-old-man/utils'
import { arrayUnion, collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { getCurrentUser } from 'vuefire'
const user = await getCurrentUser()
import { db } from '../firebaseSettings'

const WOMCode = ref<number | null>(40963)
const ErrorMessage = ref<string>()
const client = new WOMClient()
const teams = ref<Teams>({})
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
      teams.value = formatTeams(result)
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

  participants.value.map((participant: Player) => {
    delete participant.player.ehb
    delete participant.player.exp
    delete participant.player.ehp
    teams.value[participant.teamName as keyof Teams].players = [
      ...teams.value[participant.teamName as keyof Teams].players,
      (teams.value[participant.teamName as keyof Teams].players[participant.player.username] = {
        ...participant.player
      })
    ]
  })
  return teams.value
}

const addBoard = async () => {
  const newBoard = doc(collection(db, 'Boards'))
  if (user) {
    await setDoc(newBoard, { ownerID: user.uid! }).then(() => {
      const userDoc = doc(db, 'Users', user.uid)
      for (let teamKey in teams.value) {
        const newGroup = doc(collection(db, 'Boards', newBoard.id, 'Groups'))
        const team = teams.value[teamKey]
        setDoc(doc(db, newGroup.path), {
          teamName: team.teamName,
          teamId: newGroup.id,
          players: teams.value[teamKey].players,
          stats: null
        })
      }
      updateDoc(userDoc, {
        boards: arrayUnion(newBoard.id)
      })
    })
  }
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
