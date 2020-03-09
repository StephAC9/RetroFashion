import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    men_products: [],
    men_shoes: [],
    men_clothes: [],
}
const getters = {
    men_products: state => state.men_products,
    men_shoes: state => state.men_products.filter(product => !product.productCategories.includes('Shoes')),
    men_clothes: state => state.men_products.filter(product => !product.productCategories.includes('Clothes')),
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