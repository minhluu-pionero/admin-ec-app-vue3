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
          path: ROUTES.home.path,
          name: ROUTES.home.name,
          component: () => import('@/views/main-page/home-page/index.vue'),
        },
        {
          path: ROUTES.abouts.path,
          name: ROUTES.abouts.name,
          component: () => import('@/views/main-page/abouts-page/index.vue'),
        },
        {
          path: ROUTES.settings.path,
          name: ROUTES.settings.name,
          component: () => import('@/views/main-page/settings-page/index.vue'),
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
