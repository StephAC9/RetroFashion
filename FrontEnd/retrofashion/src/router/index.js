import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import EditAccount from '../views/manage/EditAccount'
import Account from '../views/membership/Account'
import MemberAuth from '../views/membership/MemberAuth'
import Cart from '../views/orders/Cart'
import ProductView from '../views/products/ProductView'
import Payment1 from '../views/orders/Payment1'
import Payment2 from '../views/orders/Payment2'
import ChildrenProducts from '../views/products/categories/ChildrenProducts'
import MenProducts from '../views/products/categories/MenProducts'
import DamProducts from '../views/products/categories/DamProducts'
import Sales from '../views/products/categories/Sales'
import BestSellers from '../views/products/categories/BestSellers'
import Accessories from '../views/products/categories/subcategories/Accessories'
import Clothes from '../views/products/categories/subcategories/Clothes'
import Shoes from '../views/products/categories/subcategories/Shoes'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ourCompany/About')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/ourCompany/Contact')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/ourCompany/News')
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        children: [{
            path: '/Edit',
            name: '/edit',
            component: EditAccount
        }]
    },
    {
        path: '/signin',
        name: 'signin',
        component: MemberAuth
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/membership/MemberAuth')
    },
    {
        path: '/payment-step-1',
        name: 'payment1',
        component: Payment1
    },
    {
        path: '/payment-step-2',
        name: 'payment2',
        component: Payment2
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
    },
    {
        path: '/clothes',
        name: 'clothes',
        component: Clothes
    },
    {
        path: '/shoes',
        name: 'shoes',
        component: Shoes
    },
    {
        path: '/accessories',
        name: 'accessories',
        component: Accessories
    },
    {
        path: '/women',
        name: 'women',
        component: DamProducts
    },
    {
        path: '/men',
        name: 'men',
        component: MenProducts
    },
    {
        path: '/children',
        name: 'children',
        component: ChildrenProducts
    },
    {
        path: '/best sellers',
        name: 'bestsellers',
        component: BestSellers
    },
    {
        path: '/sales',
        name: 'sales',
        component: Sales
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router