/* import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../../router'


const state = {
    products: [],
    shoes: [],
    clothes: [],
    targetGroup: '',
    filteredProducts: [],
}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('clothes')),
    filteredProducts: state => state.filteredProducts,
    isTargetGroup: state => state.targetGroup,
}
const actions = {
    async fetchChildrenProducts({ commit }) {
        try {
            const childrenProducts = await axios({
                method: 'POST',
                url: 'http://localhost:4300/graphql',
                data: {
                    query: `query getChildren_products{
                          getChildren_products{
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
            const childrenProductsList = childrenProducts.data.data.getChildren_products
            console.log(childrenProductsList)
            commit('SET_PRODUCTS', childrenProductsList)
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
                        groupTarget: 'Children',
                        categories: payload.selected,
                    }
                },

            })
            const categoryProductList = categoryProducts.data.data.productsFilter
            console.log(categoryProductList)
            commit('SET_FILTERED_PRODUCTS', categoryProductList)
            const selected = payload.selected
            console.log(selected.length)
            let isMulti = selected.length > 1
            console.log(isMulti)
            if (isMulti == false) {
                router.push({ name: 'Children_' + payload.selected[0] })
            } else {
                router.push({ name: 'Children_multi' })
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const mutations = {
    SET_PRODUCTS: (state, payload) => state.products = payload,
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
} */