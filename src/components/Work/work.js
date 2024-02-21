import React from 'react'
import "./work.css"


function work() {
  return (
    <div>
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
          <img src="/images/ABSA.png" alt="Image Description" className='icon' />
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
          <img src="/images/UVU.png" alt="Image Description" className='icon' />
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
          <img src="/images/Motivity.png" alt="Image Description" className='icon' />
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
    </div>
  )
}

export default work
