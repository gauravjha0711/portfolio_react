import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import vasudevaStore from "../../Assets/Projects/vasudevastore.png";
import onlineClothStore from "../../Assets/Projects/onlineClothShop.png";
import gifGenerator from "../../Assets/Projects/gifGeneratorBySearch.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import passwordGenerator from "../../Assets/Projects/passwordGenerator.png";
import ticTaeToe from "../../Assets/Projects/ticTaeToe.png";
import tourWithLove from "../../Assets/Projects/tourWithLove.png";
import courseOption from "../../Assets/Projects/courseOption.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vasudevaStore}
              // isBlog={false}
              title="Vasudeva Store"
              description="Vasudeva Store is a React-based online grocery and general store with user authentication, product search, add-to-cart, and order placement features. It offers a seamless and convenient shopping experience with a clean and responsive interface"
              ghLink="https://github.com/gauravjha0711/vasudevaStore"
              demoLink="https://vasudevastore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineClothStore}
              // isBlog={false}
              title="Online Cloth Shop"
              description="Online Clothing Store is a React-based e-commerce platform that offers a smooth shopping experience with features like user authentication, product search, cart management, and secure checkout. Powered by Redux, it efficiently manages user sessions, cart items, and product data for seamless performance. With an intuitive design and responsive interface, it ensures hassle-free navigation and a convenient shopping journey."
              ghLink="https://github.com/gauravjha0711/onlineClothShop"
              demoLink="https://onlineclothshop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourWithLove}
              // isBlog={false}
              title="tourWithLove"
              description="Tour with Love is a React-based platform showcasing travel destinations with detailed descriptions and prices Users can explore tours and mark them as 'Not Interested' for personalized recommendations"
              ghLink="https://github.com/gauravjha0711/tour_with_love"
              demoLink="https://tourwithlove.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gifGenerator}
              // isBlog={false}
              title="Gif generator by search"
              description="The app allows users to generate random GIFs and search for specific ones using an API call, providing a fun and interactive way to discover animated content. The seamless integration of the GIF search feature enhances user experience with quick results and smooth browsing."
              ghLink="https://github.com/gauravjha0711/gif"
              demoLink="https://gifgeneratorbysearch.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courseOption}
              // isBlog={false}
              title="Course sort listing"
              description="The platform offers a variety of courses that users can sort based on their requirements, making it easy to find relevant content. Additionally, users can like or dislike courses to personalize their learning preferences."
              ghLink="https://github.com/gauravjha0711/course"
              demoLink="https://courseoption.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              // isBlog={false}
              title="Weather App"
              description="The app provides real-time weather updates for your current location or any place you search, powered by API calls. Users can easily access detailed weather reports with a smooth and responsive interface."
              ghLink="https://github.com/gauravjha0711/Weather-App"
              demoLink="https://gauravjha0711.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTaeToe}
              // isBlog={false}
              title="Tic-Tae-Toe"
              description="The Tic-Tac-Toe game features a visually appealing gradient color background, enhancing the user experience. After a win, the winner is displayed as X or O, and users can start a new game with an attractive, vibrant interface."
              ghLink="https://github.com/gauravjha0711/Tic-Tac-Toe"
              demoLink="https://gauravjha0711.github.io/Tic-Tac-Toe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordGenerator}
              // isBlog={false}
              title="Password Generator"
              description="The password generator allows users to customize their password by selecting options for numbers, uppercase and lowercase letters, and special symbols. This feature ensures the creation of secure and complex passwords tailored to user preferences."
              ghLink="https://github.com/gauravjha0711/Password-Generator"
              demoLink="https://gauravjha0711.github.io/Password-Generator/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
