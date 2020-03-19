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
            //create and array to check if it's already added. In that case you remove it 
            //from the array, you create substrings and send back everything to cookies
            const cookieArray = tp.split(',')
            var used = ''
            cookieArray.forEach(id => {
                if (id == payload.productId) {
                    used = id
                }
            })
            const newCookiesArray = cookieArray.filter(id => id !== used)
            console.log(newCookiesArray)
            localStorage.setItem('cookie', tp + ',' + payload.productId)
            commit('ADD_TO_FAVORITES', 'Added!')
            console.log(tp)
        } else {
            localStorage.setItem('cookie', payload.productId)
        }

        const token = localStorage.getItem('token')
        if (token) {
            try {
                const memberFavs = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },

                    data: {
                        query: `mutation addProductToFavorites($productId: ID!){
                        addProductToFavorites(productId:$productId){
                            id
                            favoritesIdList
                        }             
                    }`,
                        variables: {
                            productId: payload.productId,
                        }
                    },
                })
                const memberFavsList = memberFavs.data.data.addProductToFavorites.favoritesIdList
                console.log(memberFavsList)
                commit('ADD_TO_FAVORITES', 'Added!')
            } catch (err) {
                console.log(err)
            }
        }

    },
    /* async removeFromFavorites({ commit }, payload) {

    }, */

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
    SET_FAV_PRODUCTS: (state, payload) => state.favorites = payload
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