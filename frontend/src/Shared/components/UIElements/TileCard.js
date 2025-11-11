import React from 'react';

import './TileCard.css';

const TileCard = props => {

    return(
        <div className='tile-card-container'>
            <img alt='Card cannot display' />
            <div className='card-info'>
                    title
                <p>
                    Subtitle    
                </p>    
            </div>
        </div>
    );

};

export default TileCard;