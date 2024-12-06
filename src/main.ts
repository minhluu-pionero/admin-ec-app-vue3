import './assets/main.css'
import './assets/output.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import router from './router'

const app = createApp(App)
const queryClient = new QueryClient()
const vuetify = createVuetify()
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
