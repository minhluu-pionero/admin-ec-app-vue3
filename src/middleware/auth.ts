import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authToken = localStorage.getItem('auth-token')
  const middleware = to.meta.middleware as string[]
  if (middleware && middleware.includes('auth')) {
    if (!authToken) {
      return next({ path: '/auth/login' })
    } else {
      return next()
    }
  }

  next()
}
