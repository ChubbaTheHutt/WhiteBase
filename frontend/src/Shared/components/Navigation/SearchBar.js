import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({onSearch, onChange, value}) => {
    
    // we'll add connection to backend later
    const searchSubmitHandler = () => {
        if(onSearch){
            onSearch();
        }
    };

    return(
        <form onSubmit={searchSubmitHandler}>
            <input name="name"
                placeholder="Search cards here"
                value={value}
                type="text"
                onChange={e => onChange(e.target.value)} />
        </form>
    )

}

export default SearchBar;