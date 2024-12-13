import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authToken = localStorage.getItem('auth-token')
  if (to.meta.requiresAuth) {
    if (!authToken) {
      next({ path: '/auth/login' })
    } else {
      next()
    }
  } else {
    next()
  }
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Vite App'
  document.title = title
}
