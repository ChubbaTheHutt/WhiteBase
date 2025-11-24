//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');


const DUMMY_CARDS = [
  {
    cardId: "C-001",
    rarity: "Common",
    level: 1,
    cost: 2,
    color: "Red",
    type: "Unit",
    desc: "A basic infantry soldier trained for quick deployment.",
    zone: "Battlefield",
    trait: ["Human", "Soldier"],
    link: 0,
    ap: 3,
    hp: 5,
    sourceTitle: "Starter Deck Alpha",
    setOfOrigin: "Core Set"
  },
  {
    cardId: "C-045",
    rarity: "Rare",
    level: 2,
    cost: 4,
    color: "Blue",
    type: "Spell",
    desc: "Freeze an enemy unit, preventing it from acting next turn.",
    zone: "Hand",
    trait: ["Ice", "Control"],
    link: 1,
    ap: 0,
    hp: 0,
    sourceTitle: "Frostbinder’s Codex",
    setOfOrigin: "Glacial Dominion"
  },
  {
    cardId: "L-010",
    rarity: "Legendary",
    level: 3,
    cost: 6,
    color: "Black",
    type: "Unit",
    desc: "A shadow creature that drains life from enemy units.",
    zone: "Battlefield",
    trait: ["Demon", "Shadow"],
    link: 2,
    ap: 7,
    hp: 9,
    sourceTitle: "Tome of Eternal Night",
    setOfOrigin: "Umbral Eclipse"
  }
];


//const Card = require('../models/card');
const getCards = async (req, res, next) => {
    let cards;

    //const filters = req.body
    try {

        //put filters here
        cards = await cards.find({})
    } catch(err) {
        return res.status(500).json({ message: err });
    }

    res.json({ cards: cards.map(card => card.toObject({ getters: true })) });
};


//retrieve a single card by its ID, which should be unique
const getCardById = async (req, res, next) => { 
    const cardId = req.param.cardId
    try {
        target = await cards.findOne({cardId: cardId});
        return res.status(200).json({ card: target.toObject({ getters: true }) });
    } catch(err) {
        return res.status(500).json({ message: err });
    }
};

//create a new card for the site
const createCard = async (req, res, next) => {
    const card = req.body;
    try {

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
