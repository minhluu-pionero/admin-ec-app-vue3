import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // token: 'hardcoded-token',
    // user: { email: 'user@example.com', name: 'Hardcoded User' },
    token: null,
    user: null,
    tokenExpiry: null,
    isTokenExpired: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
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
