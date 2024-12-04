// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { queryClient } from './plugins/vue-query';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { configure } from 'vee-validate';
import App from './App.vue';
import router from './router';
const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(vuetify);
app.mount('#app');
