import React, { useState } from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';

const MainNavigation = props => {

    const location = useLocation();
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = new useState('');

    const searchChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <div> 
            <MainHeader>
                <h1>WHITEBASE</h1>
                { location.pathname !== '/search' && 
                    <SearchBar 
                        value={searchQuery}
                        onChange={searchChangeHandler}
                        onSearch={() => navigate(`/search?name=${encodeURIComponent(searchQuery)}`)}
                /> }
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </div>
    )
}

export default MainNavigation;
