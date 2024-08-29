<template>
	<label :key="boardData?.id" v-if="boardData">
		{{ boardData?.name }}

		<router-link
			:to="{ name: 'viewBoard', params: { boardUUID: boardData?.id } }"
			class="btn"
			icon
		>
			visibility
		</router-link>
	</label>
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
</script>
<style scoped></style>
