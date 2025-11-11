import React from 'react';

import './CardProfile.css';

const CardProfile = props => {


    //make request to db based on card ID, parse data into jsx

    return(
        <div className='card-profile'>
            <div className='card-image-container'>
                <img alt="CARD IMAGE" />
            </div>
            <div className='card-info'>
                <h2> card name </h2>
                <h3> cardtype | cardcolor | cardcode </h3>
                <p>
                    description...
                </p>
            </div>
        </div>
    )
};

export default CardProfile;