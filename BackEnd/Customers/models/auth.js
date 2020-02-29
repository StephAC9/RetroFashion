const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const authSchema = new Schema({
    memberId: String,
    token: String,
    tokenExpiration: Number
});
module.exports = mongoose.model('AuthData', authSchema)