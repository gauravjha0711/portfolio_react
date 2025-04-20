import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-left">
        <h2>
          Let's <span>Get in Touch</span>
        </h2>
        <p>
          Have any questions or interested in collaborating? Feel free to reach out to me!
        </p>
        <div className="contact-info">
          <a href="mailto:gauravjha0711@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> gauravjha0711@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> Connect on LinkedIn
          </a>
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Visit my GitHub
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your full name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Your email address" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
