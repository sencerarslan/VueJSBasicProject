import { createRouter, createWebHistory } from 'vue-router'
import HomeP from '../views/HomeP.vue'
import UserDetail from '../views/UserDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeP
  },
  {
    path: '/user/:id/',
    name: 'UserDetail',
    component: UserDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
