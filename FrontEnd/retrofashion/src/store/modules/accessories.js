import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../../router'


const state = {
    products: [],
    singleCategoryFilterProducts: [],
    multiCategoriesFilterProducts: [],

}
const getters = {
    products: state => state.products,
    jewelries: state => state.products.filter(accessory => !accessory.productCategories.includes('Jewelry')),
    travelBags: state => state.products.filter(accessory => !accessory.productCategories.includes('Travelbag')),
    handBags: state => state.products.filter(accessory => !accessory.productCategories.includes('Handbag')),
    belts: state => state.products.filter(accessory => !accessory.productCategories.includes('Belt')),
    watches: state => state.products.filter(accessory => !accessory.productCategories.includes('Watch')),
    wallets: state => state.products.filter(accessory => !accessory.productCategories.includes('Wallets')),
    singleCategoryFilterProducts: state => state.singleCategoryFilterProducts,
    multiCategoriesFilterProducts: state => state.singleCategoryFilterProducts,
}
const actions = {
    async fetchWomenProducts({ commit }) {
        try {
            const accessories = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                /* headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }, */
                data: {
                    query: `query getAccessories{
                          getAccessories{
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
            const accessoryList = accessories.data.data.getAccessories
            console.log(accessoryList)
            commit('SET_PRODUCTS', accessoryList)
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
                    query: `query accessorySingleFilter($category: String!){
                        accessorySingleFilter(category:$category){
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
                        category: payload.selectedCategory,
                    }
                },

            })
            const categoryProductList = categoryProducts.data.data.accessorySingleFilter
            console.log(categoryProductList)
            commit('SET_SINGLE_FILTER_PRODUCTS', categoryProductList)
            router.push({ name: 'Accessory_' + payload.selectedCategory })
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