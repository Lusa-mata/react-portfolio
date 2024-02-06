import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">


      <nav class="navbar">
        <ul class="menu" id="menu">
          <li><a class ="active" href ="#"> Home</a></li>
          <li><a href ="#about_me">About Me</a></li>
          <li><a href ="#education">Education</a></li>
          <li><a href ="#work_experience">Work Experience</a></li>
          <li><a href ="#projects_completed">Projects</a></li>
          <li><a href ="#contact_me"> Contact Me</a></li>    
        </ul>

        
        <div class="menu-icon" id="menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
      </nav>


      <div class="center">
        <div class="home-container">
            <section id="lusaduma-mata">
                <h1 class="heading"><span class="text autoplay"> LUSADUMA MATA </span></h1>
            </section>

            <h3> Junior Software Developer </h3>
            
           
            
             

            <div class="social-icons">
                <a href="https://github.com/Lusa-mata?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/lusaduma-ok-mata/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            

            
            <div class="button-container">
                <a href= "CV/Lusaduma Mata CV Updated.docx" class="download-button" download>Download my CV</a>
            </div>

           
    
        </div>
    </div>




    </div>
   
  );
}

export default App;
