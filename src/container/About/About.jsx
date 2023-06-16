import React from 'react';

import images from '@/constants/images';
import './About.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">

        <div className="app__aboutus-overlay flex__center">
            <img src={images.overlay.src} alt="logo_overlay" />
        </div>


        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About</h1>
                <img src={images.baronShoot.src} alt="baronShoot_image" className="baroon__image" />
                <p className="p__opensans">
                    TODO
                </p>
                <button type="button" className="custom__button">Learn More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.sword.src} alt="about_sword" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Story</h1>
                <img src={images.baronShoot.src} alt="baronShoot_image" className="baroon__image" />
                <p className="p__opensans">
                    TODO
                </p>
                <button type="button" className="custom__button">Learn More</button>
            </div>
        </div>
    </div>
);

export default AboutUs;