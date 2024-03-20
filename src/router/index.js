import { createRouter, createWebHashHistory } from 'vue-router'
import { doc } from 'firebase/firestore'
import { db } from '../firebaseSettings'
import { getCurrentUser, useDocument } from 'vuefire'
import WOMTEST from '../views/WOMTEST.vapor.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/wom/:competitionID',
      name: 'wiseOldManTest',
      component: WOMTEST
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()
  if (to.name == 'overview') {
    const { data: boardData, promise } = useDocument(doc(db, 'Boards', to.params.boardUUID))
    await promise.value.then(async (data) => {
      if (data.settings.public) next()
      if (!user) next({ name: 'loginView', query: from })
      const { data: userData } = useDocument(doc(db, 'Users', user.uid))

      if (userData?.type == 'admin') next()
      if (boardData?.ownerID == user.uid) next()
    })
  }
  if (!user && to.name !== 'loginView') next({ name: 'loginView' })
  next()
})

export default router
