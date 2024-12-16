import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth-token') || null,
    user: null as object | null, 
    tokenExpiry: localStorage.getItem('auth-token-expiry') || null,
    isTokenExpired: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token && new Date().getTime() < Number(state.tokenExpiry),
  },

  actions: {
    login(token: string, user: object) {
      const expiryTime = new Date().getTime() + 10 * 60 * 1000
      this.token = token
      this.user = user
      this.tokenExpiry = expiryTime.toString() 
      this.isTokenExpired = false

      localStorage.setItem('auth-token', token)
      localStorage.setItem('auth-token-expiry', this.tokenExpiry)

      setTimeout(() => {
        this.isTokenExpired = true
      }, 10 * 60 * 1000) 
    },

    logout() {
      this.token = null
      this.user = null
      this.tokenExpiry = null
      this.isTokenExpired = false
      localStorage.removeItem('auth-token')
      localStorage.removeItem('auth-token-expiry')
      router.push({ name: 'login' }) 
    },

    async validateToken() {
      const currentTime = new Date().getTime()
      if (this.token && this.tokenExpiry && currentTime < Number(this.tokenExpiry)) {
        return true
      } else {
        this.isTokenExpired = true
        return false
      }
    },

    refreshToken() {
      const newExpiryTime = new Date().getTime() + 10 * 60 * 1000
      this.tokenExpiry = newExpiryTime.toString() 
      localStorage.setItem('auth-token-expiry', this.tokenExpiry)
      this.isTokenExpired = false

      console.log("Token has been refreshed!")
    },

    autoExtendToken() {
      const currentTime = new Date().getTime()
      if (this.token && this.tokenExpiry && currentTime + 60 * 1000 >= Number(this.tokenExpiry)) {
        this.refreshToken()
      }
    },
  },
})
