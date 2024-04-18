<template>
	<h1 class="font-size-H">List all boards</h1>
	<h2>Published boards:</h2>
	<div v-if="boardsData">
		<div v-if="boardsData" v-for="board in boardsData">
			<!-- {{ board }} -->
			<div v-if="board.published">
				{{ board.name }}
				<router-link
					:to="{ name: 'viewBoard', params: { boardUUID: board.id } }"
					class="btn"
					icon
				>
					visibility
				</router-link>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

const { data: boardsData, promise: boardDataPromise } = useCollection(collection(db, 'Boards'))
await boardDataPromise.value
</script>
