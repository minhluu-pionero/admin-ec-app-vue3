import './assets/main.css'
import './assets/base.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import router from './router'

const app = createApp(App)
const queryClient = new QueryClient()
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
