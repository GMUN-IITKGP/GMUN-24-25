// Announcements.jsx
import React, { useState } from 'react';
import '../styles/Announcements.css';

const announcementsData = [
  {
    title: "GMUN Coming Soon",
    text: "Get ready for the most anticipated global diplomatic forum of 2024! The Global Model United Nations Event is back, promising another year of unparalleled debate, collaboration, and impactful solutions. Join us as delegates from across the globe convene to tackle pressing global issues. Engage in diplomacy, hone negotiation skills, and craft resolutions that shape our worlds future. Whether you are a seasoned delegate or new to the world of international relations. Stay tuned for updates and be part of this transformative experience!",
    imageUrl: "https://gmun.cqiitkgp.com/assets/gmun_cs-32a2a5d4.jpg",
  },
  {
    title: "Executive Board Applications Live",
    text: "Join the pinnacle of diplomatic leadership! Applications now open for the Executive Board of our Global Model United Nations Event. Lead, inspire, and shape discussions on global issues. As part of the Executive Board, immerse yourself in a rewarding experience, honing leadership skills, and shaping future leaders. Apply now to be at the forefront of this unparalleled simulation, driving meaningful change on a global scale!",
    imageUrl: "https://gmun.cqiitkgp.com/assets/gmun_eb_board-6fef2cd5.jpg",
  },
  {
    title: "Delegate Applications Live",
    text: "Attention Fellow Delegates Delegate registrations for the 2nd edition of Global Model United Nations (GMUN) are now open. Join us at IIT Kharagpur from 12 to 14 January 2024, for a informative and rich experience in diplomacy and leadership.Organized by Communiqué IIT Kharagpur, this is your chance to engage, debate, and make a global impact.To secure your spot, Register now (For Non KGPians): https://bit.ly/GMUN_2024",
    imageUrl: "https://gmun.cqiitkgp.com/assets/Announcement_3-f6a91d86.jpg",
  },
];

const Announcements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % announcementsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + announcementsData.length) % announcementsData.length);
  };

  const { title, text, imageUrl } = announcementsData[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={imageUrl} alt={title} className="carousel-image" />
        <h2 className="carousel-title">{title}</h2>
        <p className="carousel-text">{text}</p>
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>Prev</button>
      <button className="carousel-button next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Announcements;
