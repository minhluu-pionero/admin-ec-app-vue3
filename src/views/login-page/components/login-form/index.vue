<template>
  <v-form @submit.prevent="handleSubmit" class="w-full">
    <v-text-field
      label="Email"
      v-model="email"
      type="email"
      outlined
      dense
      placeholder="Enter your email"
    />

    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      outlined
      dense
      placeholder="Enter your password"
    />

    <v-btn type="submit" class="w-full rounded-md hover:opacity-80 text-white custom-btn">
      Login
    </v-btn>

    <div class="text-center mt-4">
      <RouterLink
        :to="{ name: ROUTES.forgotPassword.name }"
        class="text-sm text-blue-500 hover:underline"
      >
        Click here if you forgot your password!
      </RouterLink>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/utils/constants'
import { LoginController } from './controller'

const { email, password, handleSubmit } = LoginController()
</script>

<style scoped>
.v-btn--variant-elevated,
.v-btn--variant-flat {
  background-color: #4caf50;
  color: white;
}
</style>
