import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/utils/constants'
import MainLayout from '@/layouts/main-layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: ROUTES.mainHome.path,
          name: ROUTES.mainHome.name,
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: ROUTES.mainAbouts.path,
          name: ROUTES.mainAbouts.name,
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: ROUTES.mainSettings.path,
          name: ROUTES.mainSettings.name,
          component: () => import('../views/SettingsView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: ROUTES.login.path,
          name: ROUTES.login.name,
          component: () => import('@/views/login-page/index.vue'),
        },
        {
          path: ROUTES.forgotPassword.path,
          name: ROUTES.forgotPassword.name,
          component: () => import('@/views/forgot-password-page/index.vue'),
        },
      ],
    },
  ],
})

export default router
