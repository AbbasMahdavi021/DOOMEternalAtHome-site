import React from 'react';

import images from '@/constants/images';
import './About.css';

const About = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">

        <div className="app__aboutus-overlay flex__center">
            <img src={images.overlay.src} alt="logo_overlay" />
        </div>


        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About</h1>
                <img src={images.baronShoot.src} alt="baronShoot_image" className="axe-image" />
                <p className="p__opensans">
                    Welcome to DEAH!<br />
                    This project is a visually stunning 2D game inspired by Doom Eternal,
                    where one player controls Doom Guy and the other plays as the Baron of Hell.
                    Engage in intense battles within a confined area, filled with boxes forming the map.
                    Break boxes to collect loot, improve your stats, and gain health.
                </p>
                <div className="empty__div" />
            </div>


            <div className="app__aboutus-content_sword flex__center">
                <img src={images.sword.src} alt="about_sword" />
            </div>

            <div className="app__aboutus-content_story">
                <h1 className="headtext__cormorant">Story</h1>
                <img src={images.doomShoot.src} alt="baronShoot_image" className="axe-image" />
                <p className="p__opensans">
                    Immerse yourself in the captivating story of DEAH.
                    Set in the world of Doom Eternal, this 2D game brings you
                    a thrilling narrative where Doom Guy and the Baron of Hell
                    clash in epic battles. Uncover the secrets behind their rivalry
                    and navigate through challenging rounds as you experience the
                    intense journey of these iconic characters.
                </p>
                <a href="#process">
                    <button type="button" className="custom__button">Learn More</button>
                </a>
            </div>

        </div>
    </div>
);

export default About;