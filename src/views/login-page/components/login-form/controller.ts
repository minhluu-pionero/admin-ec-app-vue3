import { ref } from 'vue'

import router from '@/router'
import { useAuthStore } from '@/stores/auth.store'
import { ROUTES } from '@/utils/constants'

export const useLoginFormController = () => {
  const authStore = useAuthStore()
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const emailError = ref('')
  const passwordError = ref('')

  const handleSubmit = async () => {
    const emailFake = 'long@gmail.com'
    const passwordFake = '123456'

    if (email.value === emailFake && password.value === passwordFake) {
      authStore.login()
      router.push({ name: ROUTES.home.name })
    } else {
      error.value = 'Invalid username or password'
    }
  }

  return {
    email,
    password,
    error,
    emailError,
    passwordError,
    handleSubmit,
  }
}
