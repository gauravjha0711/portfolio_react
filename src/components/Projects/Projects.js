import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion"; // Import motion

import vasudevaStore from "../../Assets/Projects/vasudevastore.png";
import onlineClothStore from "../../Assets/Projects/onlineClothShop.png";
import gifGenerator from "../../Assets/Projects/gifGeneratorBySearch.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import passwordGenerator from "../../Assets/Projects/passwordGenerator.png";
import ticTaeToe from "../../Assets/Projects/ticTaeToe.png";
import tourWithLove from "../../Assets/Projects/tourWithLove.png";
import courseOption from "../../Assets/Projects/courseOption.png";

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.h1 
          className="project-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Recent <strong className="purple">Works</strong>
        </motion.h1>

        <motion.p 
          style={{ color: "white" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here are a few projects I've worked on recently.
        </motion.p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {[
            {
              imgPath: vasudevaStore,
              title: "Vasudeva Store",
              description: "Vasudeva Store is a React-based online grocery and general store with user authentication, product search, add-to-cart, and order placement features. It offers a seamless and convenient shopping experience with a clean and responsive interface.",
              ghLink: "https://github.com/gauravjha0711/vasudevaStore",
              demoLink: "https://vasudevastore.netlify.app/",
            },
            {
              imgPath: onlineClothStore,
              title: "Online Cloth Shop",
              description: "Online Clothing Store is a React-based e-commerce platform that offers a smooth shopping experience with features like user authentication, product search, cart management, and secure checkout.",
              ghLink: "https://github.com/gauravjha0711/onlineClothShop",
              demoLink: "https://onlineclothshop.netlify.app/",
            },
            {
              imgPath: tourWithLove,
              title: "Tour With Love",
              description: "Tour with Love is a React-based platform showcasing travel destinations. Users can explore tours and mark them as 'Not Interested' for personalized recommendations.",
              ghLink: "https://github.com/gauravjha0711/tour_with_love",
              demoLink: "https://tourwithlove.netlify.app/",
            },
            {
              imgPath: gifGenerator,
              title: "Gif Generator by Search",
              description: "Generate random GIFs and search for specific ones using an API call. A fun and interactive way to discover animated content.",
              ghLink: "https://github.com/gauravjha0711/gif",
              demoLink: "https://gifgeneratorbysearch.netlify.app/",
            },
            {
              imgPath: courseOption,
              title: "Course Sort Listing",
              description: "Platform offers a variety of courses users can sort based on their requirements, with like/dislike features for personalizing learning preferences.",
              ghLink: "https://github.com/gauravjha0711/course",
              demoLink: "https://courseoption.netlify.app/",
            },
            {
              imgPath: weatherApp,
              title: "Weather App",
              description: "Get real-time weather updates for your location or searched places, powered by live API calls with a responsive UI.",
              ghLink: "https://github.com/gauravjha0711/Weather-App",
              demoLink: "https://gauravjha0711.github.io/Weather-App/",
            },
            {
              imgPath: ticTaeToe,
              title: "Tic-Tae-Toe",
              description: "Classic Tic-Tac-Toe game with a visually appealing gradient background and new game reset functionality.",
              ghLink: "https://github.com/gauravjha0711/Tic-Tac-Toe",
              demoLink: "https://gauravjha0711.github.io/Tic-Tac-Toe/",
            },
            {
              imgPath: passwordGenerator,
              title: "Password Generator",
              description: "Customize your password with numbers, symbols, and letters for strong, secure, and personalized password generation.",
              ghLink: "https://github.com/gauravjha0711/Password-Generator",
              demoLink: "https://gauravjha0711.github.io/Password-Generator/",
            },
          ].map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
