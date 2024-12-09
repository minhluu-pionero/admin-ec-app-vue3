<template>
  <v-app>
    <v-row class="pa-0 no-gutters">
      <v-col cols="12" class="bg-green-600 h-12 fixed top-0 left-0 w-full z-10"></v-col>
    </v-row>

    <!-- Nội dung chính -->
    <v-main class="pt-12">
      <v-container class="flex justify-center items-center min-h-screen">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-8 rounded-lg shadow-md w-full">
            <slot />
          </v-card>
        </v-col>
      </v-container>
    </v-main>

    <v-row class="pa-0 no-gutters">
      <v-col cols="12" class="bg-green-600 h-12 fixed bottom-0 left-0 w-full z-10"></v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>

