import React from 'react';
import WorldMap from './WorldMap';
import './committee.css';

const UNHRC = () => (
  <div className="committee-container">
    <div className="committee-map">
      <WorldMap title="UNHRC" mapDataFile="mapdata.js" />
    </div>
    <div className="committee-content">
      <h2>DISEC</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Chair: Maria Garcia</p>
      <p>Vice Chair: Ahmed Khan</p>
    </div>
  </div>
);

export default UNHRC;

