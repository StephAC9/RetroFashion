import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
import men from './modules/men'
import cart from './modules/cart'
import women from './modules/women'
import layouts from './modules/layouts'
import product from './modules/product'
import accessories from './modules/accessories'
import favorites from './modules/favorites'
import categories from './modules/categories'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(router)


export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    modules: {
        men,
        cart,
        women,
        layouts,
        product,
        accessories,
        categories,
        favorites
    },
    router
})


//cartItem and favorites should be loaded from cookies for visitors.