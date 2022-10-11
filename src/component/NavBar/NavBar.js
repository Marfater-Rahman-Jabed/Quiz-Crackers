import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (
        <div className='bgcolor'>
            <div className='navbar'>
                <div className='flexy'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6QRBkRxK3nPORDl8xcgwUGmJsxuP6kJq5Q&usqp=CAU" alt="" />
                    <h1>JOB'S TEST</h1>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                    <NavLink to='/topic'>Topic</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>

            </div>
        </div>
    );
};

export default NavBar;