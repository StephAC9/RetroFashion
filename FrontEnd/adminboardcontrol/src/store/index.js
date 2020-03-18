import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        adminAuth: false,
        token: null,
        products: [],
        members: [],
        admins: [],
        reviews: [],
        orders: []
    },
    getters: {
        products: state => state.products
    },
    actions: {
        async login({ commit }, payload) {
            try {
                const auth = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    data: {
                        query: `mutation loginAsAdmin($email: String!, $password: String!){
                        loginAsAdmin(email: $email, password: $password){
                            adminId
                            token
                            tokenExpiration
                        }             
                    }`,
                        variables: {
                            email: payload.email,
                            password: payload.password
                        },
                    },

                })
                let token = ''
                const response = auth.data.data.loginAsAdmin
                console.log(response)

                response === null ? alert('Wrong login details. Try again please!') :

                    token = auth.data.data.loginAsAdmin.token
                localStorage.setItem('token', token)
                commit('SET_TOKEN', localStorage.getItem('token'))
                setTimeout(() => {
                    router.push({ name: 'Dasboard' })
                }, 1500);

            } catch (err) {
                console.log(err)
            }
        },
        async saveProduct({ commit }, payload) {
            console.log(payload)
            console.log(payload.images)
            try {
                const product = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },

                    data: {
                        query: `mutation addProduct($productName: String!,$productImages: [String]!,$productTargetedGroup: String!, $productType: String!,$productCategories: [String]!,$productDescription: String!,$productColor: String!,$productSize: String!,$productPrice: Float!,$quantity: Int!){
                        addProduct(productName:$productName,productImages:$productImages,productTargetedGroup:$productTargetedGroup,productType:$productType,productCategories:$productCategories,productDescription:$productDescription,productColor:$productColor,productSize:$productSize,productPrice:$productPrice,quantity:$quantity){
                            id
                            productName
                            productImages
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
                            productName: payload.name,
                            productImages: payload.images,
                            productTargetedGroup: payload.groupTarget,
                            productType: payload.type,
                            productCategories: payload.categories,
                            productDescription: payload.description,
                            productColor: payload.color,
                            productSize: payload.size,
                            productPrice: parseFloat(payload.price),
                            quantity: parseInt(payload.quantity)
                        }
                    },
                })
                const savedProduct = product.data.data.addProduct
                console.log(savedProduct)
                commit('ADD_TO_PRODUCT', savedProduct)
            } catch (err) {
                console.log(err)
            }
        },
        async fetchProducts({ commit }) {
            try {
                const products = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },
                    data: {
                        query: `query allProducts{
                        allProducts{
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
                const productList = products.data.data.allProducts
                console.log(productList)
                commit('SET_PRODUCTS', productList)
            } catch (err) {
                console.log(err)
            }
        },

        async freezeProduct({ commit }, payload) {
            console.log(payload)
            try {
                const product = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/graphql',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },
                    data: {
                        query: `mutation freezeProduct($productId: ID!){
                        freezeProduct(productId: $productId){
                            id
                            productName
                        }             
                    }`,
                        variables: {
                            productId: payload.productId,
                        }
                    },
                })
                const productId = product.data.data.freezeProduct.id
                console.log(productId)
                commit('FREEZE_PRODUCT', productId)
            } catch (err) {
                console.log(err)
            }
        },
    },
    mutations: {
        SET_TOKEN: (state, payload) => state.token = payload,
        ADD_TO_PRODUCT: (state, payload) => state.products.push(payload),
        SET_PRODUCTS: (state, payload) => state.products = payload,
        FREEZE_PRODUCT: (state, payload) => {
            state.products.filter(p => p.id !== payload)
        },
    }
})