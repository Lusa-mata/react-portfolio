import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

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
            <img src={require('./images/graduation 2.jfif')} alt="Lusaduma Graduation" height={"450"} />
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

      <div className="center">
        <section id="contact">
          <h1 className="heading">
            <span className="text autoplay"> CONTACT ME </span>
          </h1>
        </section>
      </div>
    
          <br />
          <br />

      <div class="center">
        <div class="form-container">
          <div className="form-image">
            <img src={require('./images/contact me form pic.png')} alt="Image Description" />
          </div>

          <form class="form">      
            <div class="input-group">
              <label for="username">Name and Surname</label>
              <input type="text" name="username" id="username" maxlength="30" required></input>
            </div>

            <br />

            <div class="input-group">
              <label for="email">Email address</label>
              <input type="email" name="email" id="email" maxlength="50" required></input>
            </div>

            <br />

            <div class="input-group">
              <label for="submit">Subject line</label>
              <input type="text" name="subject" id="subject" maxlength="50" required></input>
            </div>

            <br />

            <div class="input-group">
              <label for="text">Message</label>
              <textarea id="message" name="message" maxlength="250" rows="8" required></textarea>
            </div>
          
            <br />
            <br />

            <button class="submit">SUBMIT</button>
            <br />
          
            <input type="reset" class="clear" value="RESET"></input>
            
          </form>
        </div>
      </div>


            <br />
            <br />

      
                    
    






































</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  );
}

export default App;
