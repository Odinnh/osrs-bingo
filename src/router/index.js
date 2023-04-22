import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board-view',
      component: BoardView
    },
    {
      path: '/team/:id',
      name: 'private-board',
      param: true,
      component: BoardView
    }
  ]
})

export default router
