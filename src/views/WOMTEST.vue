<template>
  <pre>
    {{ competitions }}
  </pre>
</template>
<script setup>
import { WOMClient, CompetitionStatus } from '@wise-old-man/utils'
import { useRoute } from 'vue-router'

const route = useRoute()
const client = new WOMClient()

const competitions = await client.competitions.getCompetitionDetails(
  parseInt(route.params.competitionID),
  'corporeal_beast'
)
</script>
