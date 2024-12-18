import type { NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { ROUTES } from '@/utils/constants'

export default async function auth({
  next,
  authStore,
}: {
  next: NavigationGuardNext
  authStore: ReturnType<typeof useAuthStore>
}) {
  if (!authStore.isLoggedIn) {
    return next({ name: ROUTES.login.name })
  }
  return next()
}
