import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../component/Home/Home';
import NavBar from '../component/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;