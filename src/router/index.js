
import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode:'hash',
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
    }, {
      path: '/team/',
      name: 'overview',
      component: BoardView,
    }
  ]
})

export default router
