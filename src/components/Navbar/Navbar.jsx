"use client"

import React, { useState } from 'react';
import { RxHamburgerMenu, RxEyeClosed } from 'react-icons/rx';

import images from '@/constants/images';
import './Navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href="#home">
                    <img src={images.logo.src} alt="logo" />
                </a>
            </div>

            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#process">Process</a></li>
                <li className='p__opensans'><a href="#art">Concept Art</a></li>
                <li className='p__opensans'><a href="#trailer">Trailer</a></li>
                <li className='p__opensans'><a href="#download">Download</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>

            <div className="app__navbar-abbas">
                <a href="https://abbasmahdavi.com" className="p__opensans" target='_blank'>By Abbas M</a>
                <div />
                <a href="https://github.com/AbbasMahdavi021/DOOM-Eternal-At-Home" className="p__opensans" target='_blank'>Github Repo</a>
            </div>

            <div className="app__navbar-smallscreen">
                <RxHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <RxEyeClosed fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#process" onClick={() => setToggleMenu(false)}>Process</a></li>
                            <li><a href="#art" onClick={() => setToggleMenu(false)}>Concept Art</a></li>
                            <li><a href="#download" onClick={() => setToggleMenu(false)}>Download</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;