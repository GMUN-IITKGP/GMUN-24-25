import React, { useEffect } from 'react';

const WorldMap = ({ title }) => {
  useEffect(() => {
    if (window.simplemaps_worldmap) {
      // Initialize the map once the component mounts
      window.simplemaps_worldmap.load();
    } else {
      console.error("World map script not loaded");
    }
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div id="map" style={{ width: '100%', height: '500px' }}></div> {/* Adjust size as needed */}
    </div>
  );
};

export default WorldMap;
