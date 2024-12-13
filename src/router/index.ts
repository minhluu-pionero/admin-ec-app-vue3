import { createRouter, createWebHistory } from 'vue-router'

import { ROUTES } from '@/utils/constants'
import { requireAuth } from '@/middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/main-layout/MainLayout.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: ROUTES.home.path,
          name: ROUTES.home.name,
          component: () => import('@/views/home-page/index.vue'),
          meta: {
            title: 'Vite Home',
          },
        },
        {
          path: ROUTES.abouts.path,
          name: ROUTES.abouts.name,
          component: () => import('@/views/abouts-page/index.vue'),
          meta: {
            title: 'Vite Abouts',
          },
        },
        {
          path: ROUTES.settings.path,
          name: ROUTES.settings.name,
          component: () => import('@/views/settings-page/index.vue'),
          meta: {
            title: 'Vite Settings',
          },
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
          meta: {
            title: 'Vite Login',
          },
        },
        {
          path: ROUTES.forgotPassword.path,
          name: ROUTES.forgotPassword.name,
          component: () => import('@/views/forgot-password-page/index.vue'),
          meta: {
            title: 'Vite Forget Password',
          },
        },
      ],
    },
  ],
})
router.beforeEach(requireAuth)

export default router
