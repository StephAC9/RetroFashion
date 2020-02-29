const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    buyerId: String,
    productId: String,
    productName: String,
    productSize: String,
    productColor: String,
    imageUrl: String,
    price: Number,
    quantity: Number,
});

module.exports = mongoose.model('CartItems', cartItemSchema)