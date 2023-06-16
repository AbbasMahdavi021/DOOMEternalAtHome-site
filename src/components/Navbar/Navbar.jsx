import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


import React from 'react'

export const Navbar = () => {
    return (
        <nav className='app__Navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href="#home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#process">Process</a></li>
                <li className='p__opensans'><a href="#art">Concept Art</a></li>
                <li className='p__opensans'><a href="#download">Download</a></li>
            </ul>
        </nav>
    )
}
