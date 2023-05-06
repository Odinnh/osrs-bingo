import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import HomeView from '@/views/HomeView.vue'
import BoardList from '@/views/BoardList.vue'
import StatsScreen from '@/views/StatsScreen.vue'
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
      path: '/b/:boardUUID',
      name: 'overview',
      param: true,
      component: BoardView
    },
    {
      path: '/boards/',
      name: 'boardOverview',
      param: true,
      component: BoardList
    },
    {
      path: '/b/:boardUUID/team/:teamCode',
      name: 'private-board',
      param: true,
      component: BoardView
    },
    {
      path: '/b/:boardUUID/stats/',
      name: 'stats-graph',
      param: true,
      component: StatsScreen
    },
    {
      path: '/b/:boardUUID/m/:teamCode',
      name: 'moderator',
      param: true,
      component: ModeratorView
    }
  ]
})

export default router
