import React from 'react'
import "./contact.css"

function contact() {
  return (
    <div>
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
            <img src="/images/contact me form pic.png" alt="Image Description" />
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
    
    <div className="footer">
    © 2024 Lusaduma Mata's Portfolio 
    </div>
    </div>
  )
}

export default contact
