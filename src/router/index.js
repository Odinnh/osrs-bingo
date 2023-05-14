import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import HomeView from '@/views/HomeView.vue'
import newBoard from '@/views/newBoard.vue'
import BoardList from '@/views/BoardList.vue'
import StatsScreen from '@/views/StatsScreen.vue'
import EditBoard from '../views/EditBoard.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'newBoard',
      component: newBoard
    },
    {
      path: '/edit/:boardUUID',
      name: 'editBoard',
      props: true,
      component: EditBoard
    },
    {
      path: '/b/:boardUUID',
      name: 'overview',
      props: true,
      component: BoardView
    },
    {
      path: '/boards/',
      name: 'boardOverview',
      props: true,
      component: BoardList
    },
    {
      path: '/b/:boardUUID/team/:teamCode',
      name: 'private-board',
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
      path: '/b/:boardUUID/m/:teamCode',
      name: 'moderator',
      props: true,
      component: ModeratorView
    }
  ]
})

export default router
