const graphql = require('graphql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('../../models/auth')
const Member = require('../../models/member')
const Product = require('../../models/product')
const SoldProduct = require('../../models/soldProduct')
const Payment = require('../../models/payment')
const Review = require('../../models/review')
const CartItem = require('../../models/cartItem')
const errorMessage = require('../../error-messages/error_msg')
const memberIsAuth = require('../../auth-service/member_auth')
const type = require('../types/type')
const Category = require('../../models/category')



const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull,
} = graphql


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        member: {
            type: type.MemberType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                let member = await Member.findById(req.memberId)
                */

                let member = await Member.findById(args.id)
                if (!member) {
                    throw new Error('errorMessage.noFound')
                }
                member.password = null

                return member
            }
        },
        products: {
            type: type.ProductType,
            resolve: async(parent, args) => await Product.find({ status: 'opened' })
        },

        getMen_products: {
            type: type.ProductType,
            resolve: async(parent, args) => await Product.find({ productType: 'men' })
        },
        getWomen_products: {
            type: type.ProductType,
            resolve: async(parent, args) => await Product.find({ productType: 'women' })
        },
        getChildren_products: {
            type: type.ProductType,
            resolve: async(parent, args) => await Product.find({ productType: 'children' })
        },
        getShoes: {
            type: type.ProductType,
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'opened' })
                const shoes = await products.filter(p => !p.productCategories.includes('shoes'))
                return shoes
            }
        },
        getClothes: {
            type: type.ProductType,
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'opened' })
                const clothes = await products.filter(p => !p.productCategories.includes('clothes'))
                return clothes
            }
        },
        getAccessories: {
            type: type.ProductType,
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'opened' })
                const accessories = await products.filter(p => !p.productCategories.includes('accessories'))
                return accessories
            }
        },
        getSales: {
            type: type.ProductType,
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'opened' })
                const sales = []
                await products.forEach(p => {
                    if (p.productSalesPrice > 0) {
                        sales.push(p)
                    }
                })
                return sales
            }
        },

        getCategory: {
            type: type.ProductType,
            args: {
                groupTarget: { type: GraphQLString }, //men-women-children
                categories: { type: new GraphQLList(GraphQLString) } //List Because the filter could have one or more categories.
            },
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'opened', productType: args.groupTarget })
                const optionCategories = args.categories
                const searchedResult = []

                await products.forEach(p => {
                    categories.forEach(c => {
                        if (p.productCategories.includes(c)) {
                            searchedResult.push(p)
                        }
                    })
                })
                return searchedResult
            }
        },
        getProductsByName: {
            type: type.ProductType,
            args: {
                productName: { type: GraphQLString }
            },
            resolve: async(parent, args) => await Product.find({ status: 'opened', productName: args.productName })
        },

        getCart: {
            type: new GraphQLList(type.CartItemType),
            args: { buyerId: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                return await CartItem.find({buyerId: req.memberId})
                */
                return await CartItem.find({ buyerId: args.buyerId })
            }
        },
        getFavorites: {
            type: new GraphQLList(type.ProductType),
            args: { memberId: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                let member = await Member.findById(req.memberId)
                */
                let member = await Member.findById(args.memberId)
                const productsId = member.favorites
                const productsInFavorites = []
                await productsId.forEach(id => {
                    var product = Product.findById(id)
                    productsInFavorites.push(product)
                })

                return productsInFavorites
            }
        },
        getOrders: {
            type: type.OrderType,
            args: { buyerId: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                return await Order.find({buyerId: req.memberId})
                */
                return await Order.find({ buyerId: args.buyerId })
            }
        },

        getPaymentsHistory: {
            type: new GraphQLList(type.PaymentType),
            args: { buyerId: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                return await Payment.find({buyerId: req.memberId})
                */
                return await Payment.find({ buyerId: args.buyerId })
            }
        },

        loadCategories: {
            type: type.CategoryType,
            resolve: async(parent, args) => await Category.find({})
        },

    }
})

module.exports = { RootQuery: RootQuery }