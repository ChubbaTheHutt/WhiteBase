import React, { useEffect, useState } from 'react';

import UserInfo from '../components/UserInfo';
import DecksList from '../../Decks/components/DecksList';
import DeckCreator from '../../Decks/components/DeckCreator';

import { useHttpClient } from '../../Shared/hooks/http-hook';

import './UserProfile.css';

const UserProfile = () => {

    //user = getuser from context

    const { isLoading, sendRequest } = useHttpClient();
    
    const [deckCreatorIsOpen, setDeckCreatorIsOpen] = useState(false);
    
    //later this will be context, but for testing is hardcoded
    const [user, setUser] = useState(
        {
            username: 'idsunia',
            userId: 'user1',
            image: 'profile picture'
        }
    );

    const [userDecks, setUserDecks] = useState([]);

    const addNewDeckHandler = () => {
        //navigate to deck creation page or open modal
        setDeckCreatorIsOpen(true);
    }

    const closeDeckCreatorHandler = () => {
        setDeckCreatorIsOpen(false);
    }

    const submitNewDeckHandler = async (deckConfig) => {
        //submit new deck to backend and redirect to deck editor
        try {
            const responseData = await sendRequest('http://localhost:3001/api/decks', 'POST', JSON.stringify({
                title: deckConfig.title,
                colors: deckConfig.colors,
                creator: 'idsunia' //later will be user from context
            }), {
                'Content-Type': 'application/json'
            });

            setUserDecks(prevDecks => [...prevDecks, responseData.deck]);
            console.log('Created New Deck:', responseData.deck);
        } catch (err) {
            console.log(err);
        }

        //trigger rerender of user decks

        setDeckCreatorIsOpen(false);
    }


    useEffect(() => {
        //fetch user decks from backend

        const fetchUserDecks = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/decks/user/${user.username}`);
                setUserDecks(responseData.decks);
            } catch (err) {}
        };
        fetchUserDecks();

    }, [sendRequest]);

    console.log('User Decks:', userDecks);




    return (
        <div class="user-profile-page">
            <UserInfo user={user} />

            <div class='user-decks'>
                <h1>Your Decks</h1>
                <DecksList decks={userDecks} addNewDeckHandler={addNewDeckHandler}/>
            </div>


            {deckCreatorIsOpen &&
                <DeckCreator onClose={closeDeckCreatorHandler} onSubmit={submitNewDeckHandler} />
            }
        </div>
    );
};

export default UserProfile;