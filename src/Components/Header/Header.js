import React from 'react';
import logo from '../images/Urban Riders.png';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex'>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
            <div >
                <ul className='d-flex mt-4 nav-bar'>
                    <li>Home</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li><button>LogIn</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;