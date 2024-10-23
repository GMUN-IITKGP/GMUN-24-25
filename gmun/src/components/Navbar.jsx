import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the landing page */}
        </li>
        <li>
          <Link to="/committe">Committee</Link> {/* Link to the Committee page */}
        </li>
        {/* You can add more links here if needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
