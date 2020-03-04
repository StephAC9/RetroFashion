const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    buyerId: String,
    orderId: String,
    orderNumber: String,
    totalPrice: Number,
    paymentMethod: String, // Card,paypal,factura
    paymentDate: String,
    paymentDueDate: String,
    paymentStatus: String
});

module.exports = mongoose.model('Payments', paymentSchema)