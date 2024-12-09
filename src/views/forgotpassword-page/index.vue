<template>
    <v-container fluid class="d-flex justify-center items-center min-h-screen bg-gray-200">
      <v-card class="pa-8 bg-white shadow-md rounded-lg max-w-xl w-full">
        <h2 class="text-center text-2xl font-semibold mb-6">Login</h2>
        
        <v-form @submit.prevent="handleSubmit" class="w-full">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            outlined
            dense
            :error-messages="emailError ? [emailError] : []"
            placeholder="Enter your email"
          />
  
          <v-btn
            type="submit"
            class="w-full rounded-md hover:opacity-80 text-white custom-btn"
          >
            Send password
          </v-btn>
  
          <div class="text-center mt-4">
            <RouterLink to="/login" class="text-sm text-blue-500 hover:underline">
              Click here if you remembered your account!
            </RouterLink>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts" setup>
    import {ForgotpasswordController} from './controller'
    const { email, emailError, handleSubmit} = ForgotpasswordController();
  </script>
  
  <style scoped>
    .v-btn--variant-elevated, .v-btn--variant-flat {
      background-color: #4CAF50;
      color: white;
    }
  </style>
  