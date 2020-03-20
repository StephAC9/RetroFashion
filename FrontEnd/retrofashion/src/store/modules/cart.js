import createPersistedState from 'vuex-persistedstate'


const state = {
    cart: [],
    confirmation: ''
}
const getters = {
    cart: state => state.cart,
}
const actions = {

    sendToCart({ commit }, payload) {
        const cart = localStorage.getItem('cart')
        let cartList = []

        if (cart) {
            cartList = JSON.parse(cart)
            var y = payload.cartItem
            console.log(y.productId)
            const result = cartList.find((item) => item.productId === y.productId)
            console.log(result)
            if (result) {
                for (var i in cartList) {
                    if (cartList[i] === result) {
                        console.log('match')
                        cartList[i].quantity++
                            break; //Stop this loop, we found it!
                    }
                }
                localStorage.setItem('cart', JSON.stringify(cartList))
                console.log(JSON.parse(localStorage.getItem('cart')))
            } else {
                cartList.push(payload.cartItem)
                localStorage.setItem('cart', JSON.stringify(cartList))
                console.log(JSON.parse(localStorage.getItem('cart')))
            }
        } else {
            cartList.push(payload.cartItem)
            localStorage.setItem('cart', JSON.stringify(cartList))
            console.log(JSON.parse(localStorage.getItem('cart')))
        }
        commit('CONFIRMATION')
    },

    goToCart({ commit }) {
        const my_cart = localStorage.getItem('cart')
        let cartItems = []
        if (my_cart) {
            cartItems = JSON.parse(my_cart)
            commit('SET_CART', cartItems)
        }
    }

}
const mutations = {
    CONFIRMATION: (state) => state.confirmation = 'ADDED SUCCESSFULY!',
    SET_CART: (state, payload) => state.cart = payload
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