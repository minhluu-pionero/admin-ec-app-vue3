<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
authStore.validateToken()
</script>
<template>
  <RouterView />
</template>
