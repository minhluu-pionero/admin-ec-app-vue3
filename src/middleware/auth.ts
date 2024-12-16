import type { NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

export default async function auth({
  next,
}: {
  next: NavigationGuardNext
}) {
  const authStore = useAuthStore()

  console.log('Running middleware: auth')
  console.log('authToken:', authStore.token)

  if (!authStore.isLoggedIn) {
    console.log('No valid token found, redirecting to login page')
    return next({ path: '/auth/login' })
  }

  const isValid = await authStore.validateToken()

  if (!isValid) {
    console.log('Invalid or expired token, redirecting to login page')
    return next({ path: '/auth/login' })
  }

  console.log('Valid token, proceeding to route')
  return next()
}
