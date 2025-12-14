import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../Shared/hooks/http-hook";

import './CardItem.css'

const CardItem = ({card, onIncrement, onDecrement}) => {

    const [cardItem, setCardItem] = useState();
    const { isLoading, sendRequest } = useHttpClient();
    const count = card.count;

    // console.log('loading card item', card)
    
    //get card from db
    useEffect(() => {
        const fetchCard = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/cards/${card.cardId}`);
                setCardItem(responseData.card);
            } catch (err) {
                console.log('deck card item loading error');
            }
        };
        fetchCard();
    }, [sendRequest]);

    // console.log('loaded card item', cardItem);
    const encodedImageUrl = cardItem ? encodeURIComponent(cardItem.image) : '';

   
    if(!cardItem) {
        return <div>Loading...</div>
    }

    return(

        <div className="card-item">
            <div className="card-item__image-stack">
            {[...Array(count)].map((_, index) => (
                <div key={index} className='card-item__image'>
                    <img 
                        alt='Card cannot display' 
                        src={`http://localhost:3001/api/cards/proxy/image?url=${encodedImageUrl}`}
                        style={{top: index * -10,
                                 left: index * 15,
                                 zIndex: index}}
                    />
                </div>
            ))}
            </div>
            <div className='card-item__details'>

                <h3>{cardItem.name}</h3>
                <div className='card-item__count'>
                    <button onClick={() => onIncrement(card.cardId)} disabled={card.count >= 4}>+</button>
                    <p>Copies: {count}</p>
                    <button onClick={() => onDecrement(card.cardId)} disabled={card.count <= 0}>-</button>
                </div>
            </div>
        </div>
    )
}
//pass decrement and increment backwards to cardslist, count will be updated from there

export default CardItem;