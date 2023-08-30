import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            component: Home
        },
        {
            path: '/courses',
            component: () => import('../views/Courses.vue')
        },
        {
            path: '/schedule',
            component: () => import('../views/Schedule.vue')
        },
        {
            path: '/materials',
            component: () => import('../views/Materials.vue')
        },
        {
            path: '/certificates',
            component: () => import('../views/Certificates.vue')
        },
        {
            path: '/messages',
            component: () => import('../views/Messages.vue')
        },
        {
            path: '/setting',
            component: () => import('../views/Setting.vue')
        }
    ]
})

export default router