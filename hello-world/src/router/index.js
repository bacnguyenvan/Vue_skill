import { createRouter, createWebHistory } from 'vue-router'

import ShoppingCart from '@/components/ShoppingCart.vue'
import HomePage from '@/components/HomePage.vue'
import TodoApp from '@/components/TodoApp/TodoApp.vue'
import Lifecycle from '@/components/LifecyclePage.vue'
import EventPage from '@/components/event/EventPage.vue'
import UploadFilePage from '@/components/uploads/UploadFilePage.vue'
import OrderPage from '@/components/order/OrderPage.vue'
import UploadChunkFilePage from '@/components/uploads/UploadChunkFilePage.vue'
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/order',
    component: OrderPage
  },
  {
    path: '/cart',
    component: ShoppingCart
  },
  {
    path: '/todo-app',
    component: TodoApp
  },
  {
    path: '/lifecycle',
    component: Lifecycle
  },
  {
    path: '/event',
    component: EventPage
  },
  {
    path: '/upload',
    component: UploadFilePage
  },
  {
    path: '/upload-chunk',
    component: UploadChunkFilePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
