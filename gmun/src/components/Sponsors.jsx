// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import your CSS file for styling
import bhumun from "./bhumun.png";
import vhere from "./sponsor1.webp";
import iQuanta from "./iQuanta.png";
import finnacle from "./finnacle.jpg";
import shantitrip from "./shantitrip.png";
import unstopng from "./unstopng.png";
import Headingall from './Headingall';
import VisionIAS2 from "./VisionIAS2.webp";
import nomura from "./nomura.png";
import spykar from "./Spykar.jpg";
import IDP from "./IDP.jpg";
import farmley from "./Farmley.png";

const currentSponsors = [
  {
    id: 1,
    name: 'IDP Education',
    logo: `${IDP}`,
    description: 'Overseas Education Partner',
  },
  {
    id: 2,
    name: 'Spykar',
    logo: `${spykar}`,
    description: 'Lifestyle Partner',
  },
  {
    id: 3,
    name: 'Farmley',
    logo: `${farmley}`,
    description: 'Snacking Partner',
  },
];

const previousSponsors = [
  {
    id: 1,
    name: 'IIT BHU MUN',
    logo: `${bhumun}`,
    description: 'Collaboration',
  },
  {
    id: 2,
    name: 'vehere',
    logo: `${vhere}`,
    description: 'Co-Event Sponsor',
  },
  {
    id: 3,
    name: 'iQuanta',
    logo: `${iQuanta}`,
    description: 'Education Sponsor',
  },
  {
    id: 4,
    name: 'Finnacle Institute',
    logo: `${finnacle}`,
    description: 'Strategic Partner',
  },
  {
    id: 5,
    name: 'ShantiTrip Holidays',
    logo: `${shantitrip}`,
    description: 'Travel Partner',
  },
  {
    id: 6,
    name: 'Unstop',
    logo: `${unstopng}`,
    description: 'Event Sponsor',
  },
  {
    id: 7,
    name: 'VisionIAS',
    logo: `${VisionIAS2}`,
    description: 'Previous Association',
  },
  {
    id: 8,
    name: 'Nomura',
    logo: `${nomura}`,
    description: 'Previous Association',
  },
];

const Sponsor = ({ name, logo, description }) => (
  <div className="sponsor">
    <img src={logo} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

const Sponsors = () => {
  return (
    <div className="overall-spons-page">
      <Headingall headingname={"SPONSORS"} />
      <div className="sponsors">
        <div className="sponsor-list">
          {currentSponsors.map((sponsor) => (
            <Sponsor
              key={sponsor.id}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
            />
          ))}
        </div>
      </div>

      <Headingall headingname={"PREVIOUS SPONSORS"} />
      <div className="sponsors">
        <div className="sponsor-list">
          {previousSponsors.map((sponsor) => (
            <Sponsor
              key={sponsor.id}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
