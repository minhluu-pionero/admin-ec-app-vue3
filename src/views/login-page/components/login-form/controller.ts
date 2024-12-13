import { ref } from 'vue'

import router from '@/router'

export const useLoginController = () => {
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const handleSubmit = () => {
    const emialFake = 'long@gmail.com'
    const passwordFake = '123456'

    if (email.value === emialFake && password.value === passwordFake) {
      localStorage.setItem('auth-token', 'this-is-token')
      router.push({ name: 'home' })
      console.log('Form Submitted:', { email: email.value, password: password.value })
    } else {
      error.value = 'Invalid username or password'
    }
  }
  return {
    email,
    password,
    handleSubmit,
  }
}
