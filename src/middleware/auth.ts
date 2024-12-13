export const requireAuth = (to: any, from: any, next: any) => {
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
  const title = to.meta.title || 'Vite App'
  document.title = title
}
