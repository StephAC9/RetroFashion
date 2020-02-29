const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const soldProductSchema = new Schema({
    buyerId: String,
    productName: String,
    productImageUrl: String,
    productSize: String,
    productPrice: Number,
    soldDate: String
});

module.exports = mongoose.model('SoldProducts', soldProductSchema)