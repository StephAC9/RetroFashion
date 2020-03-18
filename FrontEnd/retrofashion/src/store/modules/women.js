import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    products: [],
    shoes: [],
    clothes: [],
    singleCategoryFilterProducts: [],
    multiCategoriesFilterProducts: [],
    filteredProducts: [],

}
const getters = {
    products: state => state.products,
    shoes: state => state.products.filter(product => !product.productCategories.includes('Shoes')),
    clothes: state => state.products.filter(product => !product.productCategories.includes('Clothes')),
    filteredProducts: state => state.filteredProducts,
    singleCategoryFilterProducts: state => state.singleCategoryFilterProducts,
    multiCategoriesFilterProducts: state => state.multiCategoryFilterProducts,

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
    /*   async fetchSingleCategory({ commit }, payload) {
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
      },
      async fetchMultipleCategories({ commit }, payload) {
          try {
              const categoryProducts = await axios({
                  method: 'POST',
                  url: 'http://localhost:4300/graphql',
                  data: {
                      query: `query productMultiFilter($groupTarget: String!,$categories: String!){
                          productMultiFilter(groupTarget:$groupTarget,categories:$categories){
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
              const categoryProductList = categoryProducts.data.data.productSingleFilter
              console.log(categoryProductList)
              commit('SET_MULTI_FILTER_PRODUCTS', categoryProductList)
              router.push({ name: 'Women_multi' })
          } catch (err) {
              console.log(err)
          }
      }, */
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
            commit('SET_FILTERED_PRODUCTS', categoryProductList)
            const selected = payload.selected
            console.log(selected.length)
            let isMulti = selected.length > 1
            console.log(isMulti)
            if (isMulti == false) {
                router.push({ name: 'Women_' + payload.selected[0] })
            } else {
                router.push({ name: 'Women_multi' })
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const mutations = {
    SET_PRODUCTS: (state, payload) => state.products = payload,
    SET_FILTERED_PRODUCTS: (state, payload) => state.filteredProducts = payload,
    /* SET_SINGLE_FILTER_PRODUCTS: (state, payload) => state.singleCategoryFilterProducts = payload,
    SET_MULTI_FILTER_PRODUCTS: (state, payload) => state.multiCategoryFilterProducts = payload, */
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