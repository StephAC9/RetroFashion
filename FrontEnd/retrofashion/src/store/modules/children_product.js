/* import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../../router' 


const state = {
    children_products: [],
    children_shoes: [],
    children_clothes: [],
}
const getters = {
    children_products: state => state.children_products,
    children_shoes: state => state.children_products.filter(product => !product.productCategories.includes('Shoes')),
    children_clothes: state => state.children_products.filter(product => !product.productCategories.includes('Clothes')),
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
} */