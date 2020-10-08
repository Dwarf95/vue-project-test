import { createWebHistory, createRouter } from 'vue-router';
import  Home  from '../pages/Home/Home.vue';
import SignUp from '../pages/SignUp/SignUp.vue';


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
        }
    ]
})

export default router;