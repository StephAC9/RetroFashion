const graphql = require('graphql')
const { GraphQLUpload } = require('graphql-upload')
const random = require('random-string-generator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('../../models/auth')
const Member = require('../../models/member')
const Product = require('../../models/product')
const SoldProduct = require('../../models/soldProduct')
const Order = require('../../models/order')
const Review = require('../../models/review')
const Admin = require('../../models/admin')
const Payment = require('../../models/payment')
const Stock = require('../../models/stock')
const adminIsAuth = require('../../auth-service/admin_auth')
const type = require('../types/type')
const Category = require('../../models/category')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql

const Mutation = new GraphQLObjectType({
    name: 'MutationType',
    fields: {


        addAdmin: {
            type: type.AdminType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                phoneNumber: { type: GraphQLString }
            },
            resolve: async(parent, args) => {
                const existingAdmin = await Admin.findOne({ email: args.email });
                if (existingAdmin) {
                    throw new Error('errorMessage.userAlreadyExist');
                }

                const hashedPassword = await bcrypt.hash(args.password, 12)


                const admin = new Admin({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: hashedPassword,
                    phoneNumber: args.phoneNumber,
                    creationDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
                })

                const result = await admin.save()

                return {
                    firstName: result.firstName,
                    lastName: result.lastName,
                    email: result.email,
                    password: null,
                    phoneNumber: result.phoneNumber,
                    creationDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
                }
            }
        },
        loginAsAdmin: {
            type: type.AuthType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args) => {
                const admin = await Admin.findOne({ email: args.email });
                if (!admin) {
                    throw new Error('errorMessage.userDoNotExist')
                }
                const isEqual = await bcrypt.compare(args.password, admin.password);
                if (!isEqual) {
                    throw new Error('errorMessage.incorrectPassword');
                }
                const token = jwt.sign({ id: admin.id, email: admin.email },
                    process.env.ACCESS_TOKEN_SECRETKEY, {
                        expiresIn: '48h'
                    }
                );
                return {
                    adminId: admin.id,
                    token: token,
                    tokenExpiration: '48'
                };
            }
        },

        addProduct: {
            type: type.ProductType,
            args: {
                productName: { type: new GraphQLNonNull(GraphQLString) },
                productImages: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
                productType: { type: new GraphQLNonNull(GraphQLString) },
                productCategories: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
                productDescription: { type: GraphQLString },
                productColor: { type: new GraphQLNonNull(GraphQLString) },
                productSize: { type: new GraphQLNonNull(GraphQLString) },
                productPrice: { type: new GraphQLNonNull(GraphQLFloat) },
                quantity: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error('Unauthenticated!');
                } */
                const existingProduct = await Product.findOne({ productName: args.productName, productColor: args.productColor, productSize: args.productSize })
                if (existingProduct) {
                    const productStock = await Stock.findOne({ productName: existingProduct.productName, productColor: existingProduct.productColor, productSize: existingProduct.productSize })

                    productStock.inStock += args.quantity
                    productStock.save()
                } else {

                    let product = new Product({
                        productName: args.productName,
                        productImages: args.productImages,
                        productType: args.productType,
                        productCategories: args.productCategories,
                        productDescription: args.productDescription,
                        productColor: args.productColor,
                        productSize: args.productSize,
                        productSalesPrice: 0,
                        productPrice: args.productPrice,
                        status: 'opened',
                        productEntryDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
                    })

                    stockItem = new Stock({
                        productName: args.productName,
                        productColor: args.productColor,
                        productSize: args.productSize,
                        inStock: args.quantity
                    })

                    await stockItem.save()
                    return await product.save()
                }
            }
        },
        setSingleProductReduction: {
            type: type.ProductType,
            args: {
                productId: { type: new GraphQLNonNull(GraphQLID) },
                reductionPourcentage: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error('Unauthenticated!');
                } */
                const product = await Product.findById(args.productId)
                let reduction = parseInt(args.reductionPourcentage)
                product.productSalesPrice = product.productPrice - ((product.productPrice / 100) * reduction)
                return await product.save()
            }
        },
        removeSingleProductReduction: {
            type: type.ProductType,
            args: {
                productId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error('Unauthenticated!');
                } */
                const product = await Product.findById(args.productId)
                product.productSalesPrice = 0
                return await product.save()
            }
        },
        setGroupProductReduction: {
            type: type.ProductType,
            args: {
                groupType: { type: new GraphQLNonNull(GraphQLString) },
                productGroupName: { type: new GraphQLNonNull(GraphQLString) },
                reductionPourcentage: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args, req) => {
                /* if (!req.adminIsAuth) {
                    throw new Error('Unauthenticated!');
                } */
                let reduction = parseInt(args.reductionPourcentage)
                const products = await Product.find({ productType: args.groupType })
                console.log(products)
                await products.forEach(p => {
                    if (p.productCategories.includes(args.productGroupName)) {
                        p.productSalesPrice = (product.productPrice / 100) * reduction
                    }
                })

                return products.save()
            }
        },

        removeGroupProductReduction: {
            type: type.ProductType,
            args: {
                groupType: { type: new GraphQLNonNull(GraphQLString) },
                productGroupName: { type: new GraphQLNonNull(GraphQLString) },
                reductionPourcentage: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args, req) => {
                if (!req.adminIsAuth) {
                    throw new Error('Unauthenticated!');
                }
                const products = await Product.find({ productType: args.groupType })
                await products.forEach(p => {
                    if (p.productCategories.includes(args.productGroupName)) {
                        p.productSalesPrice = 0
                        p.save()
                    }
                })
                return products
            }
        },

        deleteProduct: {
            type: type.ProductType,
            args: {
                productId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async(parent, args, req) => {
                const product = await Product.findById(args.productId)
                const reviews = await Review.find({ productId: args.productId })
                if (!req.adminIsAuth) {
                    throw new Error('errorMessage.unAuthenticated')
                }

                Review.deleteMany({ productId: args.productId })
                return await Product.remove(product)
            }
        },
        freezeProduct: {
            type: type.ProductType,
            args: {
                productId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async(parent, args, req) => {
                if (!req.adminIsAuth) {
                    throw new Error('errorMessage.unAuthenticated')
                }
                const product = await Product.findById(args.productId)
                product.status = 'frozen'
                return product.save()
            }
        },
        deleteReview: {
            type: type.ReviewType,
            args: {
                reviewId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async(parent, args, req) => {
                if (!req.adminIsAuth) {
                    throw new Error('errorMessage.unAuthenticated')
                }

                await Review.deleteOne({ id: args.reviewId }, function(err) {
                    if (err) return handleError(err);
                });
                return null

                /* const review = await Review.findById(args.reviewId)
                return await Booking.remove(booking) */
            }
        },
        addCategory: {
            type: type.CategoryType,
            args: {
                categoryName: { type: GraphQLString }
            },
            resolve: async(parent, args) => {
                const category = new Category({
                    categoryName: args.categoryname
                })
                return category.save()
            }
        },

    }
})

module.exports = { Mutation: Mutation }