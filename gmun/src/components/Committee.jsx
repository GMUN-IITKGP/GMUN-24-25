import React from 'react';
import { useParams } from 'react-router-dom';
import UNSC from './UNSC';
import UNHRC from './UNHRC';
import DISEC from './DISEC';

const Committee = () => {
  const { id } = useParams();

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

  return <div>{renderCommittee()}</div>;
};

export default Committee;


