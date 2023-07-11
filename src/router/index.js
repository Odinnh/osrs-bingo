import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import NewBoard from '@/views/NewBoard.vue'
import UserOverview from '@/views/UserOverview.vue'
import StatsScreen from '@/views/StatsScreen.vue'
import EditBoard from '../views/EditBoard.vue'
import LoginView from '../views/loginView.vue'
import GroupView from '../views/GroupView.vue'
import { useUserStateStore } from '../stores/userState'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseSettings'

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
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const userStateStore = useUserStateStore()
  //mee sturen
  //to.params?.boardUUID
  //to.meta
  // if (to.params.boardUUID) {
  //   CheckIfAuthorised({ to: to, from: from, next: next })
  //     .then((boardData) => {
  //       console.log(userStateStore.user.data.uid)
  //       console.log(boardData?.ownerID)
  //       console.log(boardData?.settings.public)
  //       console.log(to.params?.boardUUID)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  const canAccess = canUserAccess(to, userStateStore)
  if (to.name !== 'Login' && !canAccess) next({ name: 'Login' })
  else next()
})

const canUserAccess = async ({ to, from, next }) => {
  const docSnap = await getDoc(doc(db, 'Boards', to.params?.boardUUID))
  if (docSnap.exists()) {
    return true
  } else {
    return false
  }
}
export default router
