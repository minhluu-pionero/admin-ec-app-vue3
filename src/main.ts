import './assets/main.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import router from './router'
import App from './App.vue'

const app = createApp(App)
const queryClient = new QueryClient()
const vuetify = createVuetify({
    components,
    directives
  })
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
