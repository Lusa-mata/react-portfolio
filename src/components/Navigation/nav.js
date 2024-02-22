import React from 'react'
import "./nav.css"

function Nav() {
  return (
    <div>
      <nav className="navbar">
          <img src="/images/Me-removebg-preview.png" height={100}/>

        <ul className="menu" id="menu">
          <li><a className="active" href="#"> Home</a></li>
          <li><a href="#about_me">About Me</a></li>
          <li><a href="#work_experience">Work Experience</a></li>
          <li><a href="#projects_completed">Projects</a></li>
          <li><a href="#contact_me"> Contact Me</a></li>    
        </ul>

        <div className="menu-icon" id="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
