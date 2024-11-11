import React from 'react';

import { BsGithub, BsLinkedin, BsPersonHeart } from 'react-icons/bs'

import { images } from '@/constants';
import './Footer.css';

const Footer = () => (
    <div className="app__footer section__padding" id="contact">

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Disclaimer</h1>
                <p className="p__opensans">Content rights:</p>
                <p className="p__opensans">Doom Eternal & Bethesda Studio.</p>
                <p className="p__opensans">Not affiliated or endorsed</p>
                <p className="p__opensans">For official information and updates, visit:</p>
                <p className="p__opensans">
                    <a href="https://bethesda.net/en/game/doom" target='_blank'>
                        https://bethesda.net/en/game/doom
                    </a>
                </p>
            </div>


            <div className="app__footer-links_logo">
                <img src={images.logoName.src} alt="footer_logo" />
                <p className="p__opensans">&quot;The feeling of accomplishment wells up inside of you when you do the seemingly impossible.&quot;</p>
                <img src={images.axe.src} className="axe-image" style={{ marginTop: 15, transform: 'rotate(-45deg)' }} />
                <div className="app__footer-links_icons">
                    <a href="https://abbasmahdavi.vercel.app/" target="_blank">
                        <BsPersonHeart />
                    </a>
                    <a href="https://github.com/AbbasMahdavi021" target="_blank">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/abbasmahdavi/" target="_blank">
                        <BsLinkedin />
                    </a>
                </div>

            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Notice</h1>
                <p className="p__opensans">For entertainment purposes only (DON&apos;T SUE)</p>
                <p className="p__opensans">All references to Doom Eternal are used for creative inspiration</p>
                <p className="p__opensans">No copyright infringement intended</p>
                <p className="p__opensans">Respect all intellectual property rights</p>
            </div>

        </div>

        <div className="footer__copyright">
            <p className="p__opensans">2023 DEAH. All Rights reserved.</p>
        </div>

    </div>
);

export default Footer;
