import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="contact-section">
      <Particle />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h1 className="contact-heading">
          Get In <span>Touch</span>
        </h1>

        <p className="contact-subtitle">
          Open to software engineering roles,
          collaborations and exciting projects.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* LEFT */}

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3>Contact Information</h3>

          <div className="info-item">
            <FaEnvelope className="icon"/>
            <div>
              <h6>Email</h6>
              <p>gauravjha0711@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon"/>
            <div>
              <h6>Phone</h6>
              <p>+91 9162691966</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon"/>
            <div>
              <h6>Location</h6>
              <p>Patna, Bihar, India</p>
            </div>
          </div>

          <div className="socials">

            <a
              href="https://github.com/gauravjha0711"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub/>
            </a>

            <a
              href="https://www.linkedin.com/in/gaurav-kumar-729503265"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin/>
            </a>

            <a
              href="https://www.instagram.com/gauravjhagk"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram/>
            </a>

          </div>

          <a
            href="mailto:gauravjha0711@gmail.com"
            className="mail-btn"
          >
            Send Direct Email
          </a>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3>Send Message</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button disabled={loading}>
              <FaPaperPlane />
              &nbsp;
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="error">
                Failed to send message.
              </p>
            )}

          </form>
        </motion.div>
      </div>

      <style>{`

      .contact-section{
        min-height:100vh;
        padding:120px 20px;
        color:white;
      }

      .contact-heading{
        text-align:center;
        font-size:3rem;
        font-weight:700;
      }

      .contact-heading span{
        color:#c770f0;
      }

      .contact-subtitle{
        text-align:center;
        color:#bbb;
        margin-top:10px;
        margin-bottom:60px;
      }

      .contact-container{
        max-width:1200px;
        margin:auto;
        display:flex;
        gap:40px;
        flex-wrap:wrap;
      }

      .contact-card{
        flex:1;
        min-width:350px;
        background:rgba(255,255,255,.04);
        backdrop-filter:blur(15px);
        border:1px solid rgba(199,112,240,.25);
        border-radius:25px;
        padding:40px;
        transition:.3s;
      }

      .contact-card:hover{
        transform:translateY(-8px);
        box-shadow:0 15px 35px rgba(199,112,240,.25);
      }

      .info-item{
        display:flex;
        gap:20px;
        margin:30px 0;
      }

      .icon{
        color:#c770f0;
        font-size:25px;
      }

      .socials{
        display:flex;
        gap:20px;
        margin-top:30px;
      }

      .socials a{
        color:white;
        font-size:25px;
        transition:.3s;
      }

      .socials a:hover{
        color:#c770f0;
        transform:translateY(-3px);
      }

      input,textarea{
        width:100%;
        padding:15px;
        margin-bottom:20px;
        border:none;
        border-radius:10px;
        background:rgba(255,255,255,.08);
        color:white;
      }

      button,.mail-btn{
        background:#c770f0;
        color:white;
        border:none;
        padding:14px 30px;
        border-radius:10px;
        cursor:pointer;
        text-decoration:none;
        display:inline-block;
        transition:.3s;
      }

      button:hover,.mail-btn:hover{
        transform:translateY(-2px);
      }

      .success{
        color:#00ff95;
        margin-top:15px;
      }

      .error{
        color:#ff4d4d;
        margin-top:15px;
      }

      @media(max-width:768px){
        .contact-heading{
          font-size:2.3rem;
        }

        .contact-card{
          min-width:100%;
        }
      }

      `}</style>
    </div>
  );
}

export default ContactUs;