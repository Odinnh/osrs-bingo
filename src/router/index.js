import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import HomeView from '@/views/HomeView.vue'
import newBoard from '@/views/newBoard.vue'
import BoardList from '@/views/BoardList.vue'
import StatsScreen from '@/views/StatsScreen.vue'
import EditBoard from '../views/EditBoard.vue'
import loginView from '../views/loginView.vue'
import groupView from '../views/groupView.vue'
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
      path: '/login',
      name: 'loginView',
      component: loginView
    },
    {
      path: '/edit/:boardUUID',
      name: 'editBoard',
      props: true,
      component: EditBoard
    },
    {
      path: '/groups/:boardUUID',
      name: 'groupView',
      props: true,
      component: groupView
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
      path: '/m/:boardUUID',
      name: 'moderator',
      props: true,
      component: ModeratorView
    }
  ]
})

export default router
