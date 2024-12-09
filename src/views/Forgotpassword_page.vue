<template>
  <div class="login-container flex items-center justify-center min-h-screen bg-gray-200 w-full">
    <div class="login-page p-8 bg-white shadow-md rounded-lg w-full max-w-xl">
      <h2 class="text-center text-2xl font-semibold mb-6">Forgot password</h2>
      <form @submit.prevent="handleSubmit" class="w-full">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Enter your email"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>
        <button type="submit" class="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Send password
        </button>
        <div class="text-center mt-4">
          <RouterLink to="/login" class="text-sm text-blue-500 hover:underline">
            Click here if you rememerber your account!
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>


  
  <script lang="ts">
  import { ref } from 'vue'
  
  const email = ref('')
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
    
    if (valid) {
      console.log('Form Submitted:', { email: email.value})
    }
  }
  </script>
  
  <style scoped>
  .custom-link:hover {
    background-color: transparent !important;
  }
  </style>
  
  