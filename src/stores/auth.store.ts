import { defineStore } from 'pinia'

import type { AuthStateType } from '@/types/auth.type'

export const useAuthStore = defineStore('auth', {
  state: (): AuthStateType => ({
    user: { email: 'user@example.com', name: 'Hardcoded User' },
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    login() {},
    validateToken() {
      return true
    },

    refreshToken() {},

    autoExtendToken() {},
  },
})
