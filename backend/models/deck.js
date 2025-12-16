//Iosefa Sunia - Web Prog Fall 2025
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const deckSchema = Schema(
    {
        deckId: { type: String, required: true, unique: true },
        title: {
            type: String, required: true, trim: true,
            minLength: 5, maxlength: 50
        },
        colors: {
            type: [String],
            default: []
        },
        creator: { type: String, required: true },
        deckList: {
            type: [{
                    _id: false,
                    cardId: { type: String, required: true },
                    count: { type: Number, required: true, min: 1, max: 4 }
                }],
                default: []
        }
    }
)

module.exports = mongoose.model('Deck', deckSchema);
deckSchema.plugin(uniqueValidator);