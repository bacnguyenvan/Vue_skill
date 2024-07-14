import { createRouter, createWebHistory } from 'vue-router'

import ShoppingCart from '@/components/ShoppingCart.vue'
import HomePage from '@/components/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/cart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
