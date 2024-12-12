export const requireAuth = (to, from, next) => {
  const authToken = localStorage.getItem('auth-token')
  if (!authToken) {
    next({
      path: '/auth/login',
    })
  } else {
    next()
  }
}
