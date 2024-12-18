import type { NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

export default async function auth({ next }: { next: NavigationGuardNext }) {
  const authStore = useAuthStore()

  if (!authStore.isLoggedIn) {
    return next({ name: 'login' })
  }
  const isValid = await authStore.validateToken()

  if (!isValid) {
    return next({ name: 'login' })
  }
  return next()
}
