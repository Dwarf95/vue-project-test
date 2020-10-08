import { createWebHistory, createRouter } from 'vue-router';
import  Home  from '../pages/Home/Home.vue';
import SignUp from '../pages/SignUp/SignUp.vue';
import SignIn from '../pages/SignIn/SignIn.vue';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword.vue';
import ResetPassword from '../pages/ResetPassword/ResetPassword.vue';


const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/sign-up',
            component: SignUp
        },
        {
            path: '/sign-in',
            component: SignIn
        },
        {
            path: '/forgot-password',
            component: ForgotPassword
        },
        {
            path: '/reset-password',
            component: ResetPassword
        }
    ]
})

export default router;