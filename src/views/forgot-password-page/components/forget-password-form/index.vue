<template>
  <v-form @submit.prevent="handleSubmit" class="w-full">
    <v-text-field
      label="Email"
      v-model="email"
      type="email"
      outlined
      dense
      placeholder="Enter your email"
      :error="!!emailError"
      :hint="emailError"
      persistent-hint
    />

    <v-btn type="submit" class="w-full rounded-md hover:opacity-80 text-white custom-btn">
      Send Password Expand All @@ -13,13 +23,21 @@
    </v-btn>
    <div class="text-center mt-4">
      <RouterLink :to="{ name: ROUTES.login.name }" class="text-sm text-blue-500 hover:underline">
        Click here if you remembered your account!
      </RouterLink>
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/utils/constants'
import { useForgetPasswordController } from './controller'
const { email, handleSubmit, emailError } = useForgetPasswordController()
</script>
<style scoped>
.v-btn--variant-elevated,
.v-btn--variant-flat {
  background-color: #4caf50;
  color: white;
}
::v-deep(.v-text-field .v-input__details) {
  padding-inline: 3px;
  padding-top: 0px;
  align-items: center;
}
</style>
