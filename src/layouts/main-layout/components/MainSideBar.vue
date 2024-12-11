<template>
  <v-navigation-drawer permanent class="bg-black text-green-500">
    <router-link :to="{ name: ROUTES.mainHome.name }" class="p-4 text-center block no-underline">
      <div>
        <img class="w-12 mx-auto" src="@/assets/logo.svg" alt="" />
        <h2 class="text-lg font-bold text-green-500">Vue App</h2>
      </div>
    </router-link>
    <v-list>
      <v-list-item
        :to="{ name: ROUTES.mainSettings.name }"
        class="hover:bg-gray-700 text-center"
        router
      >
        <v-list-item-title class="text-green-500">Settings</v-list-item-title>
      </v-list-item>
      <v-list-item
        :to="{ name: ROUTES.mainAbouts.name }"
        class="hover:bg-gray-700 text-center"
        router
      >
        <v-list-item-title class="text-green-500">Abouts</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/utils/constants'
</script>
