import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const inputChangeHandler = e => {
        setSearch(e.target.value);
    }
   
    const submitSearchHandler = e => {
        navigate('/search');
    }
    // we'll add connection to backend later

    return(
        <form onSubmit={submitSearchHandler}>
            <input name="cardName"
                placeholder="Search cards here"
                type="text"
                onChange={inputChangeHandler} />
        </form>
    )

}

export default SearchBar;