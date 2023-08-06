import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import MainPage from "../pages/MainPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        },
    },
    {
        path: '/products',
        name: 'ProductsPage',
        component: ProductsPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router