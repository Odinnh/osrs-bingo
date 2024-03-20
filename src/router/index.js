import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import ModeratorView from '../views/ModeratorView.vue'
import NewBoard from '../views/NewBoard.vue'
import UserOverview from '../views/UserOverview.vue'
import StatsScreen from '../views/StatsScreen.vue'
import EditBoard from '../views/depricated/EditBoard.vue'
import LoginView from '../views/depricated/loginView.vue'
import GroupView from '../views/depricated/groupView.vue'
import { doc } from 'firebase/firestore'
import { db } from '../firebaseSettings'
import { getCurrentUser, useDocument } from 'vuefire'
import WOMTEST from '../views/WOMTEST.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'userOverview',
      props: true,
      component: UserOverview
    },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView,
      meta: {}
    },
    {
      path: '/new',
      name: 'newBoard',
      component: NewBoard
    },
    {
      path: '/e/:boardUUID',
      name: 'editBoard',
      props: true,
      component: EditBoard
    },
    {
      path: '/g/:boardUUID',
      name: 'groupView',
      props: true,
      component: GroupView
    },
    {
      path: '/m/:boardUUID',
      name: 'moderator',
      props: true,
      component: ModeratorView
    },
    {
      path: '/b/:boardUUID',
      name: 'overview',
      props: true,
      component: BoardView
    },
    {
      path: '/b/:boardUUID/stats/',
      name: 'stats-graph',
      props: true,
      component: StatsScreen
    },
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
