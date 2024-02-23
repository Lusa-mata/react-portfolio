import React from 'react'
import "./home.css"

 
function home() {
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
    </div>
  )
}

export default home
