<template>
  <div>
    <h1>Hello World</h1>
    <p v-if="ErrorMessage">{{ ErrorMessage }}</p>
    <input
      type="number"
      v-model="WOMCode"
      placeholder="12345 WOM Team competition code"
      min="0"
      @focusin="
        () => {
          ErrorMessage = ''
        }
      "
    />
    <button @click="createBingo()">Create new Bingo</button>
    <button v-if="isReady" @click="addBoard()">finish setup</button>
    <div v-if="teams !== null && isReady">
      <h1>{{ boardDetails.name }}</h1>
      <template v-if="boardDetails.start">
        <p>
          Starts:
          {{ boardDetails.start.toLocaleDateString(undefined, dateOptions) }}
        </p>
        <code>&lt;t:{{ boardDetails.start?.valueOf() / 1000 }}:F&gt;</code>
      </template>
      <template v-if="boardDetails.end">
        <p>
          Ends:
          {{ boardDetails.end.toLocaleDateString(undefined, dateOptions) }}
        </p>
        <code>&lt;t:{{ boardDetails.end?.valueOf() / 1000 }}:F&gt;</code>
      </template>

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
import type { Teams, Player } from '@/types'
import type { CompetitionDetails, ParticipationWithPlayerAndProgress } from '@wise-old-man/utils'
import { arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { getCurrentUser } from 'vuefire'
import { db } from '@/firebaseSettings'

const user = await getCurrentUser()
const isReady = ref<boolean>(false)
const WOMCode = ref<number>(40963)
const ErrorMessage = ref<string>()
const client = new WOMClient()
const teams = ref<Teams>({})
const dateOptions = ref<{}>({
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
})
interface boardDetails {
  name?: string
  start?: Date
  end?: Date
}
const boardDetails = ref<boardDetails>({})
const createBingo = async (): Promise<void> => {
  if (!WOMCode.value || WOMCode.value <= 0 || isNaN(WOMCode.value as number)) {
    return
  }
  interface Response extends CompetitionDetails {
    message?: string
  }

  await client.competitions
    .getCompetitionDetails(WOMCode.value)
    .then(async (result: Response) => {
      if (result?.message) {
        throw new Error('Error creating bingo: ' + result.message)
      }
      if (result?.metric != 'overall') {
        throw new Error('Error creating bingo: Metric should be set to `Overall`')
      }
      if (result?.type != 'team') {
        throw new Error('Error creating bingo: Type should be set to `Team`')
      }
      if (!result?.participations) {
        throw new Error('Error creating bingo: No participants found')
      }
      // if board has ended already then don't create a new board
      if (new Date() > result.endsAt!) {
        throw new Error('Error creating bingo: Competition has already ended')
      }
      // if board already exists then don't create a new board
      const boardDoc = doc(db, 'Boards', WOMCode.value.toString())
      const docSnap = await getDoc(boardDoc)
      if (docSnap.exists()) {
        throw new Error('Error creating bingo: Board already exists')
      }

      boardDetails.value = {
        name: result.title,
        start: result.startsAt,
        end: result.endsAt
      }
      teams.value = formatTeams(result)
      isReady.value = true
    })
    .catch((error) => {
      ErrorMessage.value = error.message
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
  const newBoard = doc(db, 'Boards', WOMCode.value.toString())
  if (user) {
    // add the ownersID to the new board
    await setDoc(newBoard, { ownerID: user.uid! }).then(() => {
      const userDoc = doc(db, 'Users', user.uid)
      //add teams for each team in the competition
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
      //set name of newBoard to title of competition
      updateDoc(newBoard, {
        name: boardDetails.value.name,
        start: boardDetails.value.start,
        end: boardDetails.value.end
      })
      //add board to user's list of boards
      //update user's list of boards in firestore
      updateDoc(userDoc, {
        boards: arrayUnion(newBoard.id)
      })
    })
  }
  isReady.value = false
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
