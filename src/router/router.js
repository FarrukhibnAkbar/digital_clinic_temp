import { createRouter, createWebHistory} from 'vue-router'

import main from "@/components/main.vue";
import Users from '../views/UsersComponent.vue';
import Patients from '../views/PatientsComponent.vue';
import loginPage from "@/components/LoginPage.vue";
import dashboardComponent from "@/views/DashboardComponent.vue";


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: loginPage,
        meta: {layout: 'authPage', requiresAuth: false}
    },
    {
        path: '/main',
        name: 'Main',
        component: main,
        meta: {layout: 'mainPage', requiresAuth: false}
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboardComponent,
        meta: {layout: 'mainPage', requiresAuth: false}
    },
    {
        path: '/patients',
        name: 'Patients',
        component: Patients,
        meta: {layout: 'mainPage', requiresAuth: false}
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {layout: 'mainPage'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach(async (to, from, next) => {
//     if(localStorage.getItem('auth' == 'true')){
//     // if (to.meta.requiresAuth) {
//         console.log('localStorage is done ')
//         // if(localStorage.getItem('auth' == true)){
//         //     console.log('localStorage is done ')
//     //         next();
//     //     }else{
//     //         next('/login');
//     //     }
//     //     next('/main')
//             return { name: 'Dashboard' }
//     }else{
//         console.log('localStorage is denied ')
//         // next('/login');
//         return { name: 'Login' }
//     }
// })

export default router