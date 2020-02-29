const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    productId: String,
    reviewDate: String,
    reviewText: String
});

module.exports = mongoose.model('Reviews', reviewSchema)