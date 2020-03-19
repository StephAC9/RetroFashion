import router from '../../router'
import createPersistedState from 'vuex-persistedstate'


const state = {
    product: null,
    hey: false
}
const getters = {
    product: state => state.product,
}
const actions = {
    setProduct({ commit }, payload) {
        commit('SET_PRODUCT', payload.product)
        router.push({ name: 'product' })
    },
    sendToCart({ commit }, payload) {
        const prod = payload.product
        console.log(prod)


        /* console.log(prod)
        const cookie = localStorage.getItem('cookie')
        if (cookie) {
            const c = localStorage.getItem('cookie')
            console.log(JSON.parse(c))
            const v = typeof(JSON.parse(c))
            console.log(Array.from(v)) */
        //JSON.parse(c).push(prod)
        // localStorage.setItem('cookie', JSON.stringify(JSON.parse(c).push(prod)))
        commit('HEY')
    }
    /* localStorage.setItem('cookie', JSON.stringify(prod))
    console.log(JSON.parse(c))
    const arr = []
    arr.push(JSON.parse(c))
    console.log(Array.from(arr)) */
    /*  */

    /* const toNumericPairs = input => {
        const entries = Object.entries(JSON.parse(y));
        entries.forEach(entry => entry[0] = +entry[0]);
        return entries;
    }
    console.log(toNumericPairs) */


}
const mutations = {
    SET_PRODUCT: (state, payload) => state.product = payload,
    HEY: (state) => state.hey = true
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