import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    products: [],
    shoes: [],
    clothes: [],
    filteredProducts: [],

}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('Shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('Clothes')),
    filteredProducts: state => state.filteredProducts,

}
const actions = {
    async fetchWomenProducts({ commit }) {
        try {
            const womenProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                /* headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }, */
                data: {
                    query: `query getWomen_products{
                          getWomen_products{
                           id
                           productImages
                           productCategories
                           productName
                           productType
                           productDescription
                           productColor
                           productSize
                           productSalesPrice
                           productPrice
                          }             
                      }`
                },

            })
            const womenProductList = womenProducts.data.data.getWomen_products
            console.log(womenProductList)
            commit('SET_PRODUCTS', womenProductList)
        } catch (err) {
            console.log(err)
        }
    },
    async filterProducts({ commit }, payload) {
        console.log(payload)
        try {
            const categoryProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                data: {
                    query: `query productsFilter($groupTarget: String!,$categories: [String]!){
                        productsFilter(groupTarget:$groupTarget,categories:$categories){
                            id
                            productName
                            productImages
                            productTargetedGroup
                            productType
                            productCategories
                            productDescription
                            productColor
                            productSize
                            productPrice
                            productEntryDate
                        }             
                    }`,
                    variables: {
                        groupTarget: 'Women',
                        categories: payload.selected,
                    }
                },

            })
            const categoryProductList = categoryProducts.data.data.productsFilter
            console.log(categoryProductList)
            commit('RESET_FILTERED_PRODUCTS', null)
            const selected = payload.selected
            console.log(selected.length)
            let isMulti = selected.length > 1
            console.log(isMulti)
            if (isMulti == false) {
                commit('SET_FILTERED_PRODUCTS', categoryProductList)
                router.push({ name: 'Women_' + payload.selected[0] })
            } else if (isMulti == true) {
                commit('SET_FILTERED_PRODUCTS', categoryProductList)
                router.push('/women/multi categories')
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const mutations = {
    SET_PRODUCTS: (state, payload) => state.products = payload,
    RESET_FILTERED_PRODUCTS: (state, payload) => state.filteredProducts = payload,
    SET_FILTERED_PRODUCTS: (state, payload) => state.filteredProducts = payload,
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