<template>
    <div class="forgot-password-page max-w-sm mx-auto p-8 bg-gray-100 rounded-lg">
      <h2 class="text-center text-2xl font-semibold mb-6">Forgot Password</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            v-model="email" 
            id="email"
            placeholder="Enter your email get password"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>  
        </div>
  
        <button type="submit" class="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Send password
        </button> 
        <a href="/login" class="w-full rounded px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
            Click here if you remembered password!
        </a>

      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
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
    
    if (valid) {
      console.log('Form Submitted:', { email: email.value})
    }
  }
  </script>
  
  <style scoped>
  </style>
  