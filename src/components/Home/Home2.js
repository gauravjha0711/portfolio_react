import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg2 from "../../Assets/avatar2.jpg";
import myImg1 from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  const [selectedImg, setSelectedImg] = useState(myImg2);

  const handleImageClick = () => {
    setSelectedImg((prev) => (prev === myImg1 ? myImg2 : myImg1));
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have continuously learning and growing ever since. 🤷‍♂️
              <br /> <br />
              I enjoy collaborating on projects, solving real-world problems, and constantly sharpening <br/>my skills to stay ahead in the ever-evolving tech landscape.
              <br />
              <br />I’m fluent in languages like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My areas of interest include building &nbsp;
              <i>
                <b className="purple">innovative Web Technologies and Products, </b><br/>
                and as well as exploring fields related to{" "}
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing products using <b className="purple">Node.js</b> and<br/>
              <i>
                <b className="purple"> Modern Javascript Library and Frameworks </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar" style={{ textAlign: "center" }}>
            <div style={{ color: "#c770f0", fontWeight: "bold", marginBottom: "10px", fontSize: "18px" }}>
              📸 Click on pic to swap
            </div>
            <Tilt>
              <img 
                src={selectedImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ borderRadius: "15%", cursor: "pointer" }} 
                onClick={handleImageClick}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gauravjha0711"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/gauravjha0711/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode size={30} color="#FFA116" />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gaurav-kumar-729503265/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/gauravjhagk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
