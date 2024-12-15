import { ROUTES } from '@/utils/constants'
import auth from '@/middleware/auth'

export default [
  {
    path: '/',
    component: () => import('@/layouts/main-layout/MainLayout.vue'),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: ROUTES.home.path,
        name: ROUTES.home.name,
        component: () => import('@/views/home-page/index.vue'),
      },
      {
        path: ROUTES.abouts.path,
        name: ROUTES.abouts.name,
        component: () => import('@/views/abouts-page/index.vue'),
      },
      {
        path: ROUTES.settings.path,
        name: ROUTES.settings.name,
        component: () => import('@/views/settings-page/index.vue'),
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
]
