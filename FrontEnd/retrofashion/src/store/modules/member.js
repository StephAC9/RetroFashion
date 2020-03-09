import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'
export default {
    namespaced: true,
    plugins: [
        createPersistedState()
    ],
    state,
    getters,
    actions,
    mutations
}