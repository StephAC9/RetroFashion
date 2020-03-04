const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    creationDate: String
});

module.exports = mongoose.model('Admins', adminSchema)