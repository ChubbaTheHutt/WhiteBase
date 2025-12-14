import React, { useState } from "react";

import CardItem from "./CardItem";
import './CardsList.css';
import { useHttpClient } from "../../Shared/hooks/http-hook";

const CardsList = ({ deckId, cards}) => {


    const { sendRequest, isLoading } = useHttpClient();
    //updated decklist, to be sent at end for updates
    const [newDeckList, setNewDeckList] = useState(cards);


    const onIncrement = (cardId) => {
        setNewDeckList(prev =>
            prev.map(card =>
                //search all cards in card list, if id matches, increment
                card.cardId === cardId ? { ...card, count: card.count + 1 } : card
            )
        );
    };

    const onDecrement = (cardId) => {
        setNewDeckList(prev =>
            prev.map(card =>
                card.cardId === cardId && card.count > 0
                    ? { ...card, count: card.count - 1 }
                    : card
            )
        );
    };



    const addNewCard = async (e ) => {
        e.preventDefault();
        const cardName = e.target.cardName.value;
        console.log('adding new card to deck:', cardName);
        try {
            const responseData = await sendRequest(`http://localhost:3001/api/cards/name/${cardName}`);
            const newCard = {  cardId: responseData.card.id, count: 1};
            setNewDeckList(prev => [...prev, newCard]);
        } catch (err) {
            console.log('error adding new card to deck');
        }
    };



    const submitDeckChanges = async (e) => {
        e.preventDefault();
        console.log('submitting deck changes:', newDeckList);
        
        try {
            const responseData = await sendRequest(`http://localhost:3001/api/decks/${deckId}/decklist/batch`,
                'PATCH',
                JSON.stringify({
                    deckList: newDeckList
                }),
                { 'Content-Type': 'application/json' }
            );
            return responseData;
        } catch (err) {
            console.log('error updating deck cards');
        }

        console.log('submitted deck changes');
    }

    
    // console.log('cardslist', cards)




    return (
        <div className='deck-list-grid'>
            {newDeckList.map((card) => (
                <CardItem key={card.cardId} card={card} onDecrement={onDecrement} onIncrement={onIncrement} />
            ))}

            <div className='deck-list-grid__add-card card-item'>
                <strong>Add Cards?</strong>
                <form onSubmit={addNewCard}>
                    <input type="text" name="cardName" placeholder="Enter card name to add" />
                    <button type="submit">Add Card</button>
                </form>
            </div>

            <div className='deck-list-grid__submit-changes card-item'>
                <form onSubmit={submitDeckChanges}>
                    <button type="submit">Submit Deck Changes</button>
                </form>
            </div>


        </div>
    )
}

export default CardsList;