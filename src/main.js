import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from "../src/router/router";

// Vuetify
import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
