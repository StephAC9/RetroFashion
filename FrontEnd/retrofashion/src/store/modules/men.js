import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


const state = {
    products: [],
    shoes: [],
    clothes: [],
}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('clothes')),
}
const actions = {
    async fetchMenProducts({ commit }) {
        try {
            const menProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                data: {
                    query: `query getMen_products{
                          getMen_products{
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
            const menProductList = menProducts.data.data.getMen_products
            console.log(menProductList)
            commit('SET_PRODUCTS', menProductList)
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