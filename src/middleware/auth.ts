import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
export const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authToken = localStorage.getItem('auth-token')
  if (!authToken) {
    next({
      path: '/auth/login',
    })
  } else {
    next()
  }
}
