import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    women_products: [],
    women_shoes: [],
    women_clothes: [],
}
const getters = {
    women_products: state => state.women_products,
    women_shoes: state => state.women_products.filter(product => !product.productCategories.includes('Shoes')),
    women_clothes: state => state.women_products.filter(product => !product.productCategories.includes('Clothes')),
}
const actions = {

}
const mutations = {

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