import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ROUTES} from '@/utils/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component: ()=>import('@/layouts/AuthLayout.vue'),
      children:[
        {
          path: ROUTES.login.path,
          name: ROUTES.login.name,
          component: ()=> import('@/views/login-page/index.vue'),
        },
        {
          path: ROUTES.forgotPassword.path,
          name: ROUTES.forgotPassword.name,
          component: () => import('@/views/forgot-password-page/index.vue'),
        },
      ]
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
