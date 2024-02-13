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

      

      <div className="cards-container">
        {/* Overview card and picture of me */}
        <div className="card-Overview">
        <h2 style={{ textAlign: "center" }}>Overview</h2>
          <img src={require('./images/Graduation_picture-removebg-preview.png')} height={"450"} />
          <p style={{ textAlign: "center" }}> 
            I graduated with a diploma in software development from IIE Rosebank College <br/> 
            in 2022, where I gained a solid foundation in information technology and <br/>
            software engineering. I also learned and applied various programming languages, <br/>
            such as Java, C#, and SQL, in different software applications and projects. <br/><br/>
            I am passionate about solving problems, resilient, and focused, and I aspire <br/>
            to become a professional software developer who can create value and positive <br/>
            change through technology. <br/><br/>
          </p>
        </div>

        {/* My skills card */}
        <div className="card-Skills">
          <h2 style={{ textAlign: "center" }}>My Skills</h2>

          {/* HTML */}
          <div className="skill">
            <div className="skill-name">HTML</div>
            <div className="skill-level">
              <div style={{ width: "95%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">95%</div>
          </div>

          {/* CSS */}
          <div className="skill">
            <div className="skill-name">CSS</div>
            <div className="skill-level">
              <div style={{ width: "90%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">90%</div>
          </div>

          {/* JavaScript */}
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-level">
              <div style={{ width: "80%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">80%</div>
          </div>

          {/* Python */}
          <div className="skill">
            <div className="skill-name">Python</div>
            <div className="skill-level">
              <div style={{ width: "65%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">65%</div>
          </div>
    
          {/* Java */}
          <div className="skill">
            <div className="skill-name">Java</div>
            <div className="skill-level">
              <div style={{ width: "60%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">60%</div>
          </div>
        </div>
      </div>




      <div className="center">
        <section id="work">
          <h1 className="heading">
            <span className="text autoplay"> WORK EXPERIENCE </span>
          </h1>
        </section>
      </div>



      <div className="center">
        <section id="projects">
          <h1 className="heading">
            <span className="text autoplay"> PROJECTS COMPLETED </span>
          </h1>
        </section>
      </div>

      <div className="cards-container">
        {/* Project 1 */}
        <div className="card-project1">
          <h2 style={{ textAlign: "center" }}>Bakery website</h2>
          <br></br>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="book">
              <p>Description of project 1 goes here</p>
        
              <div class="cover">
                <img src={require('./images/ikhekhe.jpg')} alt="Cake image" />
              </div>
            </div> 
          </div>
          
          <button className="download-project-1">Download project</button>
          
        </div>
      

        {/* Project 2 */}
        <div className="card-project2">
          <h2 style={{ textAlign: "center" }}>Online portfolio</h2>
          <br></br>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="book">
              <p>Description of project 2 goes here</p>
        
              <div class="cover">
                <img src={require('./images/old portfolio.png')} alt="Cake image" />
              </div>
            </div> 
          </div>

          <button className="view-project-2">View Demo</button>
          <button className="download-project-2">Download project</button>
        </div>


        {/* Project 3 */}
        <div className="card-project3">
          <h2 style={{ textAlign: "center" }}>Checkers game</h2>
          <br></br>
          
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="book">
              <p>Description of project 3 goes here</p>
        
              <div class="cover">
                <img src={require('./images/checkers image.png')} alt="Cake image" />
              </div>
            </div> 
        </div>

          <button className="download-project-3">Download project</button>
      </div>
    </div>

    <div className="center">
    {/* More projects */}
      <div className="card-more">
        VIEW MORE PROJECTS ON GITHUB
      </div>
    </div>


      {/*contact me section*/}
      <div className="center">
        <section id="contact">
          <h1 className="heading">
            <span className="text autoplay"> CONTACT ME </span>
          </h1>
        </section>
      </div>

      <br />
      <br />

      <div className="center">
        <div className="form-container">
          <div className="form-image">
            <img src={require('./images/contact me form pic.png')} alt="Image Description" />
          </div>

          <form className="form">      
            <div className="input-group">
              <label htmlFor="username">Name and Surname</label>
              <input type="text" name="username" id="username" maxLength="30" required></input>
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" maxLength="50" required></input>
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="submit">Subject line</label>
              <input type="text" name="subject" id="subject" maxLength="50" required></input>
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="text">Message</label>
              <textarea id="message" name="message" maxLength="250" rows="8" required></textarea>
            </div>
          
            <br />
            <br />

            <button className="submit">SUBMIT</button>
            <br />
          
            <input type="reset" className="clear" value="RESET"></input>
          </form>
        </div>
      </div>



            <br />
            <br />
      







         

      
                    
    






































</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  );
}

export default App;
