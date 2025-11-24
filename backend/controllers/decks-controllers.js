//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');

const DUMMY_DECKS = [
  {
    deckId: "D-001",
    name: "Blazing Assault",
    cards: [
      { cardId: "C-001", count: 3 },
      { cardId: "C-007", count: 2 },
      { cardId: "C-012", count: 1 }
    ]
  },
  {
    deckId: "D-002",
    name: "Frozen Dominion",
    cards: [
      { cardId: "C-045", count: 2 },
      { cardId: "C-052", count: 3 },
      { cardId: "L-010", count: 1 }
    ]
  }
];


const getDecks = async (res, req, next) => {
}

const getDecksByUserId = async (req, res, next) => {
}

const getDeckById = async (req, res, next) => {}

const createDeck = async (req, res, next) => {}

const updateDeckInfo = async (req, res, next) => {}

const addCardToDeck = async (req, res, next) => {}

const removeCardFromDeck = async (req, res, next) => {}

const deleteDeck = async (req, res, next) => {
    const deckId = req.body.deckId;
    try{
        target = DUMMY_DECKS.find(d => {d.deckId === deckId});
        res.status(200).json({message: 'Deleted deck.', deck: target});
    } catch(err){
        res.status(500).json({message: err});
    }
};