import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import FAQs from './FAQs'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">GMUN</div>
      <ul className="nav-menu">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/secretariat">Secretariat</Link>
        </li>

        {/* Dropdown for Committees */}
        <li className="nav-list dropdown">
        <button className="dropbtn">Committees</button>
        <ul className="dropdown-content">
        <li><Link to="/committee/1">UNSC</Link></li>
        <li><Link to="/committee/2">UNHRC</Link></li>
        <li><Link to="/committee/3">DISEC</Link></li>
        {/* Add more committees as needed */}
        </ul>
        </li>

        <li className="nav-list">
          <Link to="/FAQs">FAQs</Link>
        </li>
        <li className="nav-list">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="register">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
