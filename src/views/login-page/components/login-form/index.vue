<template>
  <v-form @submit.prevent="" class="w-full">
    <v-text-field label="Email" type="email" outlined dense placeholder="Enter your email" />

    <v-text-field
      label="Password"
      type="password"
      outlined
      dense
      placeholder="Enter your password"
    />

    <v-btn type="submit" class="w-full rounded-md hover:opacity-80 text-white custom-btn">
      Login
    </v-btn>

    <div class="text-center mt-4">
      <RouterLink :to="{ name: ROUTES.forgotPassword.name }" class="text-sm text-blue-500 hover:underline">
        Click here if you forgot your password!
      </RouterLink>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/utils/constants'
</script>

<style scoped>
.v-btn--variant-elevated,
.v-btn--variant-flat {
  background-color: #4caf50;
  color: white;
}
</style>
