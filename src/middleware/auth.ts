import type { NavigationGuardNext } from 'vue-router'
import { ROUTES } from '@/utils/constants'

export default async function auth({
  next,
  authStore,
}: {
  next: NavigationGuardNext
  authStore: any
}) {
  if (!authStore.isLoggedIn) {
    return next({ name: ROUTES.login.name })
  }
  return next()
}
