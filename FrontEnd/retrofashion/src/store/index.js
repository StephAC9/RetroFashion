/* import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
}) */
import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
import men_product from './modules/men_product'
import women_product from './modules/women_product'
/*import children_product from './modules/children_product'
import accessories from './modules/accessories'
import member from './modules/member' */
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(router)


export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    modules: {
        men_product,
        women_product,
        /* children_product,
        accessories,
        member */
    },
    router
})


//cartItem and favorites should be loaded from cookies for visitors.