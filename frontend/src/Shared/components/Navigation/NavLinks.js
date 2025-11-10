import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {

    //I want to later implement a dynamic set of header interactions
    //based on location in the site
    //const search = useContext(SearchContext);
    //const auth = useContext(AuthContext);
    
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/home" exact>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/search" exact>CARD SEARCH</NavLink>
            </li>
            <li>
                <NavLink to="/user" exact>USER</NavLink>
            </li>
            <li>
                <NavLink to="/login" exact>LOGIN</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;