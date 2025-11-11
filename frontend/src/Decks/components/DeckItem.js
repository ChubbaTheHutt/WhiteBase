import React from "react";

import './DeckItem.css';
import { Link } from "react-router-dom";

const DeckItem = ({deck}) => {

    return(
        <Link to={`/user/decks/${deck.deckId}`}>
            <div className="deck-item-bubble">
                <img src={deck.image} alt="deckicon"/>
                <div className="deck-item-text">
                    <h2>{deck.title}</h2>
                    <h3>{deck.colors}</h3>
                </div>
            </div>
        </Link>
    )
}

export default DeckItem;