import React, { useEffect, useState } from 'react';

const WorldMap = ({ title, mapDataFile }) => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Fetch the map data from the public folder
    fetch(`/${mapDataFile}`)
      .then(response => response.json())
      .then(data => setMapData(data))
      .catch(error => console.error("Error loading map data:", error));
  }, [mapDataFile]);

  return (
    <div>
      <h2>{title}</h2>
      {mapData ? (
        <div>{/* Render map data here */}</div>
      ) : (
        <p>Loading map data...</p>
      )}
    </div>
  );
};

export default WorldMap;


