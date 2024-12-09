import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES} from '@/utils/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: ROUTES.login.path,
      name: ROUTES.login.name,
      component: ()=> import('@/views/login-page/index.vue'),
    },
    {
      path: ROUTES.forgot_password.path,
      name: ROUTES.forgot_password.name,
      component: () => import('@/views/forgot-password-page/index.vue'),
    },
  ],
})

export default router
