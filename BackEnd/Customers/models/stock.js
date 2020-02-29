const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    productName: String,
    productSize: String,
    productColor: String,
    inStock: Number
});

module.exports = mongoose.model('ProductsStocks', stockSchema)