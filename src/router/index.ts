import { createRouter, createWebHashHistory } from 'vue-router'
// views
import home from '@/views/home.vapor.vue'
import newBoard from '@/views/newBoard.vapor.vue'
import loginView from '@/views/loginView.vapor.vue'
import editBoard from '@/views/editBoard.vapor.vue'
import colorPallete from '@/views/colorPallete.vapor.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/new',
      name: 'createNewBingo',
      component: newBoard
    },
    {
      path: '/login',
      name: 'loginScreen',
      component: loginView
    },
    {
      path: '/edit/:boardUUID',
      name: 'editBingoBoard',
      component: editBoard
    },
    {
      path: '/color/',
      name: 'color',
      component: colorPallete
    },
    {
      path: '/',
      name: 'Home',
      component: home
    }
  ]
})

export default router
