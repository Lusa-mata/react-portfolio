import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import "./nav.css";

function Nav() {


  return (
    <div>
      <nav className="navbar">
        <img src="/images/Me-removebg-preview.png" height={100} />

        <ul className="menu" id="menu">
          <li><Link activeClass="active" to="lusaduma-mata" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link></li>
          <li><Link activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}>Work Experience</Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link></li>
        </ul>

        <div className="menu-icon" id="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
}






export default Nav;
