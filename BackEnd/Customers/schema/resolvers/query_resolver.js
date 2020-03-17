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
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened' })
        },

        getMen_products: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productTargetedGroup: 'Men' })
        },
        getWomen_products: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productTargetedGroup: 'Women' })
        },
        getChildren_products: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productTargetedGroup: 'Children' })
        },
        productVariants: { // return same products avalaible with different color
            type: new GraphQLList(type.ProductType),
            args: {
                productName: { type: GraphQLString },
                productColor: { type: GraphQLString },
            },
            async resolve(parent, args) {
                const sameProducts = await Product.find({ productName: args.productName })
                const variants = await sameProducts.filter(p => p.productColor !== args.productColor)
                return variants
            }
        },
        getShoes: {
            type: new GraphQLList(type.ProductType),
            args: { targetedGroup: { type: GraphQLString } },
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productTargetedGroup: args.targetedGroup, productType: 'Shoes' })
        },

        getClothes: {
            type: new GraphQLList(type.ProductType),
            args: { targetedGroup: { type: GraphQLString } },
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productTargetedGroup: args.targetedGroup, productType: 'Clothes' })
        },

        getAccessories: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productType: 'Accessories' })
        },
        getSales: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productOnSales: 'Yes' })
        },
        productSingleFilter: {
            type: new GraphQLList(type.ProductType),
            args: {
                groupTarget: { type: GraphQLString }, //men-women-children
                category: { type: GraphQLString } //List Because the filter could have one or more categories.
            },
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'Opened', productTargetedGroup: args.groupTarget })
                const searchedResult = []

                await products.forEach(p => {
                    if (p.productCategories.includes(args.category)) {
                        searchedResult.push(p)
                    }
                })
                return searchedResult
            }
        },
        accessorySingleFilter: {
            type: new GraphQLList(type.ProductType),
            args: {
                category: { type: GraphQLString } //List Because the filter could have one or more categories.
            },
            resolve: async(parent, args) => {
                const Accessories = await Product.find({ status: 'Opened', productType: 'Accessories' })
                const searchedResult = []

                await products.forEach(p => {
                    if (p.productCategories.includes(args.category)) {
                        searchedResult.push(p)
                    }
                })
                return searchedResult
            }
        },

        productMultiFilter: {
            type: new GraphQLList(type.ProductType),
            args: {
                groupTarget: { type: GraphQLString }, //men-women-children
                categories: { type: new GraphQLList(GraphQLString) } //List Because the filter could have one or more categories.
            },
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'Opened', productTargetedGroup: args.groupTarget })
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
        productsFilter: {
            type: new GraphQLList(type.ProductType),
            args: {
                groupTarget: { type: GraphQLString }, //men-women-children
                categories: { type: new GraphQLList(GraphQLString) } //List Because the filter could have one or more categories.
            },
            resolve: async(parent, args) => {
                const products = await Product.find({ status: 'Opened', productTargetedGroup: args.groupTarget })
                const optionCategories = args.categories
                console.log(optionCategories)
                const searchedResult = []

                await optionCategories.forEach(c => {
                    products.forEach(p => {
                        if (p.productCategories.includes(c)) {
                            searchedResult.push(p)
                        }
                    })
                })
                console.log(searchedResult)
                return searchedResult
            }
        },
        getProductsByName: {
            type: new GraphQLList(type.ProductType),
            args: {
                productName: { type: GraphQLString }
            },
            resolve: async(parent, args) => await Product.find({ status: 'Opened', productName: args.productName })
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
            type: new GraphQLList(type.ProductType),
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
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => await Category.find({})
        },


    }
})

module.exports = { RootQuery: RootQuery }