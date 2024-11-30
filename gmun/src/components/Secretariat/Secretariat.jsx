import React, { useState } from 'react';
import Cardsecretariat from "./Cardsecretariat";
import dataSecretariat from "./DataSecretariat";
import Headingall from '../../Headingall';

function Secretariat() {
  const [showSecretariat, setShowSecretariat] = useState(false);

  const toggleView = () => {
    setShowSecretariat(!showSecretariat);
  };

  // Filter data based on the current view
  const displayData = showSecretariat 
    ? dataSecretariat.filter((person) => person.role === "notTeam")
    : dataSecretariat.filter((person) => person.role === "team");

  return (
    <>
      <div className='bg-secretariat'>
        <div className='body-secretariat'>
          <div className="secretariat-header" style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative',
            padding: '20px 0'
          }}>
            <Headingall 
              headingname={showSecretariat ? "SECRETARIAT" : "TEAM"} 
            />
            <button 
              onClick={toggleView}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '10px 20px',
                backgroundColor: 'var(--chamoisee)',
                color: 'var(--rich-black)',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'var(--earth-yellow)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'var(--chamoisee)'}
            >
              {showSecretariat ? "Show Team" : "Show Secretariat"}
            </button>
          </div>
          
          <div className='wrapper-secretariat'>
            {displayData.map((person, index) => (
              <Cardsecretariat
                key={index}
                sname={person.sname}
                title={person.title}
                imgsrc={person.imgsrc}
                fblink={person.fblink}
                instalink={person.instalink}
                linkedInlink={person.linkedInlink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Secretariat;