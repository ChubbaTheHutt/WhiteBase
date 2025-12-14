//Iosefa Sunia - Web Prog Fall 2025
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 5},
        email: {type: String, required: true, unique: true}
    }
)

module.exports = mongoose.model('User', userSchema);