import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dasboard from '../views/Dasboard.vue'
import ProductManagementBoard from '../views/ProductManagementBoard.vue'
import MemberManagementBoard from '../views/MemberManagementBoard.vue'
import AdminManagementBoard from '../views/AdminManagementBoard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/dasboard',
        name: 'Dasboard',
        component: Dasboard,
        meta: { requiresAuth: true },
        children: [{
                path: 'manage products',
                name: 'manageProduct',
                component: ProductManagementBoard,
                meta: { requiresAuth: true }
            },
            {
                path: 'manage members',
                name: 'manageMember',
                component: MemberManagementBoard,
                meta: { requiresAuth: true }
            },
            {
                path: 'manage admins',
                name: 'manageAdmin',
                component: AdminManagementBoard,
                meta: { requiresAuth: true }
            },
        ]
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (token) {
            next()
        } else router.replace('/')

    } else next()

    if (to.matched.some(route => !route.meta.requiresAuth) && from.matched.some(route => route.meta.requiresAuth)) {
        router.push('/')
    }
})

export default router