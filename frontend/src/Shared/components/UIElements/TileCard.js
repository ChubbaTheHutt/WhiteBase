import React from 'react';
import { Link } from 'react-router-dom';


import './TileCard.css';

const TileCard = props => {
    console.log('Loading tilecard with props', props, '| cardId |', props.card.cardId)

    const encodedImageUrl = encodeURIComponent(props.card.image);
    return(
        // hard coded data will be modified to be dynamic based on list of items mapped
        <Link to={`/card/${props.card.cardId}`} className='tile-card'> 
            <div className='tile-card-container'>
                <img alt='Card cannot display' src={`http://localhost:3001/api/cards/proxy/image?url=${encodedImageUrl}`}/>
                <div className='card-titles'>
                        <h3>{props.card.name}</h3>
                        {props.card.cardId}
                    <p>
                            
                    </p>    
                </div>
            </div>
        </Link>
    );

};

export default TileCard;