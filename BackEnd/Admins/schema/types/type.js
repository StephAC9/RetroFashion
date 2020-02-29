const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
} = graphql

const AdminType = new GraphQLObjectType({
    name: 'Admin',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        creationDate: { type: GraphQLString }
    })
})

const MemberType = new GraphQLObjectType({
    name: 'Member',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        gender: { type: GraphQLString },
        email: { type: GraphQLString },
        repeat_email: { type: GraphQLString },
        password: { type: GraphQLString },
        repeat_password: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        deliveryAddress: { type: GraphQLString },
        creditCardNumber: { type: GraphQLString },
        favoritesIdList: { type: new GraphQLList(GraphQLString) },
        creationDate: { type: GraphQLString },
        orders: {
            type: new GraphQLList(OrderType),
            resolve: async(parent, args) => await Order.find({ buyerId: parent.id })
        },
        shoppedProductsHistory: {
            type: new GraphQLList(SoldProductType),
            resolve: async(parent, args) => await SoldProduct.find({ buyerId: parent.id })
        },
        cartItems: {
            type: new GraphQLList(CartItemType),
            resolve: async(parent, args) => await CartItem.find({ buyerId: parent.id })
        },
        favorites: {
            type: new GraphQLList(ProductType),
            resolve: async(parent, args) => {
                const productsId = parent.favoritesIdList
                const productsInFavorites = []
                await productsId.forEach(id => {
                    var product = Product.findById(id)
                    productsInFavorites.push(product)
                })

                return productsInFavorites
            }
        },
        paymentHistory: {
            type: new GraphQLList(PaymentType),
            resolve: async(parent, args) => await Payment.find({ buyerId: parent.id })
        },
    })
})
const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        productName: { type: GraphQLString },
        productImages: { type: new GraphQLList(GraphQLString) },
        productCategories: { type: new GraphQLList(GraphQLString) },
        productDescription: { type: GraphQLString },
        productColor: { type: GraphQLString },
        productSize: { type: GraphQLString },
        productPrice: { type: GraphQLFloat },
        status: { type: GraphQLString },
        productEntryDate: { type: GraphQLString },
        stock: {
            type: new GraphQLList(StockType),
            resolve: async(parent, args) => await Stock.findOne({ productName: parent.productName, productSize: parent.productSize, productColor: parent.productColor })
        },
        review: {
            type: new GraphQLList(ReviewType),
            resolve: async(parent, args) => await Review.find({ productId: parent.id })
        },
        productVariants: { // return same products avalaible with different color
            type: new GraphQLList(ProductType),
            async resolve(parent, args) {
                const sameProducts = await Product.find({ productName: parent.productName })
                const variants = await sameProducts.filter(p => p.productColor !== parent.productColor)
                return variants
            }
        },
        productAlternativeColors: { // return available alternative colors of the product
            type: new GraphQLList(ProductType),
            args: { id: { type: GraphQLID } },
            resolve: async(parent, args) => {
                let otherColors = []
                const sameProducts = await Product.find({ productName: parent.productName })
                const variants = await sameProducts.filter(p => p.productColor !== parent.productColor)
                variants.forEach(p => {
                    otherColors.push(p.productColor)
                })
                return otherColors
            }
        }
    })
})
const CartItemType = new GraphQLObjectType({
    name: 'Cart',
    fields: () => ({
        id: { type: GraphQLID },
        buyerId: { type: GraphQLID },
        productId: { type: GraphQLID },
        productImageUrl: { type: GraphQLString },
        productName: { type: GraphQLString },
        productSize: { type: GraphQLString },
        price: { type: GraphQLFloat },
        quantity: { type: GraphQLInt }
    })
})

const StockType = new GraphQLObjectType({
    name: 'Stock',
    fields: () => ({
        productName: { type: GraphQLString },
        productColor: { type: GraphQLString },
        productSize: { type: GraphQLString },
        inStock: { type: GraphQLInt }
    })
})

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        id: { type: GraphQLID },
        productId: { type: GraphQLID },
        reviewDate: { type: GraphQLString },
        reviewText: { type: GraphQLString }
    })
})

const PaymentType = new GraphQLObjectType({
    name: 'Payment',
    fields: () => ({
        id: { type: GraphQLID },
        orderId: { type: GraphQLID },
        orderNumber: { type: GraphQLString },
        totalPrice: { type: GraphQLFloat },
        paymentMethod: { type: GraphQLString }, // Card,paypal,factura
        paymentDate: { type: GraphQLString },
        paymentDueDate: { type: GraphQLString },
        paymentStatus: { type: GraphQLString },
        order: {
            type: OrderType,
            async resolve(parent, req) {
                return Order.findOne({ orderNumber: parent.orderNumber })
            }
        }
    })
})

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        id: { type: GraphQLID },
        buyerId: { type: GraphQLID },
        productIds: { type: new GraphQLList(GraphQLString) },
        totalPrice: { type: GraphQLFloat },
        orderDate: { type: GraphQLString },
        returnDueDate: { type: GraphQLString },
        orderNumber: { type: GraphQLString },
        products: {
            type: new GraphQLList(ProductType),
            resolve: async(parent, args) => {
                let products = []
                const productIds = args.productIds
                await productIds.forEach(id => {
                    let p = Product.findById(id)
                    products.push(p)
                });

                return products
            }
        },
        payment: {
            type: PaymentType,
            async resolve(parent, req) {
                return Payment.findOne({ orderNumber: parent.orderNumber })
            }
        }
    })
})


const AuthType = new GraphQLObjectType({
    name: 'Auth',
    fields: () => ({
        id: { type: GraphQLID },
        adminId: { type: GraphQLID },
        token: { type: GraphQLString },
        tokenExpiration: { type: GraphQLInt },
    })
})


const SoldProductType = new GraphQLObjectType({
    name: 'SoldProduct',
    fields: () => ({
        id: { type: GraphQLID },
        buyerId: { type: GraphQLID },
        productName: { type: GraphQLString },
        productImageUrl: { type: GraphQLString },
        productSize: { type: GraphQLString },
        productPrice: { type: GraphQLFloat },
        soldDate: { type: GraphQLString }
    })
})

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        categoryName: { type: GraphQLString }
    })
})


module.exports = {
    MemberType: MemberType,
    ProductType: ProductType,
    SoldProductType: SoldProductType,
    AuthType: AuthType,
    ReviewType: ReviewType,
    OrderType: OrderType,
    AdminType: AdminType,
    PaymentType: PaymentType,
    CartItemType: CartItemType,
    StockType: StockType,
    CategoryType: CategoryType
}