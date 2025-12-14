import React, { useEffect, useState } from 'react';
import CardsList from '../../Cards/components/CardsList';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const DeckEditor = () => {
    
    const {deckId} = useParams();
    const [deck, setDeck] = useState();

    const { isLoading, sendRequest } = useHttpClient();

    const [deckList, setDeckList] = useState();

    useEffect(() => {
        const fetchDeck = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/decks/${deckId}`);
                setDeck(responseData.deck);
            } catch (err) {}
        };
        fetchDeck();

    }, [sendRequest, deckId]); //we only want this to run once we load a component, or send a request to the server (ie making an update operation)

    if(!deck) {
        console.log('could not load deck', deck)
        return <h2>Loading Deck...</h2>
    }else{
        console.log('Loaded Deck:', deck);
    }

    

    return(
        <div>
            <h1 style={{marginLeft: '20px', marginTop: '20px'}}>
                <i><u>DECK EDITOR: {deck.title}</u></i>
            </h1>
            <CardsList deckId={deck.deckId} cards={deck.deckList}/>
        </div>
    );
};

export default DeckEditor;