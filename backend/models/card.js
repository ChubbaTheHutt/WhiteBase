//Iosefa Sunia - Web Prog Fall 2025

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const cardSchema = Schema(
    {
        cardId: {type: String, required: true, unique: true},
        rarity: {type: String},
        level: {type: Number},
        cost: {type: Number},
        color: {type: String},
        type: {type: String},
        desc: {type: String},
        zone: {type: String},
        trait: {type: String},
        link: {type: String},
        ap: {type: Number},
        hp: {type: Number},
        sourceTitle: {type: String},
        setOfOrigin: {type: String},
        image: {type: String}
    }
)

module.exports = mongoose.model('Card', cardSchema);