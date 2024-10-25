import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (

    <div className="nav">
      <div className="nav-logo">GMUN</div>
      <ul className="nav-menu">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="./secretariat">Secretariat</Link>
        </li>
        <li className="nav-list">
          <Link to="./committees">Committees</Link>
        </li>
        <li className="nav-list">
          <Link to="./faqs">FAQS</Link>
        </li>
        <li className="nav-list">
          <Link to="./about">About</Link>
        </li>
        <li className="nav-list">
          <Link to="./gallery">Gallery</Link>
        </li>
        <li className="register">
          <Link to="./register">Register</Link>

        </li>
      </ul>
    </div>

  );
};
export default Navbar

