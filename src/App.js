import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*NAVIGATION BAR section*/}
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


      {/*HOMEPAGE section*/}
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
        <br />
          
      </div>
      <br />
          <br />
          <br />
          
       

      {/*ABOUT ME section*/}
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
        {/* Overview and picture of me card */}
        <div className="card-Overview">
        <br />
        <br />
          <img src={require('./images/Graduation_picture-removebg-preview.png')} />
          <p> 
            I graduated with a diploma in software development from IIE Rosebank College 
            in 2022, where I gained a solid foundation in information technology and 
            software engineering. <br></br><br></br> 
            
            I am passionate about solving problems, resilient, patient and focused, good time management skills, and I aspire 
            to become a professional software developer who can create value and positive 
            change through technology. <br></br><br></br> 

            My hobbies and interests would be playing chess during my free time, traveling, photography and learning
            new languages
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

          {/* SQL Database */}
          <div className="skill">
            <div className="skill-name">SQL</div>
            <div className="skill-level">
              <div style={{ width: "75%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">75%</div>
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
        

          {/* .NET */}
        <div className="skill">
            <div className="skill-name">.NET</div>
            <div className="skill-level">
              <div style={{ width: "60%" }} className="skill-percent"></div>
            </div>
            <div className="skill-percent-number">60%</div>
          </div>
      </div>
      </div>
      <br></br>

      
      {/*WORK EXPERIENCE section*/}
      <div className="center">
        <section id="work">
          <h1 className="heading">
            <span className="text autoplay"> WORK EXPERIENCE </span>
          </h1>
        </section>
      </div>

      {/*Motivity*/}
      <div className="container">
        <div className="line-and-logos">
          <img src={require('./images/Motivity.png')} alt="Image Description" className='icon' />
          <div className="vertical-line"></div>
        </div>  
        
        <div className="card-container">
          <div className="card-experience-Motivity">
          <p> 
            <b>Company:</b> Motivity ICT South Africa <br></br>
            <b>Location:</b> Century City, Cape Town, South Africa <br></br> 
            <b>Position:</b> IT Intern <br></br>
            <b>Job type:</b> Internship <br></br>
            <b>Duration:</b> 5 May 2023 - 14 July 2023 (2 months) <br></br><br></br>
            <b>Job description:</b><br></br>
            Rotated across different departments to get exposure and learn on the job, 
            performed duties at the designated workstation and client property. Worked with back
            office adminstrators and did small tasks for managers such as writing formulas on Microsoft Excel for organization of data.
          </p>
          </div>
        </div>
      </div>

      {/*CAPACITI*/}
      <div className="container">
        <div className="line-and-logos">
          <img src={require('./images/UVU.png')} alt="Image Description" className='icon' />
          <div className="vertical-line"></div>
        </div>

        <div className="card-container">
          <div className="card-experience-UVU">
          <p> 
            <b>Company:</b> CapaCiTi Tech Career Accelerator (UVU Africa) <br></br>
            <b>Location:</b> Salt River, Cape Town, South Africa <br></br>
            <b>Position:</b> Software Developer Intern <br></br>
            <b>Job type:</b> Internship <br></br>
            <b>Duration:</b> 17 July 2023 - 19 January 2024 (6 months) <br></br><br></br>
            <b>Job description:</b> <br></br>
            A 6 month programme spent on campus that was designed to grow and upskill our skills of a software developer intern. Worked
            on various projects which consisted of the following languages: HTML, CSS, javascript, Java, Python, NodeJS. Having worked on these projects,
            we were exposed to teamwork, time management skills and what it means to work on a project as a team while having a different team leader within the group.
          </p>
          </div>
        </div>
      </div>

      {/*YOUNGLINGS*/}
      <div className="container">
        <div className="line-and-logos">
          <img src={require('./images/ABSA.png')} alt="Image Description" className='icon' />
          <div className="vertical-line"></div>
        </div>

        <div className="card-container">
          <div className="card-experience-ABSA">
          <p> 
            <b>Company:</b> Younglings Africa (ABSA) <br></br>
            <b>Location:</b> Cape Town, South Africa <br></br>
            <b>Position:</b> Junior Software Developer <br></br>
            <b>Job type:</b> Internship <br></br>
            <b>Duration:</b> 22 January 2024 - Present <br></br><br></br>
            <b>Job description:</b> <br></br>
            12 months spent at Younglings Africa where we are exposed to industry best practices, real world applications and soft skills.
          </p>
          </div>
        </div>
      </div>  


      {/*PROJECTS COMPLETED section*/}
      <div className="center">
        <section id="projects">
          <h1 className="heading">
            <span className="text autoplay"> PROJECTS COMPLETED </span>
          </h1>
        </section>
      </div>

      <div className="cards-container">
        {/* Bakery website project */}
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
          <div className="center">
          <button className="download-project-1">Download project</button>
          </div>
        </div>
      

        {/* Online portfolio project*/}
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
          
          <button className="view-project-2">View Demo</button><br></br>
          <button className="download-project-2">Download project</button>
          
        </div>


        {/* Checkers project */}
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
        <div className="center">
          <button className="download-project-3">Download project</button></div>
        </div>
      </div>


      {/* More projects card*/}
      <div className="center">
        <div className="card-more">
        VIEW MORE PROJECTS ON GITHUB
        </div>
      </div>


      {/*CONTACT ME section*/}
      <div className="center">
        <section id="contact">
          <h1 className="heading">
            <span className="text autoplay"> CONTACT ME </span>
          </h1>
        </section>
      </div>

      <br />
      <br />

      {/*Form + picture*/}
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

            {/*submit and reset buttons below*/}
            <button className="submit">SUBMIT</button>
            <br />
            <input type="reset" className="clear" value="RESET"></input>
          </form>
        </div>
      </div>
    

    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <div className="footer">
    © 2024 Lusaduma Mata's Portfolio 
    </div>

    




</div>

  );
}

export default App;
