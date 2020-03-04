const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    buyerId: String,
    productIds: [String],
    totalPrice: Number,
    orderDate: String,
    returnDueDate: String,
    orderNumber: String,
    orderStatus: String
});

module.exports = mongoose.model('Orders', orderSchema)