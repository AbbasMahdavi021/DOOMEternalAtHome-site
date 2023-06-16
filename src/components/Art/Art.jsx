import React from 'react';

import { images } from '@/constants';
import './Art.css';

const Art = ({img, title}) => {
  return (
    <div className='art'>
        <div className='art-img'>
          <img src={images[img].src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>{title}</p>
        </div>
      </div>
  )
}

export default Art;
