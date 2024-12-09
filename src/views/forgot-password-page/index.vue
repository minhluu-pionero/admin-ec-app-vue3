<template>
  <AuthLayout>
    <h2 class="text-center text-2xl font-semibold mb-6">Forgot Password</h2>
    <ForgetPasswordForm/>

  </AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from '@/layouts/AuthLayout.vue'; 
import ForgetPasswordForm from './components/ForgetPasswordForm.vue';
</script>
<style scoped>
</style>
  