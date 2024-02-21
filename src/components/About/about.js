import React from 'react'
import "./about.css"


function about() {
  return (
    <div>
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
          <img src="/images/Graduation_picture-removebg-preview.png" alt="Graduation picture" />
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
    </div>
  )
}

export default about
