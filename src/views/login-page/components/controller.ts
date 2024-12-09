import { ref } from 'vue'

export const LoginController = () => {
    const email = ref('')
    const password = ref('')
    const emailError = ref('')
    const passwordError = ref('')

    const handleSubmit = () => {
        emailError.value = ''
        passwordError.value = ''
      
        let valid = true
      
        if (!email.value) {
          emailError.value = 'Email is required'
          valid = false
        }
      
        if (!password.value) {
          passwordError.value = 'Password is required'
          valid = false
        }
      
        if (valid) {
          console.log('Form Submitted:', { email: email.value, password: password.value })
        }
    }
    return {
        email,
        password,
        emailError,
        passwordError,
        handleSubmit,
    }
}

