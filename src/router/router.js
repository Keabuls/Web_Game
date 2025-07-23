import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Game from '@/views/home/mainGame.vue'
import Admin from '@/views/admin/Admin.vue'
import { ROUTE_NAMES } from '@/constants/routeNames.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: ROUTE_NAMES.HOME,
    },
    {
      path: '/game',
      component: Game,
      name: ROUTE_NAMES.GAME,
    },
    {
      path: '/admin',
      component: Admin,
      name: ROUTE_NAMES.ADMIN,
    },

  ],
})

export default router
