import React from 'react';
import WorldMap from './WorldMap';
import './committee.css';

const DISEC = () => (
  <div className="committee-container">
    <div className="committee-map">
      <WorldMap title="DISEC" mapDataFile="mapdata.js" />
    </div>
    <div className="committee-content">
      <h2>DISEC</h2>
      <p>Lorem</p>
      <p>Chair: Maria Garcia</p>
      <p>Vice Chair: Ahmed Khan</p>
      {/* Add more unique content for UNHRC if needed */}
    </div>
  </div>
);

export default DISEC;

