//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');

const Card = require('../models/card');

const getCards = async (req, res, next) => {
    let cards;

    const filters = {};

    console.log(req.query);

    if (req.query.name) { filters.name = { $regex: req.query.name, $options: 'i' }; }
    if (req.query.type) { filters.type = req.query.type; }
    if (req.query.rarity) { filters.rarity = req.query.rarity; }
    if (req.query.color) { filters.color = req.query.color; }
    if (req.query.orderBy) { filters.orderBy = req.query.orderBy; }

    console.log(filters);
    //IosefaSunia
    try {
        cards = await Card.find(filters)
    } catch(err) {
        return res.status(500).json({ message: err });
    }

    res.json({ cards: cards.map(card => card.toObject({ getters: true })) });
};


//retrieve a single card by its ID, which should be unique
const getCardById = async (req, res, next) => { 
    console.log('params:', req.params)
    const cardId = req.params.cardId
    try {
        target = await Card.findOne({cardId: cardId});
        console.log(target)
        return res.status(200).json({ card: target.toObject({ getters: true }) });
    } catch(err) {
        return res.status(500).json({ message: `Could not return a card with that Id, ${req.param.cardId}`, error: err });
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
        target = await Card.findOneAndUpdate({cardId: cardId},
            updates,
        {new: true, runValidators: true});

        res.status(200).json({ message: "Card updated.", card: target });
    } catch(err) {
        res.status(500).json({ message: "Could not update card." });
    };
};

//delete a card
const deleteCard = async (req, res, next) => {
    const cardId = req.params.cardId;
    try {
        target = await Card.findOneAndDelete({cardId: cardId});
        res.status(200).json({ message: 'Card deleted.', card: target });
    } catch(err) {
        res.status(500).json({ message: err });
    }
};

const proxyImages = async (req, res, next) => {
    //this function will proxy images from the GCG website
    try {
        const url = req.query.url;
        if (!url) {
            return res.status(400).json({ message: "No URL provided." });
        }

        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ message: 'Failed to fetch image.' });
        }

        const buffer = await response.arrayBuffer();
        res.setHeader('Content-Type', response.headers.get('content-type'));
        res.send(Buffer.from(buffer));
    } catch (err) {
        res.status(500).json({ message: "Could not proxy image.", error: err });
    }
};



exports.getCards = getCards;
exports.getCardById = getCardById;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.deleteCard = deleteCard;
exports.proxyImages = proxyImages;