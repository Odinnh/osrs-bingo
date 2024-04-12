<template>
	<h1 class="font-size-H">Bingo <em>Bongo</em></h1>
	<h2 class="font-size-L">Simplifying OSRS Clan Bingos</h2>
	<div class="col-2">
		<div class="ghost-board">
			<div
				v-for="i in 9"
				class="tile"
				:key="i + 'tile'"
				:style="{
					'--rotate': Math.random() * 6 - 3 + 'deg',
					backgroundColor: getRandomColor(i)
				}"
			></div>
		</div>
		<div>
			<h2>No more spreadsheets</h2>
			<p>
				You know how annoying it is to keep track of scores during clan bingos, right? Yeah,
				it's a pain.
			</p>
			<p>
				No more dealing with spreadsheets or scribbling down scores - Bingo Bongo has got my
				back on that front. It's like having a reliable sidekick for our clan events, making
				everything run smoothly and keeping the stress levels down.
			</p>
			<a class="btn" big submit @click="router.push({ name: 'createNewBingo' })"
				>Start a new event!</a
			>
		</div>
	</div>
	<div></div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'Bingo Bongo - an osrs bingo app'

const router = useRouter()
const secondaryIndices = new Set()
const getRandomColor = (index: number) => {
	while (secondaryIndices.size < 3) {
		secondaryIndices.add(Math.floor(Math.random() * 9) + 1)
	}
	return secondaryIndices.has(index) ? 'var(--secondary)' : 'var(--primary)'
}
</script>
<style>
@media screen and (max-width: 650px) {
	.col-2 {
		flex-direction: column;
		align-items: center;
	}
	.ghost-board {
		width: 100%;
	}
}
</style>
<style scoped></style>
