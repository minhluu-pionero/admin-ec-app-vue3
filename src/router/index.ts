import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/login-page/index.vue'
import ForgotPasswordPage from '@/views/forgotpassword-page/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: ForgotPasswordPage,
    },
  ],
})

export default router
