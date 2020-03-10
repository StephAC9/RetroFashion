import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
//import router from '../../router'


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
            commit('SET_WOMEN_PRODUCTS', womenProductList)
        } catch (err) {
            console.log(err)
        }
    },
}
const mutations = {
    SET_WOMEN_PRODUCTS: (state, payload) => state.women_products = payload
}


export default {
    plugins: [
        createPersistedState()
    ],
    state,
    getters,
    actions,
    mutations
}