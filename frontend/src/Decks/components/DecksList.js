import React from "react";

import DeckItem from "./DeckItem";

import './DecksList.css';

const DecksList = ({decks}) => {

    return(
        <div className="decks-grid">
            {decks.map(deck => (
                <DeckItem deck={deck}/>
            ))}
            
            <div className="deck-item-bubble">
                <button>Add New Deck</button>
            </div>
        </div>
    )
}

export default DecksList;