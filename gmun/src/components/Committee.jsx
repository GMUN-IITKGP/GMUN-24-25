import React from 'react';
import { useParams } from 'react-router-dom';
import UNSC from './UNSC';
import UNHRC from './UNHRC';
import DISEC from './DISEC';
import Cards from './Cards'; // Assuming Cards.jsx exports the 3D card component

const Committee = () => {
  const { id } = useParams();

  // Function to render the appropriate committee based on the URL parameter
  const renderCommittee = () => {
    switch (id) {
      case '1':
        return <UNSC />;
      case '2':
        return <UNHRC />;
      case '3':
        return <DISEC />;
      default:
        return <h1>Committee Not Found</h1>;
    }
  };

  return (
    <div>
      {/* Render the committee-specific component */}
      {renderCommittee()}

      {/* Include the Cards component, common for all committees */}
      <div style={{ marginTop: '2rem' }}>
        <Cards />
      </div>
    </div>
  );
};

export default Committee;

