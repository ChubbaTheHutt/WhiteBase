//Iosefa Sunia - Web Prog Fall 2025
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const deckSchema = Schema(
    {
        deckId: {type: String, required: true, unique: true},
        title: {type: String, required: true, minLength: 5},
        colors: {type: [String]},
        creator: {type: String, required: true},
        deckList: {type: [{cardId: String, count: Number}], default: []}
    }
)

module.exports = mongoose.model('Deck', deckSchema);
