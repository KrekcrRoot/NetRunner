import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {createPinia} from "pinia";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import 'vue3-toastify/dist/index.css'


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import './css/link.scss'


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
