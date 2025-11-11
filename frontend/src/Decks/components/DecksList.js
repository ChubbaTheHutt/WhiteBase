import React from "react";

import DeckItem from "./DeckItem";

const DecksList = ({decks}) => {

    return(
        <div className="decks-grid">
            {decks.map(deck => (
                <DeckItem deck={deck}/>
            ))}
        </div>
    )
}

export default DecksList;