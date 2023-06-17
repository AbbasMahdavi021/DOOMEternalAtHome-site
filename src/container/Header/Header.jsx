import React from 'react';

import { SubHeading } from '@/components';
import images from '@/constants/images';
import './Header.css';

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="The only thing they fear... is you." />
            <h1 className="app__header-h1">DOOM Eternal At Home</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>
                Hell&apos;s armies have invaded Earth.
                Become the Slayer or Baron of Hell in an epic two-player battle
                to conquer the enemy and prevent the final destruction of humanity
                or ensure its inevitable downfall.
            </p>
            <a href="#about">
                <button type="button" className="custom__button">Dive In</button>
            </a>
        </div>

        <div className="app__wrapper_img">
            <img src={images.cardDrop.src} alt="header_img" id='card-drop' />
            <img src={images.header.src} alt="header_img" id='top-img' />
        </div>
    </div>
);

export default Header;