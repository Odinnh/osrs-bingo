import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
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
    }
  ]
})

export default router
