//Iosefa Sunia - Web Prog Fall 2025
const express = require('express');
const { check } = require('express-validator');

const cardsControllers = require('../controllers/cards-controllers');

const router = express.Router();

router.get('/', cardsControllers.getCards);

router.get('/proxy/image', cardsControllers.proxyImages);

router.get('/autocomplete', cardsControllers.autocompleteCardNames);

router.get('/:cardId', cardsControllers.getCardById);


router.post('/', 
        [
                check('cardId').not().isEmpty(),
                check('name').not().isEmpty(),
                check('rarity').not().isEmpty(),
                check('type').not().isEmpty()
        ],
        cardsControllers.createCard);
        
router.patch('/:cardId', cardsControllers.updateCard);
        
router.delete('/:cardId', cardsControllers.deleteCard);

module.exports = router;