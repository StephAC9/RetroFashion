import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../../router'

const state = {
    status: '',
    favorites: [],
    inToFavotives: false
}
const getters = {
    status: state => state.status,
    myFavorites: state => state.favorites,
    inToFavotives: state => state.inToFavotives
}
const actions = {
    async addToFavorites({ commit }, payload) {
        const tp = localStorage.getItem('cookie')

        if (tp) {
            console.log(tp)
            localStorage.setItem('cookie', tp + ',' + payload.productId)
            const newValue = localStorage.getItem('cookie')
            console.log(newValue)
            commit('ADD_TO_FAVORITES', 'Added!')
        } else {
            localStorage.setItem('cookie', payload.productId)
        }

    },
    setInFavorite({ commit }, payload) {
        commit('SET_IN_FAV', payload.status)
    },
    async removeFromFavorites({ commit }, payload) {
        const favList_cookies = localStorage.getItem('cookie')
        const array = favList_cookies.split(',')
        console.log(array)
        console.log(array[0])
        const x = array.filter(element => element !== payload.productId)
        console.log(x)
        commit('REMOVE_FROM_FAVORITES', 'Removed!')
    },

    async fetchFavorites({ commit }) {
        const token = await localStorage.getItem('token')
        if (token) {
            try {
                const fav_products = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },
                    data: {
                        query: `query getFavorites{
                        getFavorites{
                            id
                            productName
                            productImages
                            productCategories
                            productDescription
                            productColor
                            productSize
                            productPrice
                            productEntryDate
                            stock{
                                inStock
                            }
                            
                        }             
                    }`
                    },

                })
                const productList = fav_products.data.data.getFavorites
                console.log(productList)
                commit('SET_FAV_PRODUCTS', productList)
                router.push('/favorites')
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const allProducts = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },
                    data: {
                        query: `query products{
                        products{
                            id
                            productName
                            productImages
                            productCategories
                            productDescription
                            productColor
                            productSize
                            productPrice
                            productEntryDate
                            stock{
                                inStock
                            }
                            
                        }             
                    }`
                    },

                })
                const allProductList = allProducts.data.data.products
                console.log(allProductList)
                const myCookies = localStorage.getItem('cookie')
                const myFavoritesList = myCookies.split(',')
                console.log(myFavoritesList)
                    /*  const myFavs = []
                     allProductList.forEach(p => {
                         myCookies.forEach(id => {
                             if (p.id == id) {
                                 myFavs.push(p)
                             }
                         });
                     });
                     commit('SET_FAV_PRODUCTS', myFavs)
                     router.push('/favorites') */
            } catch (err) {
                console.log(err)
            }
        }
    },
}
const mutations = {
    ADD_TO_FAVORITES: (state, payload) => state.status = payload,
    SET_FAV_PRODUCTS: (state, payload) => state.favorites = payload,
    REMOVE_FROM_FAVORITES: (state, payload) => state.status = payload,
    SET_IN_FAV: (state, payload) => state.inToFavotives = payload,
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