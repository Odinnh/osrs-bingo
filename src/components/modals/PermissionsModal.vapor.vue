<template>
	<dialog>
		<h2>Moderators</h2>
		<ul>
			<li>Owner: {{ props.boardData.ownerId }}</li>
		</ul>
	</dialog>
</template>
<script setup lang="ts">
const props = defineProps<{
	boardData: any
}>()
</script>
<style scoped></style>
