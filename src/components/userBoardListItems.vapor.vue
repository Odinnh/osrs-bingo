<template>
	<label :key="boardData?.id" v-if="boardData">
		{{ boardData?.name }}
		<router-link
			:to="{ name: 'editBoard', params: { boardUUID: boardData?.id } }"
			class="btn"
			icon
		>
			edit
		</router-link>
	</label>
	<router-link :to="{ name: 'viewBoard', params: { boardUUID: boardData?.id } }" class="btn" icon>
		visibility
	</router-link>
	<input type="checkbox" @click="publishBoard" toggle v-model="boardData!.published" />
</template>
<script setup lang="ts">
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import { useDocument } from 'vuefire'

// Define props directly
const props = defineProps<{
	boardID: string
}>()

// Your component logic
const { data: boardData, promise: boardDataPromise } = useDocument(doc(db, 'Boards', props.boardID))
await Promise.all([boardDataPromise.value])
const publishBoard = () => {
	if (boardData.value?.published) {
		boardData.value.published = !boardData.value.published
		updateDoc(doc(db, 'Boards', props.boardID), {
			published: boardData.value.published
		})
		return
	}
	updateDoc(doc(db, 'Boards', props.boardID), {
		published: true
	})
	return
}
</script>
<style scoped></style>
