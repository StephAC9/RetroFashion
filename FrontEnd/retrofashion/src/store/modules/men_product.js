import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
//import router from '../../router' 


const state = {
    men_products: [],
    men_shoes: [],
    men_clothes: [],
}
const getters = {
    men_products: state => state.men_products,
    men_shoes: state => state.men_products.filter(product => !product.productCategories.includes('shoes')),
    men_clothes: state => state.men_products.filter(product => !product.productCategories.includes('clothes')),
}
const actions = {
    async fetchMenProducts({ commit }) {
        try {
            const menProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                /* headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }, */
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
            commit('SET_MEN_PRODUCTS', menProductList)
        } catch (err) {
            console.log(err)
        }
    },
}
const mutations = {
    SET_MEN_PRODUCTS: (state, payload) => state.men_products = payload
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