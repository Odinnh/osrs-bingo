<template>
	<div class="editor">
		<div class="controlls">
			<template v-if="editor">
				<button icon big @click="editor.chain().focus().toggleBold().run()">
					format_bold
				</button>
				<button icon big @click="editor.chain().focus().toggleItalic().run()">
					format_italic
				</button>
				<button icon big @click="editor.chain().focus().toggleBulletList().run()">
					format_list_bulleted
				</button>
				<button icon big @click="editor.chain().focus().toggleOrderedList().run()">
					format_list_numbered
				</button>
			</template>
		</div>
		<editor-content :editor="editor" class="editor-content" placeholder="bla" />
	</div>
</template>

<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	}
})

const emits = defineEmits(['update:modelValue'])

const editor = ref<Editor>()

watch(
	() => props.modelValue,
	(value) => {
		const isSame = editor.value?.getHTML() === value
		if (isSame) {
			return
		}

		editor.value?.commands.setContent(value, false)
	}
)

onMounted(() => {
	editor.value = new Editor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				// Use a placeholder:
				placeholder: 'Write something …'
				// Use different placeholders depending on the node type:
				// placeholder: ({ node }) => {
				//   if (node.type.name === 'heading') {
				//     return 'What’s the title?'
				//   }

				//   return 'Can you add some further context?'
			})
		],
		content: props.modelValue,

		onUpdate: () => {
			emits('update:modelValue', editor.value?.getHTML())
		}
	})
})
onBeforeUnmount(() => {
	editor.value?.destroy()
})
</script>

<style scoped>
.editor {
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-text);
	border-radius: var(--border-radius);
}
.controlls {
	top: 0px;
	left: 0px;
	display: flex;
	gap: var(--gap);
	border-bottom: 1px solid var(--color-text);
	padding: 1ch;
}
.editor-content {
	background-color: var(--background);
}
</style>
