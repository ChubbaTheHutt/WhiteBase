import React, { useEffect, useState } from 'react';

import UserInfo from '../components/UserInfo';
import DecksList from '../../Decks/components/DecksList';

import { useHttpClient } from '../../Shared/hooks/http-hook';

import './UserProfile.css';

const UserProfile = () => {

    //user = getuser from context

    const { isLoading, sendRequest } = useHttpClient();

    
    //later this will be context, but for testing is hardcoded
    const [user, setUser] = useState(
        {
            username: 'idsunia',
            userId: 'user1',
            image: 'p 12e 1e rofile picture'
        }
    )

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
        //fetch user decks from backend

        const fetchUserDecks = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/decks/user/${user.username}`);
                setUserDecks(responseData.decks);
            } catch (err) {}
        };
        fetchUserDecks();

    }, [sendRequest ]);

    console.log('User Decks:', userDecks);




    return (
        <div class="user-profile-page">
            <UserInfo user={user} />

            <div class='user-decks'>
                <h1>Your Decks</h1>
                <DecksList decks={userDecks} />
            </div>
        </div>
    );
};

export default UserProfile;