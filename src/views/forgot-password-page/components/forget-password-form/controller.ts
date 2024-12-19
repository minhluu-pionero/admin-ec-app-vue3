import { ref } from 'vue'

export const useForgetPasswordController = () => {
  const email = ref('')
  const emailError = ref('')

  const validateInputs = (): boolean => {
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

    return isValid
  }

  const handleSubmit = async (): Promise<void> => {
    if (!validateInputs()) {
      return
    }
  }

  return {
    email,
    emailError,
    handleSubmit,
  }
}
