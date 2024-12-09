import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'
import Forgot_password from '@/views/Forgot_password.vue'
import Home from '@/components/Home.vue'
import Setting from '@/components/Setting.vue'
import About from '@/components/About.vue'
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken') // Kiểm tra token hoặc trạng thái đăng nhập
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: Forgot_password,
    },
  ],
})

export default router
