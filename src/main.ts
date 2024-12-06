import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import router from './router'
import App from './App.vue'

const app = createApp(App)
const queryClient = new QueryClient()
const vuetify = createVuetify()
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
