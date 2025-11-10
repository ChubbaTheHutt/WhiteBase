import React from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

const MainNavigation = props => {

    return(
        <div> 
            <MainHeader>
                <h1>WHITEBASE</h1>
                <SearchBar/>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </div>
    )
}

export default MainNavigation;
