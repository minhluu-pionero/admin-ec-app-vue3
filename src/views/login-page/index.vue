<template>
  <AuthLayout>
    <h2 class="text-center text-2xl font-semibold mb-6">Login</h2>
    <LoginForm />
    
  </AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
import LoginForm from './components/LoginForm.vue'
</script>
  
<style scoped>
</style>
  