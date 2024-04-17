<template>
	<dialog ref="mini">
		<h2>Osmumtens fang:</h2>
		<div class="controls">
			<button>Add drop</button>
			<button>Close</button>
		</div>
		<div class="mini__team-list">
			<div class="mini__team-header">
				<div class="mini__team-icon"></div>
				<div class="mini__team-total"></div>
			</div>
			<div class="mini__team-player-entry">
				{{ 'Player Name: ' }}
				{{ 'timestamp' }}
				<div class="mini__team-player-remove">delete</div>
			</div>
		</div>
	</dialog>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { collectionLogItem } from '@/types'

const props = defineProps<{
	teams: {}
	collectedItems: collectionLogItem[]
}>()
</script>
<style scoped></style>
