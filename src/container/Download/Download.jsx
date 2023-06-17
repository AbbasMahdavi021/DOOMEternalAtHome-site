"use client"

import React from 'react';

import { SubHeading } from '@/components';
import { images } from '@/constants';

const Download = () => {

    const handleDownloadJar = () => {
        const link = document.createElement('a');
        link.href = '/DEAH.jar';
        link.download = 'DoomEternalAtHome.jar';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (

        <div className="app__bg app__wrapper section__padding" id="download">
            <div className="app__wrapper_info">
                <SubHeading title="Play DEAH!" />
                <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Download NOW!</h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans">Experience The Thrill Of DOOM Eternal At Home, A Game That Brings The Action-Packed Adventure To Your Home!</p>
                    <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Get The Game for FREE</p>
                    <p className="p__opensans">Get Ready To Embark On An Epic Journey By Downloading The Game JAR File (91MB)</p>
                </div>
                <button onClick={handleDownloadJar} type="button" className="custom__button" style={{ marginTop: '2rem' }}>Download</button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.cardDrop.src} alt="header_img" id='card-drop' />
                <img src={images.header.src} alt="header_img" id='top-img' />
            </div>
        </div>
    );
}




export default Download;