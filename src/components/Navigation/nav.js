import React from 'react'


function nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-img">
          <img src={require('./images/Me-removebg-preview.png')} alt="Lusaduma Graduation" />
        </div>

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

export default nav
