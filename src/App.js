import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <img 
          src="images/Me-removebg-preview.png" 
          alt="Lusaduma" 
        />

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

      <div className="center">
        <div className="home-container">
          <section id="lusaduma-mata">
            <h1 className="heading">
              <span className="text autoplay"> LUSADUMA MATA </span>
            </h1>
          </section>

          <h3>Junior Software Developer</h3>
          <br />

          <div className="profile-img">
            <img src={require('./images/graduation 2.jfif')} alt="Lusaduma Graduation" />
          </div>
          <br />

          <br />

          <div className="button-container">
            <a
              href="CV/Lusaduma Mata CV Updated.docx"
              className="download-button"
              download
            >
              Download my CV
            </a>
          </div>

          <br />
          <br />
        </div>
      </div>






      <div className="center">
      <br />
          <br />
    
      <section id="about">
            <h1 className="heading">
              <span className="text autoplay"> ABOUT ME </span>
            </h1>
          </section>
</div>
    
    
<br />
          <br />
    <div className="center">
      <section id="work">
            <h1 className="heading">
              <span className="text autoplay"> WORK EXPERIENCE </span>
            </h1>
          </section>
</div>
    
    
<br />
          <br />
    <div className="center">
      <section id="projects">
            <h1 className="heading">
              <span className="text autoplay"> PROJECTS COMPLETED </span>
            </h1>
          </section>
</div>
    
    
    
<br />
          <br />
    <div className="center">
      <section id="contact">
            <h1 className="heading">
              <span className="text autoplay"> CONTACT ME </span>
            </h1>
          </section>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;
