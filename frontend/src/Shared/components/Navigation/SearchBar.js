import React, { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('Search');

    const inputChangeHandler = e => {
        setSearch(e.target.value);
    }
   
    const submitSearchHandler = () => {
        
    }
    // we'll add connection to backend later


    return(
        <div>
            <input 
                placeholder="Search cards here"
                type="text"
                onChange={inputChangeHandler} />
        </div>
    )

}

export default SearchBar;