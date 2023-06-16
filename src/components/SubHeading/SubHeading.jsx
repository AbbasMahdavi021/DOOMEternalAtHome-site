import React from 'react';

import images from '@/constants/images';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.baronShoot.src} alt="baroon_image" className="baroon__image" />
  </div>
);

export default SubHeading;