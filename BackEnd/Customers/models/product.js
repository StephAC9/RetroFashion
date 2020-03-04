const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    productImages: [String],
    productCategories: [String], //Clothes-Shoes-bags-lingerie-accessoiries...
    productDescription: String, //details on material, production...
    productColor: String,
    productSize: String,
    productPrice: Number,
    status: String, // freezed or open
    productEntryDate: String
});

module.exports = mongoose.model('Products', productSchema)