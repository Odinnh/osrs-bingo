<template>
  <pre>
    Starts at: {{ competitions.startsAt }}
    Ends at: {{ competitions.startsAt }}
  </pre>
  <h2>
    Participants <sub>({{ competitions.participantCount }})</sub>
  </h2>
  <details>
    <summary>all participants</summary>
    <ul v-for="participant in participants" :key="participant.player.id">
      <li class="player-name">{{ participant.player.username }}</li>
    </ul>
  </details>

  <h2>Teams</h2>
  <h3 v-for="team in teams" :key="team">{{ team }}</h3>
  <details>
    <summary>RAW DATA competitions</summary>
    <pre>
      {{ competitions }}
    </pre>
  </details>
  <details>
    <summary>RAW DATA Participants</summary>
    <pre>
      {{ participants }}
    </pre>
  </details>
</template>
<script setup>
import { WOMClient } from '@wise-old-man/utils'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const client = new WOMClient()
const competitions = ref()
const participants = ref()
const teams = ref({})
await client.competitions
  .getCompetitionDetails(parseInt(route.params.competitionID), 'corporeal_beast')
  .then((result) => {
    competitions.value = result
    participants.value = competitions.value.participations
  })

participants.value.map((participant) => {
  teams.value[participant.teamName] = { teamName: participant.teamName, stats: null, players: [] }
})

participants.value.map((participant) => {
  teams.value[participant.teamName].players = [
    ...teams.value[participant.teamName].players,
    (teams.value[participant.teamName].players[participant.player.username] = {
      ...participant.player
    })
  ]
})
</script>
<style scoped>
.player-name {
  text-transform: capitalize;
}
sub {
  position: relative;
  bottom: 0.5em;
  font-size: 0.7em;
}
</style>
