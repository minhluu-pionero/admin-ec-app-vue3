import { defineStore } from 'pinia'

import type { AuthStateType } from '@/types/auth.type'

export const useAuthStore = defineStore('auth', {
  state: (): AuthStateType => ({
    // token: 'hardcoded-token',
    // user: { email: 'user@example.com', name: 'Hardcoded User' },
    token: null,
    user: undefined,
    tokenExpiry: null,
    isTokenExpired: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token && !!state.user,
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
