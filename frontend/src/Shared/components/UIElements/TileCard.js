import React from 'react';
import { Link } from 'react-router-dom';


import './TileCard.css';

const TileCard = props => {

    return(

        // hard coded data will be modified to be dynamic based on list of items mapped
        <Link to='/card/u1'> 
            <div className='tile-card-container'>
                <img alt='Card cannot display' />
                <div className='card-info'>
                        {props.item.title}
                    <p>
                        Subtitle    
                    </p>    
                </div>
            </div>
        </Link>
    );

};

export default TileCard;