import React, { useEffect } from 'react';

const Committee = () => {
  useEffect(() => {
    // Load mapdata.js dynamically
    const mapDataScript = document.createElement('script');
    mapDataScript.src = `${process.env.PUBLIC_URL}/mapdata.js`;
    mapDataScript.async = true;

    // Load worldmap.js dynamically
    const worldMapScript = document.createElement('script');
    worldMapScript.src = `${process.env.PUBLIC_URL}/worldmap.js`;
    worldMapScript.async = true;

    // Append the scripts to the body
    document.body.appendChild(mapDataScript);
    document.body.appendChild(worldMapScript);

    // Cleanup: Remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(mapDataScript);
      document.body.removeChild(worldMapScript);
    };
  }, []);

  return (
    <div>
      <h1>World Map Example</h1>
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default Committee;

