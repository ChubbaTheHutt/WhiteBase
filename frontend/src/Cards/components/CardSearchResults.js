import React from 'react';
import TileCard from '../../Shared/components/UIElements/TileCard';

import './CardSearchResults.css'


const CardSearchResults = props => {
    return(

        <div className='card-tile-display'>
            {props.items.map(card => {
                <TileCard/>    
            })}
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
        </div>
    )
}

export default CardSearchResults;