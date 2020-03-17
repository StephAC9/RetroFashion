const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    productImages: [String],
    productTargetedGroup: String,
    productType: String, //Clothes-Shoes-accessoiries
    productCategories: [String],
    productDescription: String, //details on material, production...
    productColor: String,
    productSize: String,
    productPrice: Number,
    productSalesPrice: Number,
    productOnSales: String,
    status: String, // freezed or open
    productEntryDate: String
});

module.exports = mongoose.model('Products', productSchema)