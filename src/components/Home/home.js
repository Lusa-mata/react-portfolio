import React from 'react'
import "./home.css"

 
function home() {
    const githubLink = "https://github.com/Lusa-mata"; // Replace with your GitHub profile link
    const linkedinLink = "https://www.linkedin.com/in/lusaduma-ok-mata/"; // Replace with your LinkedIn profile link

    

  return (
    <div>
      <div className="center">
        <div className="home-container">
          <section id="lusaduma-mata">
            <h1 className="heading">
              <span className="text autoplay"> LUSADUMA MATA </span>
            </h1>
          </section>
          
          <h3>Junior Software Developer</h3>
          <br />

          <div className='profile-img'>
            <img src="/images/graduation 2.jfif" />
          </div>
          <br />
          <br />
          
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ marginRight: '-400px', marginLeft: '20px' }}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/images/github icon.png"
                alt="github Icon"
                class="github-icon"
              />
            </a>
          </div>

          <br></br>
          <div>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <img
    src="/images/linkedin icon.png"
    alt="LinkedIn Icon"
    class="linkedin-icon"
  />
            </a>
          </div>
          </div>
          
          
          <br />
          <br />
          <br />

          <div className="button-container">
            <a
              href="/documents/Lusaduma Mata CV Updated.docx"
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
    </div>
  )
}

export default home
