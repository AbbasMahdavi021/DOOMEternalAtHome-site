import React from 'react';

import './Element.css';

const elementItem = ({ title, tags }) => (
  <div className="app__elementitem">
    <div className="app__elementitem-head">
      <div className="app__elementitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
    </div>
    <div className="app__elementitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default elementItem;