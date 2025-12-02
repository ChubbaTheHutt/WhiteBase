//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');

const Card = require('../models/card');

const getCards = async (req, res, next) => {
    let cards;

    //const filters = req.body
    try {

        //put filters here
        cards = await Card.find({})
    } catch(err) {
        return res.status(500).json({ message: err });
    }

    res.json({ cards: cards.map(card => card.toObject({ getters: true })) });
};


//retrieve a single card by its ID, which should be unique
const getCardById = async (req, res, next) => { 
    const cardId = req.param.cardId
    try {
        target = await Card.findOne({cardId: cardId});
        return res.status(200).json({ card: target.toObject({ getters: true }) });
    } catch(err) {
        return res.status(500).json({ message: err });
    }
};

//create a new card for the site
const createCard = async (req, res, next) => {
    const card = req.body;
    try {
        const created_card = new Card(card);
        await created_card.save();
        res.status(201).json({ card: created_card.toObject({ getters: true }) });
    } catch(err) {
        res.status(500).json({ message: err });
    }
}

//update an existing card's information
const updateCard = async (req, res, next) => {
    const cardId = req.params.cardId;
    const updates = req.body;
    try {
        target = await DUMMY_CARDS.findOneAndUpdate({cardId: cardId},
            updates,
        {new: true, runValidators: true, useFindAndModify: false});
    } catch(err) {
        res.status(500).json({ message: err });
    };
};

//delete a card
const deleteCard = async (req, res, next) => {
    const cardId = req.params.cardId;
    try {
        target = await DUMMY_CARDS.findOneAndDelete({cardId: cardId});
        res.status(200).json({ message: 'Card deleted.', card: target });
    } catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getCards = getCards;
exports.getCardById = getCardById;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.deleteCard = deleteCard;
