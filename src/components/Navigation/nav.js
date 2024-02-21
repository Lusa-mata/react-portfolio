import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-img">
          <img src="/images/Me-removebg-preview.png" alt="logo pic" />
        </div>

        <ul className="menu" id="menu">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about_me">About Me</Link></li>
          <li><Link to="/work_experience">Work Experience</Link></li>
          <li><Link to="/projects_completed">Projects</Link></li>
          <li><Link to="/contact_me">Contact Me</Link></li>
        </ul>

        <div className="menu-icon" id="menu-icon">
          <div className="bar" role="presentation"></div>
          <div className="bar" role="presentation"></div>
          <div className="bar" role="presentation"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
