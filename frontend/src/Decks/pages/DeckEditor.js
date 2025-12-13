import React, { useEffect, useState } from 'react';
import CardsList from '../../Cards/components/CardsList';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const DeckEditor = () => {
    
    const {deckId} = useParams();
    const [deck, setDeck] = useState();

    const { isLoading, sendRequest } = useHttpClient();


    const [userDecks, setUserDecks] = useState([
            {
                title: 'Red Green Zaku',
                colors: ['red', 'green'],
                dateCreated: '2025/11/23 07:44:17',
                lastModified: '2026/09/26 03:43:27',
                deckId: 'deck1',
                creator: 'user1'
            },
            {
                title: 'BIG ZAM',
                colors: ['Purple', 'Black'],
                dateCreated: '2025/11/23 07:44:17',
                lastModified: '2026/09/26 03:43:27',
                deckId: 'deck2',
                creator: 'user1'
            },
            {
                title: 'Gundam Aerial',
                colors: ['blue', 'white'],
                dateCreated: '2025/11/23 07:44:17',
                lastModified: '2026/09/26 03:43:27',
                deckId: 'deck3',
                creator: 'user1',
                cards: [
                    { id: 1, name: 'Fireball', colors: 'Red', type: 'Spell' },
                    { id: 2, name: 'Forest Guardian', colors: 'Green', type: 'Creature' },
                    { id: 3, name: 'Mystic Shield', colors: 'Blue', type: 'Enchantment' },
                    { id: 4, name: 'Lightning Strike', colors: 'Red', type: 'Instant' },
                    { id: 5, name: 'Dark Ritual', colors: 'Black', type: 'Sorcery' },
                    { id: 6, name: 'Angel of Light', colors: 'White', type: 'Creature' },
                    { id: 7, name: 'Swamp Horror', colors: 'Black', type: 'Creature' },
                    { id: 8, name: 'Island Sage', colors: 'Blue', type: 'Creature' },
                ]
            }
        ]);


    useEffect(() => {
        const fetchDeck


    }, deck, sendRequest)


    return(
        <div>
            <h1>
                Deck Editor
            </h1>
            <CardsList cards={userDecks.find(deck => deck.deckId === 'deck3').cards} />
        </div>
    );
};

export default DeckEditor;