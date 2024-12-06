<template>
    <div class="login-page max-w-sm mx-auto p-8 bg-gray-100 rounded-lg">
      <h2 class="text-center text-2xl font-semibold mb-6">Login</h2>
      <form @submit.prevent="handleSubmit">
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
  
        <div class="mb-6">
          <label for="password" class="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Enter your password"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span> 
        </div>
  
        <button type="submit" class="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Login
        </button> 
        <div>
            <RouterLink to="/forgot_password">Click here if you forgotted your password!</RouterLink>
            <!-- <a href="/forgot_password" class="w-full text-sm text-primary hover:bg-none">
                Click here if you forgotted your password!
            </a> -->
        </div>
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
    
    if (!password.value) {
      passwordError.value = 'Password is required'
      valid = false
    }
    if (valid) {
      console.log('Form Submitted:', { email: email.value, password: password.value })
    }
  }
  </script>
  
  <style scoped>
  </style>
  