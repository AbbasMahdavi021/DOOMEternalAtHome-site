import React from 'react';

import { images } from '@/constants';
import './Art.css';

const Art = (props) => {
  return (
    <div className='art'>
        <div className='art-img'>
          <img src={images.props.img.src} alt="art_img" />
        </div>
        <div className='art-title'>
          <p>{props.title}</p>
        </div>
      </div>
  )
}

export default Art;
