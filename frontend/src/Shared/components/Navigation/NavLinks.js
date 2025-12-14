import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = props => {

    //I want to later implement a dynamic set of header interactions
    //based on location in the site
    //const search = useContext(SearchContext);
    //const auth = useContext(AuthContext);
    
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/home" className="nav-link">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/search">CARD SEARCH</NavLink>
            </li>
            <li>
                <NavLink to="/user">USER</NavLink>
            </li>
            <li>
                <NavLink to="/login">LOGIN</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;