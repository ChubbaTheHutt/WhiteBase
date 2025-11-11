import React from 'react';

import SearchBar from '../../Shared/components/Navigation/SearchBar';
import Filters from '../components/Filters';
import CardSearchResults from '../components/CardSearchResults';

const CardSearch = props => {

    const filterChangeHandler = () => {

    }; 

    const applyFiltersHandler = () => {
        //connect to backend retrieval
        //retrieve in batch, say 100 cards
        //If the user attempts to scroll past those cards, load the next 100 into cache
    };


    return(
        <div>
            <SearchBar onChange={filterChangeHandler} onSearch={applyFiltersHandler}/>
            <Filters />
            <CardSearchResults />
        </div>
    )
}

export default CardSearch;