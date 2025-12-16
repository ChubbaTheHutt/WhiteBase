import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { useHttpClient } from '../../hooks/http-hook';
const SearchBar = ({onSearch, onChange, value}) => {
    

    const location = useLocation();
    const { sendRequest, isLoading } = useHttpClient();
    const [autocomplete, setAutocomplete] = useState([]);

    const searchSubmitHandler = (e) => {
        //if onSearch present from props (meaning this search bar is integrated with filters) default to that
        if(onSearch){
            onSearch(e);
        } else {
            //otherwise navigate to search page with query
            Navigate(`/cards?name=${value}`);
        }
    };

    //separate filter change for name so we can add autocomplete
    useEffect(() => {
        const fetchAutocomplete = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/cards/autocomplete?name=${value}`);
                setAutocomplete(responseData.cards);
                console.log('Autocomplete:', responseData.cards);
            } catch (err) {
                console.log(err);
            }
        };

        if(value.length > 2){
            fetchAutocomplete();
        } else {
            setAutocomplete([]);
        }
    }, [value, sendRequest]);
    

    return(
        <form onSubmit={searchSubmitHandler} className={location.pathname === '/search' ? 'search-bar-form' : 'header-search-bar-form'}>
            <input name="name" className='styled-input'
                placeholder="Search cards here"
                value={value}
                type="text"
                onChange={onChange}
                list="autocomplete-list" />
            {autocomplete && <datalist id="autocomplete-list">
                {autocomplete.map(card => (
                    <option key={card.id} value={card.name} />
                ))}
            </datalist>}
        </form>
    )

}

export default SearchBar;