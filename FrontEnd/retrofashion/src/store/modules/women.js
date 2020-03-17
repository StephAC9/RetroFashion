import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    products: [],
    shoes: [],
    clothes: [],
    singleCategoryFilterProducts: [],
    multiCategoriesFilterProducts: [],

}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('Shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('Clothes')),
    singleCategoryFilterProducts: state => state.singleCategoryFilterProducts,
    multiCategoriesFilterProducts: state => state.singleCategoryFilterProducts,
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
    async fetchSingleCategory({ commit }, payload) {
        try {
            const categoryProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                data: {
                    query: `query productSingleFilter($groupTarget: String!,$category: String!){
                        productSingleFilter(groupTarget:$groupTarget,category:$category){
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
                        category: payload.selectedCategory,
                    }
                },

            })
            const categoryProductList = categoryProducts.data.data.productSingleFilter
            console.log(categoryProductList)
            commit('SET_SINGLE_FILTER_PRODUCTS', categoryProductList)
            router.push({ name: 'Women_' + payload.selectedCategory })
        } catch (err) {
            console.log(err)
        }
    }
}
const mutations = {
    SET_PRODUCTS: (state, payload) => state.products = payload,
    SET_SINGLE_FILTER_PRODUCTS: (state, payload) => state.singleCategoryFilterProducts = payload,
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