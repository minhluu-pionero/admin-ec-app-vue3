import { ref } from 'vue'

export const useForgetPasswordController = () => {
  const email = ref('')
  const emailError = ref('')

  const handleSubmit = async (): Promise<void> => {}

  return {
    email,
    emailError,
    handleSubmit,
  }
}
