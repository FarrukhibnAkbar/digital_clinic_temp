import { createRouter, createWebHistory } from 'vue-router'

import Users from '../views/UsersComponenet.vue'
import Patients from '../views/PatientsComponenet.vue'


const routes = [
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/patients',
        name: 'Patients',
        component: Patients
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})