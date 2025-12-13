import React, { useEffect, useState } from 'react';

import './CardProfile.css';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../Shared/hooks/http-hook';

const CardProfile = () => {
    const {cardId} = useParams();
    const { isLoading, sendRequest } = useHttpClient();

    const [card, setCard] = useState();

    //make request to db based on card ID, parse data into jsx
    useEffect(() => {
        const fetchCard = async () => {
            try{
                console.log(cardId)
                setCard(await sendRequest(`http://localhost:3001/api/cards/${cardId}`));
            } catch (err) {
            }
        }
        fetchCard();

        console.log(card)
    }, [sendRequest]);

    if(!card){
        return <div>404, Page Not Found. Please check your URL.</div>
    } else {
        console.log(card)
    }


    const encodedImageUrl = encodeURIComponent(card.card.image);
    return(
        <div className='card-profile'>
            <div className='card-image-container'>
                <img alt={card.card.image} src={`http://localhost:3001/api/cards/proxy/image?url=${encodedImageUrl}`} />
            </div>
            <div className='card-info'>
                <h2> {card.card.name} <br></br>{cardId}</h2>
                <h3> Type - {card.card.type} 
                    <br></br>Color - {card.card.color} 
                    <br></br>  </h3>
                <p>
                    <strong>Description:</strong>    
                    {card.card.desc}
                </p>
            </div>
        </div>
    )
};

export default CardProfile;