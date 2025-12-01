//Iosefa Sunia - Web Prog Fall 2025
const express = require('express');
const { check } = require('express-validator');

const decksControllers = require('../controllers/decks-controllers');

const router = express.Router();

router.get('/', decksControllers.getDecks);
router.get('/user/:username', decksControllers.getDecksByUser);
router.get('/:did', decksControllers.getDeckById);

router.post('/', decksControllers.createDeck);
    //add validators
router.patch('/:did', decksControllers.updateDeckInfo);
    //add validators
router.delete('/:did', decksControllers.deleteDeck);

router.patch('/:did/decklist/add', decksControllers.addCardToDeck);
router.patch('/:did/decklist/modify', decksControllers.modifyNumCopies);

module.exports = router;