import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SearchBar = ({onSearch, onChange, value}) => {
    
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        //if onSearch present from props (meaning this search bar is integrated with filters) default to that
        if(onSearch){
            onSearch();
        } else {
            //otherwise navigate to search page with query
            Navigate(`/cards?name=${value}`);
        }
    };

    return(
        <form onSubmit={searchSubmitHandler}>
            <input name="name"
                placeholder="Search cards here"
                value={value}
                type="text"
                onChange={onChange} />
        </form>
    )

}

export default SearchBar;