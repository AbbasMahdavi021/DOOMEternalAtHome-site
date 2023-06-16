import React from 'react';

import { images } from '@/constants';
import './ConceptArt.css';

const ConceptArt = () => (
  <div className="app__bg flex__center2" id="art">
    <div className="app__process-title">
      <h1 className="headtext__cormorant">Concept "Art"</h1>
    </div>

    <div className='concept-art'>
      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

      <div className='art'>
        <div className='art-img'>
          <img src={images.header.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>Title</p>
        </div>
      </div>

    </div>

  </div>
);

export default ConceptArt;