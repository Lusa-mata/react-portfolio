import React from 'react'
import "./projects.css"


function projects() {
  const githubRepo = "https://github.com/Lusa-mata?tab=repositories"; // Replace with your LinkedIn profile link
  const Project1Link = "https://github.com/Lusa-mata/Bakery-website";
  const Project2Link = "https://github.com/Lusa-mata/My-Portfolio";
  const Project3Link = "https://github.com/Lusa-mata/Checkers-game";



  return (
    <div>
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
              <p>This bakery website consists of a chatbot, booking event page that allows you to make a booking for the upcoming event</p>
        
              <div class="cover">
                <img src="/images/ikhekhe.jpg" alt="Cake image" />
              </div>
            </div> 
          </div>
          
          
          <a href={Project1Link} target="_blank" rel="noopener noreferrer">
          <div className="center">
              <button className="download-project-1">Download on GitHub</button>
          </div>
          </a>
        </div>
      

        {/* Online portfolio project*/}
        <div className="card-project2">
          <h2 style={{ textAlign: "center" }}>Online portfolio</h2>
          <br></br>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="book">
              <p>This is my old portfolio that I was working on during my time at CapaCiTi. <br></br><br></br> It enabled me to learn more 
                about coding standards and best practices used when coding. <br></br><br></br>It showcases my skills and projects that I have 
                done to date. There is a newer version called "React Portfolio" on my GitHub repositories. Click on the card 
                below to view it
              </p>
              
              <div class="cover">
                <img src="/images/old portfolio.png" alt="Old portfolio image" />
              </div>
            </div> 
          </div>
          
          <button className="view-project-2">View Demo</button><br></br>

          <a href={Project2Link} target="_blank" rel="noopener noreferrer">
          <button className="download-project-2">Download on GitHub</button>
          </a>
          
        </div>


        {/* Checkers project */}
        <div className="card-project3">
          <h2 style={{ textAlign: "center" }}>Checkers game</h2>
          <br></br>
          
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="book">
              <p>This is one of the games that we had created during our time at CapaCiTi. <br></br><br></br>
                We worked on the project together as a team. 
                <br></br><br></br>
                The game is a 2 player version of checkers which enables you to play with 
                your friend at the leisure of your time</p>
        
              <div class="cover">
                <img src="/images/checkers image.png" alt="Checkers game image" />
              </div>
            </div> 
        </div>
        
        
        <a href={Project3Link} target="_blank" rel="noopener noreferrer">
        <div className="center">
          <button className="download-project-3">Download on GitHub</button>
          </div>
          </a>
        </div>
          
        
      </div>


      {/* More projects card*/}
      <div className="center">
        
        <div className="card-more">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        VIEW MORE PROJECTS ON GITHUB
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href={githubRepo} target="_blank" rel="noopener noreferrer">
    <input id="checkbox" type="checkbox" />
    <label className="switch" htmlFor="checkbox">
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="slider">
          <path
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
          ></path>
        </svg>
      </a>
    </label>
  </a>
</div>

</div>
      </div>
    </div>
  )
}

export default projects
