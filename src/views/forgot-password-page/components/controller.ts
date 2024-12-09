import { ref } from 'vue'
export const ForgotpasswordController = () =>{
    const email = ref('')
    const emailError = ref('')
  
    const handleSubmit = () => {
      emailError.value = ''
  
      let valid = true
  
      if (!email.value) {
        emailError.value = 'Email is required'
        valid = false
      }
  
      if (valid) {
        console.log('Form Submitted:', { email: email.value})
      }
    }
    return {
        email,
        emailError,
        handleSubmit,
    }
}
  
   