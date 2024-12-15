import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

interface RouteMeta {
  middleware?: Array<Function>
}

export default async function auth({
  to,
  from,
  next,
}: {
  to: RouteLocationNormalized & { meta: RouteMeta }
  from: RouteLocationNormalized
  next: NavigationGuardNext
}) {
  const authToken = localStorage.getItem('auth-token')
  console.log('Running middleware: auth')
  console.log('authToken:', authToken)

  if (authToken && authToken === 'this-is-token') {
    console.log('Valid token found, proceeding to next route')
    return next()
  }

  console.log('Redirecting to login page due to missing or invalid token')
  return next({
    path: '/auth/login',
  })
}
