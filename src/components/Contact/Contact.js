import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Particle from "../Particle"; // Make sure the path to Particle is correct

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Please try again.")
      );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#0e1628",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "7rem 1rem 2rem 1rem",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    zIndex: 1,
  };

  const highlightStyle = {
    color: "#60a5fa",
  };

  const paragraphStyle = {
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "700px",
    zIndex: 1,
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "center",
    zIndex: 1,
  };

  const cardStyle = {
    flex: "1 1 400px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "24px",
    borderRadius: "16px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
  };

  const itemRow = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  };

  const iconStyle = {
    color: "#60a5fa",
    fontSize: "24px",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "4px",
  };

  const contactValueStyle = {
    color: "#cbd5e1",
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    width: "100%",
    marginBottom: "16px",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const socialStyle = {
    display: "flex",
    gap: "16px",
    color: "#cbd5e1",
    marginTop: "12px",
  };

  const inputRowStyle = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <Particle />

      <h2 style={headingStyle}>
        Get In <span style={highlightStyle}>Touch</span>
      </h2>
      <p style={paragraphStyle}>
        Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
      </p>

      <div style={cardContainer}>
        {/* Contact Info Card */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
            Contact Information
          </h3>

          <div style={itemRow}>
            <FaEnvelope style={iconStyle} />
            <div>
              <div style={labelStyle}>Email</div>
              <div style={contactValueStyle}>gauravjha0711@gmail.com</div>
            </div>
          </div>

          <div style={itemRow}>
            <FaPhoneAlt style={iconStyle} />
            <div>
              <div style={labelStyle}>Phone</div>
              <div style={contactValueStyle}>+91 9162691966</div>
            </div>
          </div>

          <div style={itemRow}>
            <FaMapMarkerAlt style={iconStyle} />
            <div>
              <div style={labelStyle}>Location</div>
              <div style={contactValueStyle}>Patna, Bihar, India</div>
            </div>
          </div>

          <div style={labelStyle}>Connect With Me</div>
          <div style={socialStyle}>
            <a href="https://github.com/gauravjha0711"><FaGithub style={{ fontSize: "20px", color: "#cbd5e1" }} /></a>
            <a href="https://www.linkedin.com/in/gaurav-kumar-729503265/"><FaLinkedin style={{ fontSize: "20px", color: "#cbd5e1" }} /></a>
            <a href="https://www.instagram.com/gauravjhagk/"><FaInstagram style={{ fontSize: "20px", color: "#cbd5e1" }} /></a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
            Send me a message
          </h3>
          <form onSubmit={handleSubmit}>
            <div style={inputRowStyle}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ ...inputStyle, flex: "1" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ ...inputStyle, flex: "1" }}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="I'd like to discuss a potential project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: "none" }}
            ></textarea>

            <button type="submit" style={buttonStyle}>
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
