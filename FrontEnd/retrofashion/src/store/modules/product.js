import router from '../../router'
import createPersistedState from 'vuex-persistedstate'


const state = {
    product: null,
}
const getters = {
    product: state => state.product,
}
const actions = {
    setProduct({ commit }, payload) {
        commit('SET_PRODUCT', payload.product)
        router.push({ name: 'product' })
    },

}
const mutations = {
    SET_PRODUCT: (state, payload) => state.product = payload,
}


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