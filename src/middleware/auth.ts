import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authToken = localStorage.getItem('auth-token')
  const middleware = (to.meta as { middleware?: string }).middleware

  if (middleware && middleware.includes('auth')) {
    if (!authToken) {
      next({ path: '/auth/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}
