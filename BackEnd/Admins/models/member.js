const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    Password: String,
    phoneNumber: String,
    deliveryAddress: String,
    creditCardNumber: String,
    favoritesIdList: [String], // list of productId that the user wants to save as favorites
    creationDate: String
});

module.exports = mongoose.model('Members', memberSchema)