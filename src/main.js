import { createApp} from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask';
import Toast from "@/plugins/toast";

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
    .use(VueTheMask)
    .use(Toast)
    .mount('#app')
