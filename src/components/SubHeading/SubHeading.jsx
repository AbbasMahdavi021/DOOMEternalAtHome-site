import React from 'react';

import images from '@/constants/images';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.axe.src} alt="baroon_image" className="axe-image" />
  </div>
);

export default SubHeading;