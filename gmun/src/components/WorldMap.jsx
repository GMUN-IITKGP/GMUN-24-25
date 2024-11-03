import React, { useEffect } from 'react';

const WorldMap = ({ title, mapDataFile }) => {
  useEffect(() => {
    const mapDataScript = document.createElement('script');
    mapDataScript.src = `${process.env.PUBLIC_URL}/${mapDataFile}`;
    mapDataScript.async = true;

    const worldMapScript = document.createElement('script');
    worldMapScript.src = `${process.env.PUBLIC_URL}/worldmap.js`;
    worldMapScript.async = true;

    document.body.appendChild(mapDataScript);
    document.body.appendChild(worldMapScript);

    return () => {
      document.body.removeChild(mapDataScript);
      document.body.removeChild(worldMapScript);
    };
  }, [mapDataFile]);

  return (
    <div>
      <h1>{title}</h1>
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default WorldMap;


