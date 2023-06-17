import React from 'react';

import { SubHeading, Element } from '@/components';
import { data, images } from '@/constants';
import './Process.css';

const Process = () => (
    <div className="app__process flex__center section__padding" id="process">
        <div className="app__process-title">
            <SubHeading title="Discover the origins and the enduring mission to RAZE HELL." />
            <h1 className="headtext__cormorant">The Process</h1>
        </div>

        <div className="app__process-element">
            <div className="app__process-element_technology  flex__center">
                <p className="app__process-element_heading">Technologies</p>
                <div className="app__process_element_items">
                    {data.technologies.map((technology, index) => (
                        <Element key={technology.title + index} title={technology.title} tags={technology.tags} />
                    ))}
                </div>
            </div>

            <div className="app__process-element_img">
                <img src={images.baronBlender.src} alt="element__img" />
            </div>

            <div className="app__process-element_assets  flex__center">
                <p className="app__process-element_heading">Assets</p>
                <div className="app__process_element_items">

                    <div className="app__elementitem">
                        <div className="app__elementitem-head">
                            <div className="app__elementitem-name">
                                <p className="p__cormorant" style={{ color: '#DCCA87' }}>Weapons</p>
                            </div>
                        </div>
                        <div className='app__elementitem-sub'>
                            <div className='asset-images'>
                                <div className='asset-image'>
                                    <img src={images.rocket.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.bullet2.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.mine.src} alt="asset_image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="app__elementitem">
                        <div className="app__elementitem-head">
                            <div className="app__elementitem-name">
                                <p className="p__cormorant" style={{ color: '#DCCA87' }}>DROPS</p>
                            </div>
                        </div>
                        <div className='app__elementitem-sub'>
                            <div className='asset-images'>
                                <div className='asset-image'>
                                    <img src={images.bulletDrop.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.fireRateDrop.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.healthDrop.src} alt="asset_image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="app__elementitem">
                        <div className="app__elementitem-head">
                            <div className="app__elementitem-name">
                                <p className="p__cormorant" style={{ color: '#DCCA87' }}>HUD</p>
                            </div>
                        </div>
                        <div className='app__elementitem-sub'>
                            <div className='asset-images'>
                                <div className='asset-image'>
                                    <img src={images.armor.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.fHeart.src} alt="asset_image" />
                                </div>
                                <div className='asset-image'>
                                    <img src={images.damage.src} alt="asset_image" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div style={{ marginTop: 15 }}>
            <a href="#art">
                <button type="button" className="custom__button">Explore</button>
            </a>
        </div>
    </div>
);

export default Process;