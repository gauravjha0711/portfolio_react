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
                description:
                  "Vasudeva Store is a feature-rich React-based online grocery and general store platform. It supports user registration, login authentication, personalized dashboards, dynamic product search, cart functionality, and order placement. Admins can manage inventory, while users enjoy a seamless and responsive shopping experience. Technologies used include React, Firebase for auth, and local storage for state persistence.",
                ghLink: "https://github.com/gauravjha0711/vasudevaStore",
                demoLink: "https://vasudevastore.netlify.app/",
              },
              {
                imgPath: onlineClothStore,
                title: "Online Cloth Shop",
                description:
                  "A React-powered online clothing store offering users a smooth e-commerce experience with full authentication, search capabilities, filtering by category, cart management, and secure checkout. It features responsive design, dynamic UI rendering, and efficient state management using hooks. Firebase is used for backend services including authentication and real-time database.",
                ghLink: "https://github.com/gauravjha0711/onlineClothShop",
                demoLink: "https://onlineclothshop.netlify.app/",
              },
              {
                imgPath: tourWithLove,
                title: "Tour With Love",
                description:
                  "Tour With Love is a React-based travel platform that curates beautiful travel destinations with rich imagery, descriptions, and user-personalized recommendations. It offers a smooth UI, location-specific filters, and user-interactive design. Ideal for travel bloggers and explorers looking for inspiration or planning a trip.",
                ghLink: "https://github.com/gauravjha0711/tour_with_love",
                demoLink: "https://tourwithlove.netlify.app/",
              },
              {
                imgPath: gifGenerator,
                title: "GIF Generator by Search",
                description:
                  "An interactive app that lets users generate random GIFs or search for specific ones using the Giphy API. Built with React, it showcases efficient API integration, loading states, and a fun user interface that responds to both user input and random generation. Ideal for users who enjoy exploring animated content.",
                ghLink: "https://github.com/gauravjha0711/gif",
                demoLink: "https://gifgeneratorbysearch.netlify.app/",
              },
              {
                imgPath: courseOption,
                title: "Course Sort Listing",
                description:
                  "Course Sort Listing is a dynamic web app that allows users to explore, filter, and sort a variety of courses. It includes features like liking/disliking courses to personalize recommendations. Built using React, this project demonstrates effective component structuring, props handling, and conditional rendering for personalized UI updates.",
                ghLink: "https://github.com/gauravjha0711/course",
                demoLink: "https://courseoption.netlify.app/",
              },
              {
                imgPath: weatherApp,
                title: "Weather App",
                description:
                  "A responsive weather forecasting application that retrieves real-time data based on user’s location or custom search queries. Built with HTML, CSS, JS, and OpenWeatherMap API, it provides temperature, humidity, and weather icons. It showcases API handling, asynchronous JavaScript, and clean UI design.",
                ghLink: "https://github.com/gauravjha0711/Weather-App",
                demoLink: "https://gauravjha0711.github.io/Weather-App/",
              },
              {
                imgPath: ticTaeToe,
                title: "Tic-Tac-Toe",
                description:
                  "A colorful and interactive Tic-Tac-Toe game featuring gradient styling and a responsive layout. It allows two-player interaction with win/draw detection, game history reset, and user-friendly design. Built with HTML, CSS, and JavaScript, it's a great demonstration of DOM manipulation and logic building.",
                ghLink: "https://github.com/gauravjha0711/Tic-Tac-Toe",
                demoLink: "https://gauravjha0711.github.io/Tic-Tac-Toe/",
              },
              {
                imgPath: passwordGenerator,
                title: "Password Generator",
                description:
                  "Generate secure and customizable passwords based on user preferences including length, inclusion of symbols, numbers, and uppercase/lowercase characters. Built using vanilla JavaScript, HTML, and CSS, the app ensures users can create strong credentials quickly. Ideal for improving digital safety and password hygiene.",
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