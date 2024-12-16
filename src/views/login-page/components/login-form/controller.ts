import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'

export const useLoginFormController = () => {
  const authStore = useAuthStore()
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const emailError = ref('')
  const passwordError = ref('')

  const validateInputs = () => {
    let isValid = true

    if (!email.value) {
      emailError.value = 'Email is required'
      isValid = false
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.value = 'Invalid email format'
      isValid = false
    } else {
      emailError.value = ''
    }

    if (!password.value) {
      passwordError.value = 'Password is required'
      isValid = false
    } else if (password.value.length < 6) {
      passwordError.value = 'Password must be at least 6 characters'
      isValid = false
    } else {
      passwordError.value = ''
    }
    return isValid
  }

  const handleSubmit = async () => {
    if (!validateInputs()) return

    const emailFake = 'long@gmail.com'
    const passwordFake = '123456'
    const fakeToken = 'this-is-token'
    const fakeUser = { email: emailFake, name: 'Long Tran' }

    if (email.value === emailFake && password.value === passwordFake) {
      authStore.login(fakeToken, fakeUser)
      router.push({ name: 'home' })
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
