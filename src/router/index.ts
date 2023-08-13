import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import MainPage from "../pages/MainPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import SignPage from "../pages/SignPage.vue";
import AdminPanelAccessPage from "../pages/admin/AdminPanelAccessPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import CoursesPage from "../pages/user/CoursesPage.vue";
import ArticlesPage from "../pages/user/CoursePage.vue";
import ArticlePage from "../pages/user/ArticlePage.vue";
import AdminCoursesPage from "../pages/admin/AdminCoursesPage.vue";
import AdminAddCoursePage from "../pages/admin/AdminAddCoursePage.vue";
import AdminArticlesPage from "../pages/admin/AdminArticlesPage.vue";
import AuthMiddleware from "../AuthMiddleware.vue";
import AdminOfflinePage from "../pages/admin/AdminOfflinePage.vue";
import AdminOfflineArticleAddPage from "../pages/admin/AdminOfflineArticleAddPage.vue";

const routes: RouteRecordRaw[] = [

    /**
     * Little middleware
     */
    {
        path: '/auth',
        name: 'AuthMiddleware',
        component: AuthMiddleware,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: NotFoundPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        },
    },

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
    {
        path: '/sign',
        name: 'SignPage',
        component: SignPage,
        meta: {
            auth: false,
            guestOnly: false,
            admin: false,
        },
    },

    /*
    * User Pages
    * */
    {
        path: '/courses',
        name: 'CoursesPage',
        component: CoursesPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: false,
        },
    },
    {
        path: '/course',
        name: 'CoursePage',
        component: ArticlesPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: false,
        },
    },
    {
        path: '/article',
        name: 'ArticlePage',
        component: ArticlePage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: false,
        },
    },


    /*
    * Admin Pages
    * */
    {
        path: '/admin/panelAccess',
        name: 'Admin.PanelAccessPage',
        component: AdminPanelAccessPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },
    {
        path: '/admin/courses',
        name: 'Admin.CoursesPage',
        component: AdminCoursesPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },
    {
        path: '/admin/courses/add',
        name: 'Admin.AddCoursesPage',
        component: AdminAddCoursePage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },
    {
        path: '/admin/articles',
        name: 'Admin.ArticlesPage',
        component: AdminArticlesPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },

    /*
    * Offline Admin Pages
    * */
    {
        path: '/admin/offline',
        name: 'Admin.OfflinePage',
        component: AdminOfflinePage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },
    {
        path: '/admin/articles/add',
        name: 'Admin.OfflineArticleAddPage',
        component: AdminOfflineArticleAddPage,
        meta: {
            auth: true,
            guestOnly: false,
            admin: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router