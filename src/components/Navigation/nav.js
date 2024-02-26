import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './nav.css';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <img src="/images/Me-removebg-preview.png" height={100} alt="Your Alt Text Here" />

        {/* Responsive menu */}
        <div className="menu-icon" id="menu-icon" onClick={handleMenuToggle} aria-expanded={isMenuOpen}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>



        {/*Desktop view*/}
        <ul class="menu" id="menu">
        <li><Link to="lusaduma-mata" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Home </Link>
        </li>
            
        <li>
            <Link to="about" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                About Me
            </Link>
        </li>

        <li>
              <Link to="work" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Work Experience
              </Link>
            </li>
            
            <li>
              <Link to="projects" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            
            <li>
              <Link to="contact" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Contact Me
              </Link>
            </li>  
        </ul>





        {/* Mobile view */}
        {isMenuOpen && (
          <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="lusaduma-mata" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="work" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="projects" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy smooth offset={-70} duration={500} onClick={closeMenu}>
                Contact Me
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;
