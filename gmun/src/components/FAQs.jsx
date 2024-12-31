import React, { useState } from 'react';
import './FAQs.css';
import './App.css';
import Headingall from './Headingall.jsx';

const Announcements = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const announcements = [
    {
      title: 'What is Model United Nations (MUN)?',
      content: 'Model United Nations (MUN) is an academic simulation of the United Nations where students play the role of delegates from various countries and simulate UN committees. Participants engage in debates, discussions, and negotiations on global issues while representing their assigned countries\' perspectives.',
    },
    {
      title: 'Who can participate?',
      content: 'Anyone undergoing formal education is eligible.',
    },
    {
      title: 'Is there an age restriction for participating in the MUN conference?',
      content: 'The MUN conference is open to high school and college students provided they are 15 years or older.',
    },
    {
      title: ' Is prior experience necessary to participate in the conference?',
      content: 'No prior experience is necessary to register for the conference.',
    },
    {
      title: 'Will accomodation be provided to the participants?',
      content: 'Yes, accomodation for from the night of day-0 to the closing ceremony will be provided to the delegates as well as the Executive Board members.',
    },
    {
      title: 'Will there be lunch for the participants during the conference?',
      content: 'Yes, lunch will be provided to both the Delegates and Executive Board members during the conference interval',
    },
    {
      title: 'What committees are being simulated?',
      content: 'Our conference presents a variety of committees namely United Nations Human Rights Council(UNHRC), United Nations Security Council(UNSC), Disarmament and Security Council(DISEC), G20 and LokSabha. ',
    },
    {
      title: 'What is the dress code for the conference?',
      content: 'For the day-1 of the conference, participants are encouraged to dress professionally, which may include suits, blazers, dress shirts, ties, slacks, skirts, or professional dresses. For the second day, ethnic wear will be followed',
    }
  ];

  const toggleContent = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='outer-faq'>
        <Headingall headingname="FAQs" />
        <div className="bodiy">

          <div className="announcements-container">

            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <div className={`announcement ${expandedIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleContent(index)}>
                  <div className="topFAQ" ><h3 className="question">{announcement.title}</h3>
                  </div>

                  <div className="infoPart">{expandedIndex === index && <h5>{announcement.content}</h5>}</div>

                </div>
              ))
            ) : (
              <p>No Announcements Yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
