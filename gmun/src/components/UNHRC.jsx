import React from 'react';
import WorldMap from './WorldMap';
import './committee.css';

const UNHRC = () => (
  <div className="committee-container">
    <div className="committee-map">
      <WorldMap title="UNHRC" mapDataFile="mapdata.js" />
    </div>
    <div className="committee-content">
      <h2>UNHRC</h2>
      <p>Lorem</p>
      <p>Chair: Maria Garcia</p>
      <p>Vice Chair: Ahmed Khan</p>
      {/* Add more unique content for UNHRC if needed */}
    </div>
  </div>
);

export default UNHRC;
