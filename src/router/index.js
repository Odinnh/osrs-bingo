import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import HomeView from '@/views/HomeView.vue'
import newBoard from '@/views/newBoard.vue'
import BoardList from '@/views/BoardList.vue'
import StatsScreen from '@/views/StatsScreen.vue'
import EditBoard from '../views/EditBoard.vue'
import loginView from '../views/loginView.vue'
import GroupView from '../views/GroupView.vue'
// const prePath = ''
const prePath = '/osrs-bingo'
const router = createRouter({
  history: createWebHistory(),
  // mode: 'hash',
  routes: [
    {
      path: prePath + '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: prePath + '/new',
      name: 'newBoard',
      component: newBoard
    },
    {
      path: prePath + '/login',
      name: 'loginView',
      component: loginView
    },
    {
      path: prePath + '/edit/:boardUUID',
      name: 'editBoard',
      props: true,
      component: EditBoard
    },
    {
      path: prePath + '/groups/:boardUUID',
      name: 'groupView',
      props: true,
      component: GroupView
    },
    {
      path: prePath + '/b/:boardUUID',
      name: 'overview',
      props: true,
      component: BoardView
    },
    {
      path: prePath + '/boards/',
      name: 'boardOverview',
      props: true,
      component: BoardList
    },
    // {
    //   path: prePath + '/b/:boardUUID/team/:teamCode',
    //   name: 'private-board',
    //   props: true,
    //   component: BoardView
    // },
    {
      path: prePath + '/b/:boardUUID/stats/',
      name: 'stats-graph',
      props: true,
      component: StatsScreen
    },
    {
      path: prePath + '/m/:boardUUID',
      name: 'moderator',
      props: true,
      component: ModeratorView
    }
  ]
})

export default router
