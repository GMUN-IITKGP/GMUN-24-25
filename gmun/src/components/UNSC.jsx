import React from 'react';
import WorldMap from './WorldMap';
import './committee.css';

const UNSC = () => (
  <div className="committee-container">
    <div className="committee-map">
      <WorldMap title="DISEC" mapDataFile="mapdata.js" />
    </div>
    <div className="committee-content">
      <h2>UNSC</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Chair: Maria Garcia</p>
      <p>Vice Chair: Ahmed Khan</p>
    </div>
  </div>
);

export default UNSC;

