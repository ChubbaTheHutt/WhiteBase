//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');
const { v4: uuid } = require('uuid');
const Deck = require('../models/deck');

//get all decks
const getDecks = async (req, res, next) => {
  try{
      const decks = await Deck.find({});
      res.status(200).json({ decks });
  } catch (err){
      res.status(500).json({message: err});
  }
}

//get all decks created by a user
const getDecksByUser = async (req, res, next) => {
    const username = req.params.username;
    try{
        const decks = await Deck.find({creator: username});
        res.status(200).json({ decks });
    } catch (err){
        res.status(500).json({message: err});
    }
}

//get a single deck by its unique ID
const getDeckById = async (req, res, next) => {
    const deckId = req.params.did;
    try{
        const deck = await Deck.findOne({deckId: deckId});
        res.status(200).json({ deck });
    } catch (err){
        res.status(500).json({message: err});
    }
}

//create a new deck
const createDeck = async (req, res, next) => {
    const { title, colors, deckList, creator } = req.body;

    const created_deck = new Deck({
        deckId: uuid(),
        title,
        colors,
        creator,
        deckList
    });
    try{
        await created_deck.save();
    } catch (err){
        return res.status(500).json({message: err});
    }
    res.status(201).json({deck: created_deck.toObject({getters: true})});
}

//update deck information (not contents like decklist)
const updateDeckInfo = async (req, res, next) => {
    const { title } = req.body;
    const deckId = req.params.did;
    try{
      target = await Deck.findOneAndUpdate(
        {deckId: deckId},
        {title: title},
        {new: true, runValidators: true}
      );
      res.status(200).json({message: 'Updated deck info.', deck: target});
    } catch (err){
        res.status(500).json({message: err});
    }
}

//add a new card to a deck's decklist
const addCardToDeck = async (req, res, next) => {
  const deckId = req.params.did;
  const {cardId} = req.body;
  try{
    target = await Deck.findOne({deckId: deckId});
    if(!target){
      return res.status(404).json({message: 'Deck not found.'});
    }
  } catch(err){
    return res.status(500).json({message: err});
  }

  const existingEntry = target.deckList.find(c => c.cardId === cardId);
  if(existingEntry){
    existingEntry.count += 1;
  } else{
    target.deckList.push({cardId: cardId, count: 1});
  }

  try{
    await target.save();
    res.status(200).json({message: 'Added card to deck.', deck: target.deckList, cardId: cardId});
  } catch(err){
    res.status(500).json({message: err});
  }
}

//modify the number of copies of a card in a deck's decklist (remove if count <=0)
const modifyNumCopies = async (req, res, next) => {
  const deckId = req.params.did;
  const {cardId, delta} = req.body;
  try{
    target = await Deck.findOne({deckId: deckId});
    if(!target){
      return res.status(404).json({message: 'Deck not found.'});
    }
  }catch(err){
    return res.status(500).json({message: err});
  }

  const cardEntry = target.deckList.find(c => c.cardId === cardId);
  if(!cardEntry){
    return res.status(404).json({message: 'Card not found in deck.'});
  }
  cardEntry.count += delta;
  if(cardEntry.count <= 0){
    target.deckList = target.deckList.filter(c => c.cardId !== cardId);
  }

  try{
    await target.save();
    res.status(200).json({message: 'Modified number of copies.', deck: target.deckList, cardId: cardId});
  } catch(err){
    res.status(500).json({message: err});
  }
}

//assumes frontend tracks state of deck, batch update decklist (IE replace existing decklist)
const batchUpdateDeckList = async (req, res, next) => {
    const deckId = req.params.did
    const { newList } = req.body;
    try{
        target = await Deck.findOne({deckId: deckId});
        if(!target){
            return res.status(404).json({message: 'Deck not found.'});
        }
    } catch(err){
        return res.status(500).json({message: err});
    }

    target.deckList = newList;
    try{
        await target.save();
        res.status(200).json({message: 'Batch updated decklist.', decklist: target.deckList});
    } catch(err){
        res.status(500).json({message: err});
    }
}


//delete a deck
const deleteDeck = async (req, res, next) => {
    const deckId = req.params.did;
    try{
        target = await Deck.findOneAndDelete({deckId: deckId});
        res.status(200).json({message: 'Deleted deck.', deck: target});
    } catch(err){
        res.status(500).json({message: err});
    }
};

exports.getDecks = getDecks;
exports.getDecksByUser = getDecksByUser;
exports.getDeckById = getDeckById;
exports.createDeck = createDeck;
exports.updateDeckInfo = updateDeckInfo;
exports.addCardToDeck = addCardToDeck;
exports.modifyNumCopies = modifyNumCopies;
exports.deleteDeck = deleteDeck;
exports.batchUpdateDeckList = batchUpdateDeckList;