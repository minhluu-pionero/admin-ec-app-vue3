import { createRouter, createWebHistory } from 'vue-router'

import { requireAuth } from '@/middleware/auth'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach(requireAuth)

export default router
