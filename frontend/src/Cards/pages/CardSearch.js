import React, { useState } from 'react';

import SearchBar from '../../Shared/components/Navigation/SearchBar';
import Filters from '../components/Filters';
import CardSearchResults from '../components/CardSearchResults';
import { useSearchParams } from 'react-router-dom';

const CardSearch = props => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [items, setItems] = useState([]);

    const [filters, setFilters] = useState({
        name: searchParams.get('name'),
        type: searchParams.get('type'),
        color: searchParams.get('color'),
        order: searchParams.get('order')
    });

    const search = e => {
        e.preventDefault();
        setSearchParams(filters);

        
        //backend goes here
        setItems([]);
    }

    const filterChangeHandler = e => {
        const {name, value} = e.target;
         
        setFilters({
            ...filters,
            [name]: value
        })

        console.log(filters);
    }

    return(
        <div>
            <SearchBar  onSearch={search} onChange={filterChangeHandler} value={filters.name}/>
            <Filters onSubmit={search} onChange={filterChangeHandler} filters={filters}/>
            <CardSearchResults filter={filters} items={items}/>
        </div>
    )
}

export default CardSearch;