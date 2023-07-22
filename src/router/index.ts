import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import MainPage from "../pages/MainPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router