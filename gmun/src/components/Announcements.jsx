import React, { useRef } from 'react';
import '../styles/Announcements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/an1.jpg';
import image2 from '../images/an2.jpg';

const Announcements = () => {
    const slideRef = useRef(null);

    const handleNext = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
    };

    return (
        <div className="container">
            <div className="contain">
            <div className="slide" ref={slideRef}>
            <div className="item">
                    <div className="overlay"  style={{ backgroundImage: "url(https://gmun.cqiitkgp.com/assets/gmun_eb_board-6fef2cd5.jpg)" }}></div>
                    <div className="dark"></div>
                    <div className="content">
                        <div className="name">Executive Board Applications Live</div>
                        <div className="des">Join the pinnacle of diplomatic leadership! Applications now open for the Executive Board of our Global Model United Nations Event. Lead, inspire, and shape discussions on global issues. As part of the Executive Board, immerse yourself in a rewarding experience, honing leadership skills, and shaping future leaders. Apply now to be at the forefront of this unparalleled simulation, driving meaningful change on a global scale!</div>
                        
                    </div>
                </div>

                <div className="item">
                    <div className="overlay"  style={{ backgroundImage: `url(${image1})` }}></div>
                    <div className="dark"></div>
                    <div className="content">
                        <div className="name">GMUN Coming Soon</div>
                        <div className="des">Get ready for the most anticipated global diplomatic forum of 2025! The Global Model United Nations Event is back, promising another year of unparalleled debate, collaboration, and impactful solutions. Join us as delegates from across the globe convene to tackle pressing global issues. Engage in diplomacy, hone negotiation skills, and craft resolutions that shape our worlds future. Whether you are a seasoned delegate or new to the world of international relations. Stay tuned for updates and be part of this transformative experience!</div>
                        
                    </div>
                </div>
        
                <div className="item">
                <div className="overlay" style={{ backgroundImage: `url(${image2})` }}></div>
                <div className="dark"></div>
                    <div className="content">
                        <div className="name">Delegate Applications Live</div>
                        <div className="des">Attention Fellow Delegates Delegate registrations for the 3rd edition of Global Model United Nations (GMUN) are now open. Join us at IIT Kharagpur from 12 to 14 January 2025, for a informative and rich experience in diplomacy and leadership.Organized by Communiqué IIT Kharagpur, this is your chance to engage, debate, and make a global impact.To secure your spot, Register now (For Non KGPians)</div>
                        <button onClick={() => window.open('https://bit.ly/gmuniitkgp2025', '_blank', 'noopener noreferrer')}>
                            Register Here
                        </button>
                    </div>
                </div>

                <div className="item">
                    <div className="overlay"  style={{ backgroundImage: "url(https://gmun.cqiitkgp.com/assets/gmun_eb_board-6fef2cd5.jpg)" }}></div>
                    <div className="dark"></div>
                    <div className="content">
                        <div className="name">Executive Board Applications Live</div>
                        <div className="des">Join the pinnacle of diplomatic leadership! Applications now open for the Executive Board of our Global Model United Nations Event. Lead, inspire, and shape discussions on global issues. As part of the Executive Board, immerse yourself in a rewarding experience, honing leadership skills, and shaping future leaders. Apply now to be at the forefront of this unparalleled simulation, driving meaningful change on a global scale!</div>
                        
                    </div>
                </div>

                <div className="item">
                    <div className="overlay"  style={{ backgroundImage: `url(${image1})` }}></div>
                    <div className="dark"></div>
                    <div className="content">
                        <div className="name">GMUN Coming Soon</div>
                        <div className="des">Get ready for the most anticipated global diplomatic forum of 2025! The Global Model United Nations Event is back, promising another year of unparalleled debate, collaboration, and impactful solutions. Join us as delegates from across the globe convene to tackle pressing global issues. Engage in diplomacy, hone negotiation skills, and craft resolutions that shape our worlds future. Whether you are a seasoned delegate or new to the world of international relations. Stay tuned for updates and be part of this transformative experience!</div>
                        
                    </div>
                </div>

                <div className="item">
                <div className="overlay" style={{ backgroundImage: `url(${image2})` }}></div>
                <div className="dark"></div>
                    <div className="content">
                        <div className="name">Delegate Applications Live</div>
                        <div className="des">Attention Fellow Delegates Delegate registrations for the 3rd edition of Global Model United Nations (GMUN) are now open. Join us at IIT Kharagpur from 12 to 14 January 2025, for a informative and rich experience in diplomacy and leadership.Organized by Communiqué IIT Kharagpur, this is your chance to engage, debate, and make a global impact.To secure your spot, Register now (For Non KGPians)</div>
                        <button onClick={() => window.open('https://bit.ly/gmuniitkgp2025', '_blank', 'noopener noreferrer')}>
                            Register Here
                        </button>
                    </div>
                </div>
                       
               </div>
               </div>
            

            <div className="button">
                <button className="prev" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="next" onClick={handleNext}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Announcements;