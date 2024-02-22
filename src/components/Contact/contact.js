import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";

function Contact() {
  const handleFormSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // Add your logic to handle form submission, such as sending data to the server
  };

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

      {/* Form + picture */}
      <div className="center">
        <div className="form-container">
          <div className="form-image">
            <img src="/images/contact me form pic.png" alt="Image Description" />
          </div>

          <form className="form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="username">Name and Surname</label>
              <input type="text" name="username" id="username" maxLength="30" required />
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" maxLength="50" required />
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="submit">Subject line</label>
              <input type="text" name="subject" id="subject" maxLength="50" required />
            </div>

            <br />

            <div className="input-group">
              <label htmlFor="text">Message</label>
              <textarea id="message" name="message" maxLength="250" rows="8" required />
            </div>

            <br />
            <br />

            <div className="reCAPTCHA">
            {/* reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Lcq53opAAAAAP3aommd_71NaaVf_4z2tHvWL52a" // Replace with your reCAPTCHA site key
              onChange={(value) => console.log("reCAPTCHA value:", value)}
            />
            </div>

            {/* submit and reset buttons below */}
            <button type="submit" className="submit">
              SUBMIT
            </button>
            <br />
            <input type="reset" className="clear" value="RESET" />
          </form>
        </div>
      </div>

      <div className="footer">
        © 2024 Lusaduma Mata's Portfolio
      </div>
    </div>
  );
}

export default Contact;
