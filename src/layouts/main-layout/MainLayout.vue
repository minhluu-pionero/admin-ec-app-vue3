<template>
  <v-app>
    <div class="flex h-screen">
      <div class="w-64 bg-black text-green-500">
        <main-side-bar />
      </div>

      <div class="flex-1 bg-gray-100">
        <main-content />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import MainContent from './components/MainContent.vue'
import MainSideBar from './components/MainSideBar.vue'
</script>

<style scoped></style>
