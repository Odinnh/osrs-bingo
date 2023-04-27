import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import ModeratorView from '@/views/ModeratorView.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/b/:boardUUID',
      name: 'overview',
      param: true,
      component: BoardView,
    },
    {
      path: '/b/:boardUUID/team/:teamCode',
      name: 'private-board',
      param: true,
      component: BoardView
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
