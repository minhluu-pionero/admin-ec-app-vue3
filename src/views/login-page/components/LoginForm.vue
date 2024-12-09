<template>
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

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        outlined
        dense
        :error-messages="passwordError ? [passwordError] : []"
        placeholder="Enter your password"
      />

      <v-btn
        type="submit"
        class="w-full rounded-md hover:opacity-80 text-white custom-btn"
      >
        Login
      </v-btn>

      <div class="text-center mt-4">
        <RouterLink to="/forgot_password" class="text-sm text-blue-500 hover:underline">
          Click here if you forgot your password!
        </RouterLink>
      </div>
    </v-form>
</template>

<script lang="ts" setup>
import { LoginController } from './controller';

const { email, password, emailError, passwordError, handleSubmit } = LoginController();
</script>

<style scoped>
.v-btn--variant-elevated, .v-btn--variant-flat {
    background-color: #4CAF50;
    color: white;
}
</style>