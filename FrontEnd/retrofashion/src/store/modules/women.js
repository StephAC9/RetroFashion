import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'


const state = {
    products: [],
    shoes: [],
    clothes: [],
}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('Shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('Clothes')),
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
}
const mutations = {
    SET_PRODUCTS: (state, payload) => state.products = payload
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