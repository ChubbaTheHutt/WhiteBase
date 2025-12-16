import React, { useState } from "react";

import CardItem from "./CardItem";
import './CardsList.css';
import { useHttpClient } from "../../Shared/hooks/http-hook";

const CardsList = ({ deckId, cards}) => {


    const { sendRequest, isLoading } = useHttpClient();
    //updated decklist, to be sent at end for updates
    const [newDeckList, setNewDeckList] = useState(cards);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [addCardStatus, setAddCardStatus] = useState(null);
    //card count handlers
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

    //function to add a new card to the deck list by name search
    const addNewCard = async (e) => {
        e.preventDefault();
        const cardName = e.target.cardName.value; //grab from text input
        console.log('adding new card to deck:', cardName);

        try {
            const responseData = await sendRequest(`http://localhost:3001/api/cards?name=${cardName}`);
            responseData.target = responseData.cards[0]; //get first card that matches
            
            if (!responseData.target) {
                console.log('No card found with that name');
                setAddCardStatus(`No card found with name '${cardName}'`)
                return;
            } else if (newDeckList.map(card => card.cardId).includes(responseData.target.cardId)) {
                console.log('Card already exists in deck');
                setAddCardStatus(`Card '${cardName}' already in deck`)
                return;
            }

            // console.log('current decklist before adding:', newDeckList.map(card => card.cardId));
            // console.log('response data for new card:', responseData);
            // console.log('cardId to add:', responseData.target.cardId);
            const newCard = {  cardId: responseData.target.cardId, count: 1};
            setNewDeckList(prev => [...prev, newCard]);
            setAddCardStatus(`Added '${cardName}' to deck!`);
        } catch (err) {
            console.log('error adding new card to deck', err);
        }
    };



    const submitDeckChanges = async (e) => {
        e.preventDefault();
        console.log('submitting deck changes:', newDeckList);
        
        const filteredList = newDeckList.filter(card => card.count > 0); //filter to local state to remove 0
        setNewDeckList(filteredList); //set state to filtered list for rerender

        //console.log('Filtered Deck List:', filteredList);
        try {
            const responseData = await sendRequest(`http://localhost:3001/api/decks/${deckId}/decklist/batch`,
                'PATCH',
                JSON.stringify({
                    newList: filteredList
                }),
                { 'Content-Type': 'application/json' }
            );
            
            console.log('submitted deck changes');
            setSubmitStatus('Updates Submitted!');
            return responseData;
        } catch (err) {
            console.log('error updating deck cards');
            setSubmitStatus(`Could not update deck.`);
        }

    }

    
    // console.log('cardslist', cards)




    return (
        <div className='deck-list-grid'>
            {newDeckList.map((card) => (
                <CardItem key={card.cardId} card={card} onDecrement={onDecrement} onIncrement={onIncrement} />
            ))}

            <div className='deck-list-grid__add-card card-item'>
                <strong>Add Cards?</strong>
                <form className="add-card-input" onSubmit={addNewCard}>
                    <input type="text" name="cardName" placeholder="Enter card name to add" />
                    <button type="submit">Add Card</button>
                </form>
                {addCardStatus && <p>{addCardStatus}</p>}
            </div>

            <div className='deck-list-grid__submit-changes card-item'>
                Remember to submit changes!
                <form onSubmit={submitDeckChanges}>
                    <button type="submit">Submit Deck Changes</button>
                </form>

                {submitStatus && <p>{submitStatus}</p>}
            </div>


        </div>
    )
}

export default CardsList;