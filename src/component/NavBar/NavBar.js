import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/topic'>Topic</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>

        </div>
    );
};

export default NavBar;