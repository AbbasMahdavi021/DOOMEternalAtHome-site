import React from 'react';

import { Art } from '@/components';
import { data } from '@/constants';

import './ConceptArt.css';

const ConceptArt = () => (
  <div className="app__bg flex__center2" id="art">
    <div className="app__process-title">
      <h1 className="headtext__cormorant">Concept &quot;Art&quot;</h1>
    </div>

    <div className='concept-art'>
      {data.arts.map((art, index) => (
        <Art key={index} img={art.img} title={art.title} />
      ))}

    </div>

  </div>
);

export default ConceptArt;