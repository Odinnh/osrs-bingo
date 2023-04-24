
import { createRouter, createWebHashHistory } from 'vue-router'
import BoardView from '@/views/BoardView.vue'
import BuildABoard from '@/views/BuildABoard.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode:'hash',
  routes: [
    {

      path: '/',
      name: 'board-view',
      component: BuildABoard
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
