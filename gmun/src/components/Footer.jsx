import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://www.facebook.com/profile.php?id=100088188648912&mibextid=kFxxJD"
                    aria-label="Facebook"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/communiqu%C3%A9-iit-kharagpur/"
                    aria-label="Linkedin"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/gmun.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    aria-label="Instagram"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://medium.com/@cq-iitkharagpur"
                    aria-label="Medium"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-medium"></i>
                </a>
                <a href="https://youtube.com/channel/UCHDd6pfVicWGwIIbqIRP64g?si=niYg6vJUfjsNGfDG"
                    aria-label="youtube"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>

            <div className="footer-logo">
                <p>Communiqué</p>
                <p>&copy; 2024 Communiqué. All Rights Reserved.</p>
            </div>
            {<div className="footer-links">
                <a href="mailto:yourname@example.com">Contact Us</a>
                <a href="#">About</a>
                <a href="#">Register</a>
                <a href="#">Home</a>

            </div>}
        </footer>
    );
};

export default Footer;
