import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import NewBoard from '@/views/NewBoard.vue'
import UserOverview from '@/views/UserOverview.vue'
import StatsScreen from '@/views/StatsScreen.vue'
import EditBoard from '../views/EditBoard.vue'
import LoginView from '../views/loginView.vue'
import GroupView from '../views/GroupView.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'userOverview',
      props: true,
      component: UserOverview
    },
    {
      path: '/new',
      name: 'newBoard',
      component: NewBoard
    },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView
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
    // ,{
    //   path: '/b/:boardUUID/team/:teamCode',
    //   name: 'private-board',
    //   props: true,
    //   component: BoardView
    // },
  ]
})

export default router
