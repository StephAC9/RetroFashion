import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
import men from './modules/men'
import women from './modules/women'
import layouts from './modules/layouts'
import children from './modules/children'
import accessories from './modules/accessories'
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
        women,
        layouts,
        children,
        accessories,
        categories
    },
    router
})


//cartItem and favorites should be loaded from cookies for visitors.