import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue'
import AddRestro from './components/AddRestro.vue'
import Update from './components/Update.vue'
import Testing from './components/Testing.vue'
import About from './components/About.vue'

import { createRouter,createWebHistory } from 'vue-router';

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },

    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
    {
        name:'AddRestro',
        component:AddRestro,
        path:'/add'
    },
    {
        name:'Testing',
        component:Testing,
        path:'/testing'
    },
    {
        name:'About',
        component:About,
        path:'/about'
    }

];
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router