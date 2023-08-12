import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {createPinia} from "pinia";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import './css/link.scss'


createApp(App).use(router).use(pinia).mount('#app')
