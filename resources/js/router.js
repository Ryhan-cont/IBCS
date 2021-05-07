/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import('./pages/auth/Login.vue'),
                    meta: {pageTitle: 'login',}
                },
                {
                    path: '/manage-admin',
                    name: 'ManageAdmin',
                    component: () => import('./pages/app/ManageAdmin.vue'),
                    meta: {pageTitle: 'Manage Admin',}
                },
            ]
        },
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [

                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import('./pages/dashboard/Dashboard.vue'),
                    meta: {pageTitle: 'Dashboard',}
                },
                {
                    path: '/manage-bank',
                    name: 'ManageBank',
                    component: () => import('./pages/app/ManageBank.vue'),
                    meta: {pageTitle: 'Manage Bank',}
                },
                {
                    path: '/create-user',
                    name: 'CreateUser',
                    component: () => import('./pages/app/CreateUser.vue'),
                    meta: {pageTitle: 'Create User',}
                },

                {
                    path: '/manage-grade',
                    name: 'ManageGrade',
                    component: () => import('./pages/app/ManageGrade.vue'),
                    meta: {pageTitle: 'Manage Grade',}
                },
            ],
        },

        // Redirect to 404 page, if no match found
        {
            path: '*',
            component: () => import('./pages/errors/Error-404'),
        }
    ],
})


export default router
