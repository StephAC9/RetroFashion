import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    cart: [],
    confirmation: '',
    sum: 0,
    count: 0
}
const getters = {
    cart: state => state.cart,
    sum: state => {
        let total = 0
        state.cart.forEach(element => {
            total += element.price * element.quantity
        });
        return total
    },
    count: state => state.cart.length
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
        console.log(my_cart)
        let cartItems = []
        if (my_cart) {
            cartItems = JSON.parse(my_cart)
            console.log(cartItems)
            commit('SET_CART', cartItems)
            router.push({ name: 'cart' });
        }
    },


    quantityIncrement({ commit }, martin) {
        console.log(martin.item)
        const ibrahim = localStorage.getItem('cart')
        const p = JSON.parse(ibrahim);
        console.log(p)


        for (var i in p) {
            if (p[i] === martin.item) {
                console.log('match')
                p[i].quantity++
                    break; //Stop this loop, we found it!
            }
        }
        localStorage.setItem('cart', JSON.stringify(p))
        console.log(JSON.parse(localStorage.getItem('cart')))
        commit('CONFIRMATION')




    },
    quantityDecrement({ commit }, kubrom) {
        console.log(kubrom.item)
        const ngaha = localStorage.getItem('cart')
        const p2 = JSON.parse(ngaha);
        console.log(p2)


        for (var i in p2) {
            if (p2[i] === kubrom.item) {
                console.log('match')
                p2[i].quantity--
                    break; //Stop this loop, we found it!
            }
        }
        localStorage.setItem('cart', JSON.stringify(p2))
        console.log(JSON.parse(localStorage.getItem('cart')))
        commit('CONFIRMATION')




    },



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