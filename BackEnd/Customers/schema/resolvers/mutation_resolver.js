const graphql = require('graphql')
const random = require('random-string-generator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('../../models/auth')
const Member = require('../../models/member')
const Product = require('../../models/product')
const SoldProduct = require('../../models/soldProduct')
const Order = require('../../models/order')
const Review = require('../../models/review')
const Payment = require('../../models/payment')
const CartItem = require('../../models/cartItem')
const errorMessage = require('../../error-messages/error_msg')
const memberIsAuth = require('../../auth-service/member_auth')
const type = require('../types/type')

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


        createAccount: {
            type: type.MemberType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: GraphQLString },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                phoneNumber: { type: GraphQLString },
                deliveryAddress: { type: GraphQLString },
                creditCardNumber: { type: GraphQLString },
            },
            resolve: async(parent, args) => {
                const existingMember = await Member.findOne({ email: args.email });
                if (existingMember) {
                    throw new Error('errorMessage.userAlreadyExist');
                }
                const hashedPassword = await bcrypt.hash(args.password, 12)


                const member = new Member({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    gender: args.gender,
                    email: args.email,
                    password: hashedPassword,
                    phoneNumber: args.phoneNumber,
                    deliveryAddress: args.deliveryAddress,
                    creditCardNumber: args.creditCardNumber,
                    favoritesIdList: [],
                    creationDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
                })

                const result = await member.save()

                return {
                    firstName: result.firstName,
                    lastName: result.lastName,
                    gender: result.gender,
                    homeAddress: result.homeAddress,
                    email: result.email,
                    password: null,
                    phoneNumber: result.phoneNumber,
                    deliveryAddress: result.deliveryAddress,
                    creditCardNumber: result.creditCardNumber,
                    favoritesIdList: result.favoritesIdList,
                    creationDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
                }
            }
        },
        login: {
            type: type.AuthType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args) => {
                const member = await Member.findOne({ email: args.email });
                if (!member) {
                    throw new Error('errorMessage.userDoNotExist')
                }
                const isEqual = await bcrypt.compare(args.password, member.password);
                if (!isEqual) {
                    throw new Error('errorMessage.incorrectPassword');
                }
                const token = jwt.sign({ id: member.id, email: member.email },
                    process.env.ACCESS_TOKEN_SECRETKEY, {
                        expiresIn: '48h'
                    }
                );
                return {
                    userId: member.id,
                    token: token,
                    tokenExpiration: '48'
                };
            }
        },
        updateMemberDetails: {
            type: type.MemberType,
            args: {
                memberId: { type: new GraphQLNonNull(GraphQLID) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                phoneNumber: { type: GraphQLString },
                deliveryAddress: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async(parent, args, req) => {
                /*  if (!req.memberIsAuth) {
                     throw new Error('Unauthenticated!');
                     //const member = Member.findById(req.memberId)
                 } */
                const member = await Member.findById(args.memberId)

                member.firstName = args.firstName
                member.lastName = args.lastName
                member.gender = args.gender
                member.homeAddress = args.homeAddress
                member.email = args.email
                member.password = hashedPassword
                member.phoneNumber = args.phoneNumber
                member.deliveryAddress = args.deliveryAddress

                return await member.save()
            }
        },
        addToCart: {
            type: type.CartItemType,
            args: {
                buyerId: { type: new GraphQLNonNull(GraphQLID) },
                productId: { type: new GraphQLNonNull(GraphQLID) },
                productName: { type: new GraphQLNonNull(GraphQLString) },
                productSize: { type: new GraphQLNonNull(GraphQLString) },
                productColor: { type: new GraphQLNonNull(GraphQLString) },
                imageUrl: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLFloat) },
            },
            resolve: async(parent, args, req) => {
                let cartItem = await CartItem.findOne({ buyerId: args.buyerId, productId: args.productId, productSize: args.productSize, productColor: args.productColor })
                if (cartItem) {
                    cartItem.quantity += 1
                } else {
                    cartItem = new CartItem({
                        buyerId: args.buyerId,
                        productId: args.productId,
                        productName: args.productName,
                        productSize: args.productSize,
                        productColor: args.productColor,
                        imageUrl: args.imageUrl,
                        price: args.price,
                        quantity: 1
                    })
                }

                return await cartItem.save()
            }
        },
        removeFromCart: {
            type: type.CartItemType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async(parent, args, req) => {
                const cartItem = await CartItem.findById(args.id)
                return await cartItem.remove(cartItem)
            }
        },


        placeAnOrder: {
            type: type.OrderType,
            args: {
                buyerId: { type: GraphQLID },
                productIds: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
                totalPrice: { type: new GraphQLNonNull(GraphQLFloat) },
            },
            async resolve(parent, req) {
                var someDate = new Date()
                var numberOfDaysToAdd = 30
                const dueDate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd)

                const order = new Order({
                    buyerId: args.buyerId,
                    productIds: args.productIds,
                    totalPrice: args.totalPrice,
                    orderDate: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
                    returnDueDate: new Date(dueDate),
                    orderNumber: random(12),
                    orderStatus: 'pending'
                })

                return order.save()
            }
        },
        pay: {
            type: type.PaymentType,
            args: {
                orderId: { type: new GraphQLNonNull(GraphQLString) },
                orderNumber: { type: new GraphQLNonNull(GraphQLString) },
                totalPrice: { type: new GraphQLNonNull(GraphQLFloat) },
                paymentMethod: { type: new GraphQLNonNull(GraphQLString) }, // Card-paypal-swish...
                paymentStatus: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async(parent, args, req) => {
                //TODO: Check if the payment when through and set the variable paymentSuccess accordingly
                var paymentSuccess = true
                if (args.paymentMethod == 'Card') {
                    if (!paymentSuccess) {
                        throw new Error('Your payment was not successfull. Please try again or contact your bank')
                    }
                }
                if (args.paymentMethod == 'Paypal') {
                    if (!paymentSuccess) {
                        throw new Error('Your payment was not successfull. Please try again or contact your bank')
                    }
                }
                if (args.paymentMethod == 'Swish') {
                    if (!paymentSuccess) {
                        throw new Error('Your payment was not successfull. Please try again or contact your bank')
                    }
                }

                const paymentDate = new Date()
                var numberOfDaysToAdd = 30
                const paymentDueDate = paymentDate.setDate(paymentDate.getDate() + numberOfDaysToAdd)

                const payment = new Payment({
                    orderNumber: { type: new GraphQLNonNull(GraphQLString) },
                    orderId: args.orderId,
                    orderNumber: args.orderNumber,
                    totalPrice: args.totalPrice,
                    paymentMethod: args.paymentMethod, // Card-paypal-swish...
                    paymentDate: new Date(),
                    paymentDueDate: new Date(paymentDueDate),
                    paymentStatus: args.paymentStatus
                })

                return await payment.save()
            }
        },

        addProductToFavorites: {
            type: type.MemberType,
            args: {
                memberId: { type: new GraphQLNonNull(GraphQLID) },
                productId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async(parent, args, req) => {
                /*  if (!req.memberIsAuth) {
                     throw new Error('errorMessage.unAuthenticated')
                 } */
                const member = await Member.findById(args.memberId)
                member.favoritesIdList.push(args.productId)
                return member.save()
            }
        },

        removeProductFromFavorites: {
            type: type.MemberType,
            args: {
                memberId: { type: new GraphQLNonNull(GraphQLID) },
                productId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async(parent, args, req) => {
                /*  if (!req.adminIsAuth) {
                     throw new Error('errorMessage.unAuthenticated')
                 } */
                const member = await Member.findById(args.memberId)
                member.favoritesIdList.filter(id => id !== args.productId)

                return member.save()
            }
        },
        cancelPayment: {
            type: type.OrderType,
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                /* if (!req.memberIsAuth) {
                    throw new Error(errorMessage.unAuthenticated)
                } 
                return await Order.find({buyerId: req.memberId})
                */
                const order = await Order.findById(id)
                return await Order.remove(order)
            }
        },
        returnProduct: {
            type: type.OrderType,
            args: { orderId: { type: GraphQLID } },
            rgs: { productId: { type: GraphQLID } },
            resolve: async(parent, args, req) => {
                if (!req.memberIsAuth) {
                    throw new Error('errorMessage.unAuthenticated')
                }
                const order = await Order.findById(id)
                let returnDueDate = order.returnDueDate
                let today = new Date()
                today.setHours(0, 0, 0, 0)
                if (returnDueDate > today) {
                    throw new Error('The return due date has passed. You have to pay or contact our custom service for more info. Thanks')
                }
                const prodIds = order.productIds.filter(id => id !== productId)
                if (!proIds[0]) {
                    await Order.remove(order)
                }
                order.productIds = prodIds
                return await order.save()
            }
        },

    }
})

module.exports = { Mutation: Mutation }