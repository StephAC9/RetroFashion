import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../../router'


const state = {
    products: [],
    shoes: [],
    clothes: [],
    targetGroup: '',
    singleCategoryFilterProducts: [],
    multiCategoriesFilterProducts: [],
}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('clothes')),
    singleCategoryFilterProducts: state => state.singleCategoryFilterProducts,
    multiCategoriesFilterProducts: state => state.singleCategoryFilterProducts,
    isTargetGroup: state => state.targetGroup,
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
                        groupTarget: 'Men',
                        category: payload.selectedCategory,
                    }
                },

            })
            const categoryProductList = categoryProducts.data.data.productSingleFilter
            console.log(categoryProductList)
            commit('SET_SINGLE_FILTER_PRODUCTS', categoryProductList)
            router.push({ name: 'Men_' + payload.selectedCategory })
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