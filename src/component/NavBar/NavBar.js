import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (
        <div className='bgcolor'>
            <div className='navbar'>
                <h1>JOB'S TEST</h1>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/topic'>Topic</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>

            </div>
        </div>
    );
};

export default NavBar;