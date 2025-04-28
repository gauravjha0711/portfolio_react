import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Card className="quote-card-view" style={{ background: "transparent", border: "none" }}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Gaurav Kumar </span>
              from <span className="purple"> Patna, India.</span>
              <br />
              I am pursuing B.tech in CSE from Lovely Professional University, Punjab.
              <br />
              As a Full Stack Software Engineer, I’m passionate about mastering both front-end and back-end technologies. 
              I enjoy building scalable web applications using tools like React.js, Node.js, and the MERN stack.
              <br />
              <br />
              🚀 Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <motion.li
                className="about-activity"
                whileHover={{ scale: 1.1, color: "#ff7eb3" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImPointRight /> 🏏 Playing Cricket
              </motion.li>
              <motion.li
                className="about-activity"
                whileHover={{ scale: 1.1, color: "#ff7eb3" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImPointRight /> 🎬 Watching Movies
              </motion.li>
              <motion.li
                className="about-activity"
                whileHover={{ scale: 1.1, color: "#ff7eb3" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImPointRight /> ✈️ Travelling
              </motion.li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Success is not just about what you create, <br />
              but how you make others feel through it.!"
            </p>
            <footer className="blockquote-footer">Gaurav</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default AboutCard;
