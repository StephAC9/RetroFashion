const graphql = require('graphql')
const random = require('random-string-generator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('../../models/auth')
const Member = require('../../models/member')
const Product = require('../../models/product')
const SoldProduct = require('../../models/soldProduct')
const Order = require('../../../Customers/models/order')
const Review = require('../../models/review')
const Admin = require('../../models/admin')
const Payment = require('../../models/payment')
const adminIsAuth = require('../../auth-service/admin_auth')
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
        admin: {
            type: type.AdminType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } */

                let admin = await Admin.findById(args.id)
                if (!admin) {
                    throw new Error('errorMessage.noFound')
                }
                admin.password = null

                return admin
            }
        },
        admins: {
            type: new GraphQLList(type.AdminType),
            resolve: async(parent, args) => {

                let admins = await Admin.find({})
                admins.forEach(admin => admin.password = null)
                return admins
            }
        },
        member: {
            type: type.MemberType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } */

                let member = await Member.findById(args.id)
                if (!member) {
                    throw new Error('errorMessage.noFound')
                }
                member.password = null

                return member
            }
        },
        members: {
            type: new GraphQLList(type.MemberType),
            resolve: async(parent, args) => {
                /*  if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */

                let members = await Member.find({})
                members.forEach(member => member.password = null) //Return password = null to frontend if requested.
                return members
            }
        },
        product: {
            type: type.ProductType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /*  if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Product.findById(args.id)
            }
        },
        products: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => {
                /*  if (!req.adminIsAuth) {
                       throw new Error(errorMessage.unAuthenticated)
                   } */
                return await Product.find({})
            }
        },
        allProducts: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => {
                return await Product.find({ status: 'opened' })
            }
        },

        soldProduct: {
            type: type.SoldProductType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /*  if (!req.adminIsAuth) {
                       throw new Error(errorMessage.unAuthenticated)
                   } */
                return await SoldProduct.findById(args.id)
            }
        },
        soldProducts: {
            type: new GraphQLList(type.SoldProductType),
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await SoldProduct.find({})
            }
        },
        payment: {
            type: type.PaymentType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Payment.findById(args.id)
            }
        },
        payments: {
            type: new GraphQLList(type.PaymentType),
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Payment.find({})
            }
        },
        review: {
            type: type.ReviewType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Review.findById(args.id)
            }
        },
        reviews: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Review.find({})
            }
        },
        order: {
            type: new GraphQLList(type.ProductType),
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Order.findById(args.id)
            }
        },
        orders: {
            type: new GraphQLList(type.ProductType),
            resolve: async(parent, args) => {
                /* if (!req.adminIsAuth) {
                     throw new Error(errorMessage.unAuthenticated)
                 } */
                return await Order.find({})
            }
        },
        loadCategories: {
            type: type.CategoryType,
            resolve: async(parent, args) => await Category.find({})
        },

    }
})

module.exports = { RootQuery: RootQuery }