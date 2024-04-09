<template>
  <div class="editor">
    <editor-content :editor="editor" class="editor-content" />
    <div class="controlls">
      <button icon big @click="editor.chain().focus().toggleBold().run()">format_bold</button>
      <button icon big @click="editor.chain().focus().toggleItalic().run()">format_italic</button>
      <button icon big @click="editor.chain().focus().toggleBulletList().run()">
        format_list_bulleted
      </button>
      <button icon big @click="editor.chain().focus().toggleOrderedList().run()">
        format_list_numbered
      </button>
    </div>
  </div>
</template>

<script setup lang="js">
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])

const editor = ref(null)

watch(
  () => props.modelValue,
  (value) => {
    const isSame = editor.value.getHTML() === value
    if (isSame) {
      return
    }

    editor.value.commands.setContent(value, false)
  }
)

onMounted(() => {
  editor.value = new Editor({
    extensions: [StarterKit],
    content: props.modelValue,
    onUpdate: () => {
      emits('update:modelValue', editor.value.getHTML())
    }
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style scoped>
.editor {
  position: relative;
}
.controlls {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 15px;
  /* display: none; */
}
</style>
