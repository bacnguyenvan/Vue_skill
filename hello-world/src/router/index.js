import { createRouter, createWebHistory } from 'vue-router'

import ShoppingCart from '@/components/ShoppingCart.vue'
import HomePage from '@/components/HomePage.vue'
import TodoApp from '@/components/TodoApp/TodoApp.vue'
import Lifecycle from '@/components/LifecyclePage.vue'
import EventPage from '@/components/event/EventPage.vue'
import UploadFilePage from '@/components/uploads/UploadFilePage.vue'
import OrderPage from '@/components/order/OrderPage.vue'
import UploadChunkFilePage from '@/components/uploads/UploadChunkFilePage.vue'
import ChatPage from '@/components/chat/ChatPage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
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
    path: '/chat',
    component: ChatPage,
    meta: { requiresAuth: true },
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
  },
  {
    path: '/login',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token');
  const isAuthenticated = token !== null && token !== undefined && token !== ''; 

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // If the user is not authenticated, redirect to login
      next({ path: '/login' });
    } else {
      // Proceed to the route
      next();
    }
  } else {
    // Proceed normally if no authentication is required
    next();
  }
});

export default router
