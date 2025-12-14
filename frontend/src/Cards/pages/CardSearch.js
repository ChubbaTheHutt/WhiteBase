import React, { useEffect, useState } from 'react';

import SearchBar from '../../Shared/components/Navigation/SearchBar';
import Filters from '../components/Filters';
import CardSearchResults from '../components/CardSearchResults';
import { useSearchParams } from 'react-router-dom';

import { useHttpClient } from '../../Shared/hooks/http-hook';

const CardSearch = props => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading, sendRequest } = useHttpClient();

    const [items, setItems] = useState();

    //initialize filters from name, others blank
    const [filters, setFilters] = useState({
        name: searchParams.get('name') ? searchParams.get('name') : '',
        type: '',
        rarity: '',
        color: '',
        order: ''
    });


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const queryParams = new URLSearchParams(filters).toString();
                const responseData = await sendRequest(`http://localhost:3001/api/cards?${queryParams}`);
                setItems(responseData.cards);
            } catch (err) {}
        };
        fetchItems();

        console.log(items);

    }, [sendRequest]);


    const search = async (e) => {
        e.preventDefault();
        setSearchParams(filters);

        const queryParams = new URLSearchParams(filters).toString();
        const responseData = await sendRequest(`http://localhost:3001/api/cards?${queryParams}`);
        //backend goes here
        setItems(responseData.cards);
        console.log('Cards:', responseData.cards);
        console.log('Items:', items);
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
            {!isLoading && items && <CardSearchResults filter={filters} items={items}/>}
        </div>
    )
}

export default CardSearch;