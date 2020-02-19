import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MemberBoard from '../views/membership/MemberBoard.vue'
import MemberAuth from '../views/membership/MemberAuth.vue'
import Payment from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/memberboard',
        name: 'memberboard',
        component: MemberBoard.vue
    },
    {
        path: '/signin',
        name: 'signin',
        component: MemberAuth.vue
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/membership/MemberAuth.vue')
    },
    {
        path: '/shopping-manage-board',
        name: 'manage-board',
        component: () =>
            import ('../views/manage/ManageShoppingBoard.vue')
    },
    {
        path: '/edit-deliver-address',
        name: 'edit-homeaddress',
        component: () =>
            import ('../views/manage/EditDeliveryAddress.vue')
    },
    {
        path: '/payment',
        name: 'payment',
        component: Payment.vue
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/product',
        name: 'product',
        component: ProductView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router