<template>
  <section>
    <ModeratorBoard
      v-if="groupData && groupData.name == 'moderator'"
      :boardUUID="boardUUID"
      :teamCode="teamCode"
      @verifyTile="verifyTile(tile, groupid)"
      :groups="groups"
    />
    <aside>
      <form v-if="groupData && groupData.name != 'moderator'" @submit.prevent="goToTeam">
        You are not a moderator, <br />please enter your code to go to the appropriate board for
        your team<br /><br />
        team code: <input type="text" name="teamId" v-model="teamCodeInput" /><button
          type="submit"
          class="btn"
        >
          Go To Board
        </button>
      </form>
    </aside>
  </section>
</template>

<script setup>
//project modules
import ModeratorBoard from '@/components/moderatorBoard.vue'
//vue modules
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//external modules
import { useFirestore, useDocument } from 'vuefire'

import { doc, collection } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)

const route = useRoute()
const router = useRouter()
const teamCode = computed(() => route.params.teamCode)
const teamCodeInput = ref('')
const boardUUID = computed(() => route.params.boardUUID)
const { data: groupData } = useDocument(
  doc(db, `Boards/${boardUUID.value}/Groups/${teamCode.value}/`)
)
const { data: groups } = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))

//functions
const goToTeam = async () => {
  if (teamCode.value !== '') {
    let route = {
      name: 'private-board',
      params: { boardUUID: boardUUID.value, teamCode: teamCodeInput.value }
    }

    const { data: modCheck } = useDocument(
      doc(db, 'Boards', boardUUID.value, 'Groups', teamCodeInput.value)
    )
    if (modCheck && modCheck.value.name == 'moderator') {
      route.name = 'moderator'
    }
    router.push(route)
  }
}
</script>

<style scoped>
textarea {
  border: 1px solid white;
  background-color: #343434;
  color: white;
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
</style>
