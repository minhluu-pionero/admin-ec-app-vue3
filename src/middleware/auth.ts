import type { NavigationGuardNext } from 'vue-router'

import { useAuthStore } from '@/stores/authStore'
import { ROUTES } from '@/utils/constants'

export default async function auth({ next }: { next: NavigationGuardNext }) {
  const authStore = useAuthStore()

  if (!authStore.isLoggedIn) {
    return next({ name: ROUTES.login.name })
  }
  return next()
}
