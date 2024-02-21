import React from 'react';
import './App.css';
import nav from './components/Navigation/nav'
import './components/Navigation/nav.css'

function App() {
  return (
    <div className="App">

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
            During my 12 months, I will gain exposure to industry best practices,
             real-world applications, and soft skills. Responsibilities include learning 
             the codebase, enhancing coding skills, writing and maintaining code, 
             addressing minor bug fixes, conducting development tests, and promptly 
             responding to requests from the development team.






          </p>
          </div>
        </div>
      </div>  

      {/*CAPACITI - UVU*/}
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
            I completed a 6-month on-campus software developer internship, emphasizing teamwork, 
            time management, and project collaboration with various team leaders. 
            The program aimed to prepare us interns for real-world challenges, providing a 
            well-rounded skill set for a successful transition into the industry.
          </p>
          </div>
        </div>
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
            I rotated through diverse departments, gaining exposure and on-the-job learning. 
            Executed duties at workstations and client properties, providing assistance to 
            back-office administrators. Engaged in tasks including writing Excel formulas 
            for efficient data organization, contributing to a comprehensive experience in 
            diverse aspects of the environment.






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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        VIEW MORE PROJECTS ON GITHUB
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input id="checkbox" type="checkbox" />
<label class="switch" for="checkbox">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="slider">
    <path
      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
    ></path>
  </svg>
</label>
</div>
</div>
      </div>







      {/* PROJECTS COMPLETED RESPONSIVENESS */}




      
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

    

    <nav/>


</div>

  );
}

export default App;
