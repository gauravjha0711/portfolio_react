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
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Stagger Animation for Cards */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {[ 
              {
                imgPath: vasudevaStore,
                title: "Vasudeva Store",
                description: "Vasudeva Store is a React-based online grocery and general store with user authentication, product search, add-to-cart, and order placement features.",
                ghLink: "https://github.com/gauravjha0711/vasudevaStore",
                demoLink: "https://vasudevastore.netlify.app/",
              },
              {
                imgPath: onlineClothStore,
                title: "Online Cloth Shop",
                description: "Online Clothing Store is a React-based e-commerce platform with user authentication, product search, cart management, and secure checkout.",
                ghLink: "https://github.com/gauravjha0711/onlineClothShop",
                demoLink: "https://onlineclothshop.netlify.app/",
              },
              {
                imgPath: tourWithLove,
                title: "Tour With Love",
                description: "Tour with Love is a React-based platform showcasing travel destinations, offering personalized recommendations based on user preferences.",
                ghLink: "https://github.com/gauravjha0711/tour_with_love",
                demoLink: "https://tourwithlove.netlify.app/",
              },
              {
                imgPath: gifGenerator,
                title: "Gif Generator by Search",
                description: "Generate random GIFs or search for specific ones using an API call, offering a fun and interactive way to explore animated content.",
                ghLink: "https://github.com/gauravjha0711/gif",
                demoLink: "https://gifgeneratorbysearch.netlify.app/",
              },
              {
                imgPath: courseOption,
                title: "Course Sort Listing",
                description: "Sort and filter through various courses, with like/dislike features for personalizing your learning preferences.",
                ghLink: "https://github.com/gauravjha0711/course",
                demoLink: "https://courseoption.netlify.app/",
              },
              {
                imgPath: weatherApp,
                title: "Weather App",
                description: "Get real-time weather updates with a responsive interface and live API calls for location-based and searched weather data.",
                ghLink: "https://github.com/gauravjha0711/Weather-App",
                demoLink: "https://gauravjha0711.github.io/Weather-App/",
              },
              {
                imgPath: ticTaeToe,
                title: "Tic-Tae-Toe",
                description: "A classic Tic-Tac-Toe game with a gradient background and a new game reset functionality.",
                ghLink: "https://github.com/gauravjha0711/Tic-Tac-Toe",
                demoLink: "https://gauravjha0711.github.io/Tic-Tac-Toe/",
              },
              {
                imgPath: passwordGenerator,
                title: "Password Generator",
                description: "Generate strong, secure, and customizable passwords with numbers, symbols, and letters.",
                ghLink: "https://github.com/gauravjha0711/Password-Generator",
                demoLink: "https://gauravjha0711.github.io/Password-Generator/",
              },
            ].map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
