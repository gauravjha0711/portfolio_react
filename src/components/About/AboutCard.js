import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurav Kumar </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            I am pursuing B.tech in CSE from Loevly Professional University, Punjab.
            <br />
            As a Full Stack Software Engineer, I’m passionate about mastering both front-end and back-end technologies. I enjoy building scalable web applications using tools like React.js, Node.js, and the MERN stack.            <br />
            <br />
            🚀Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />🏏 Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight />🎬 Watching Movies.
            </li>
            <li className="about-activity">
              <ImPointRight />✈️ Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not just about what you create, <br/>but how you make others feel through it.!"{" "}
          </p>
          <footer className="blockquote-footer">Gaurav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
