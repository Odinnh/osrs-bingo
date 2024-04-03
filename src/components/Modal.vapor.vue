<template>
  <dialog ref="dialog" class="danger">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <div class="body">
      <slot name="body"> </slot>
    </div>
    <div class="controls"><slot name="controls"></slot></div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ModalElement } from '@/types'

const dialog = ref<ModalElement>()

const showModal = () => {
  if (dialog.value) {
    dialog.value.showModal()
  }
}

const closeModal = () => {
  if (dialog.value) {
    dialog.value.close()
  }
}
defineExpose({
  showModal,
  closeModal
})
</script>
<style scoped>
.controlls {
  display: flex;
  justify-content: space-between;
}
</style>

<slot name="controlls"> </slot>
<!-- <h2>Are you sure?</h2> -->
<!-- <p>do you want to delete {{ tileToBeDeleted?.title }}?</p>
<p>once you press save, this is final and can't be undone</p> -->
<!-- <button submit @click="RemoveTileFromList()">Yes</button>
<button cancel @click="cancelDelete()">No</button> -->
