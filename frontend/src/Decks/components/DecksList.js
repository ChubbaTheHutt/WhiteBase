import React from "react";

import DeckItem from "./DeckItem";

import './DecksList.css';

const DecksList = ({decks, addNewDeckHandler}) => {

    return(
        <div className="decks-grid">
            {decks.map(deck => (
                <DeckItem deck={deck}/>
            ))}
            
            <div className="deck-item-bubble">
                <button onClick={addNewDeckHandler}>Add New Deck</button>
            </div>
        </div>
    )
}

export default DecksList;