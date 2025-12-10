import React from 'react';
import TileCard from '../../Shared/components/UIElements/TileCard';

import './CardSearchResults.css'


const CardSearchResults = props => {
    return(
        console.log('Rendering CardSearchResults with props', props.items),
        <div className='card-tile-display'>
            {props.items.map(card => (
                <TileCard card={card}/>    
            ))}
            <TileCard card={{title: "Test Card", cardId: "testId"}} />
        </div>
    )
}

export default CardSearchResults;