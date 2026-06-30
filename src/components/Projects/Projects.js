import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

import capshop from "../../Assets/Projects/capshop.png";
import vasudevaStore from "../../Assets/Projects/vasudevastore.png";
import onlineClothStore from "../../Assets/Projects/onlineClothShop.png";
import gifGenerator from "../../Assets/Projects/gifGeneratorBySearch.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import passwordGenerator from "../../Assets/Projects/passwordGenerator.png";
import ticTaeToe from "../../Assets/Projects/ticTaeToe.png";
import tourWithLove from "../../Assets/Projects/tourWithLove.png";
import courseOption from "../../Assets/Projects/courseOption.png";

function Projects() {

  const projects = [

    // ================= CAPSHOP =================

    {
      imgPath: capshop,

      title:
        "CapShop E-Commerce",

      description:
        "CapShop is an enterprise-grade microservices-based e-commerce platform developed using ASP.NET Core, React, SQL Server, RabbitMQ, Redis, Ocelot API Gateway, Razorpay and Saga Pattern. The application follows modern distributed architecture principles including Event-Driven Communication, JWT Authentication, Redis Caching, API Gateway Routing, and Microservices Architecture. Customers can browse products, manage carts, place orders and make secure payments, while administrators can manage products, inventory, orders and dashboard analytics.",

      techStack:
        "React • ASP.NET Core • C# • Entity Framework Core • SQL Server • RabbitMQ • Redis • Ocelot API Gateway • Razorpay • Saga Pattern • JWT Authentication • Docker • Microservices",

      ghLink:
        "https://github.com/gauravjha0711?tab=repositories",

      demoLink: null,
    },

    // ================= VASUDEVA =================

    {
      imgPath: vasudevaStore,

      title: "Vasudeva Store",

      description:
        "Vasudeva Store is a feature-rich React-based online grocery and general store platform. It supports user registration, login authentication, personalized dashboards, dynamic product search, cart functionality, and order placement. Admins can manage inventory, while users enjoy a seamless and responsive shopping experience.",

      techStack:
        "React • Firebase • JavaScript • Bootstrap • Authentication • Local Storage",

      ghLink:
        "https://github.com/gauravjha0711/vasudevaStore",

      demoLink:
        "https://vasudevastore.netlify.app/",
    },

    // ================= CLOTH SHOP =================

    {
      imgPath: onlineClothStore,

      title: "Online Cloth Shop",

      description:
        "A React-powered online clothing store offering users a smooth e-commerce experience with authentication, search capabilities, category filtering, cart management, and secure checkout. It features responsive design and efficient state management.",

      techStack:
        "React • Firebase • JavaScript • Bootstrap • Authentication",

      ghLink:
        "https://github.com/gauravjha0711/onlineClothShop",

      demoLink:
        "https://onlineclothshop.netlify.app/",
    },

    // ================= TOUR =================

    {
      imgPath: tourWithLove,

      title: "Tour With Love",

      description:
        "Tour With Love is a React-based travel platform that curates beautiful travel destinations with rich imagery, descriptions, and user-personalized recommendations. It offers a smooth UI and location-specific filters.",

      techStack:
        "React • JavaScript • CSS • Responsive Design",

      ghLink:
        "https://github.com/gauravjha0711/tour_with_love",

      demoLink:
        "https://tourwithlove.netlify.app/",
    },

    // ================= GIF =================

    {
      imgPath: gifGenerator,

      title: "GIF Generator by Search",

      description:
        "An interactive application that allows users to generate random GIFs or search specific GIFs using the Giphy API. It demonstrates API integration, loading states, asynchronous operations, and responsive UI.",

      techStack:
        "React • JavaScript • Giphy API • Axios",

      ghLink:
        "https://github.com/gauravjha0711/gif",

      demoLink:
        "https://gifgeneratorbysearch.netlify.app/",
    },

    // ================= COURSE =================

    {
      imgPath: courseOption,

      title: "Course Sort Listing",

      description:
        "A dynamic course recommendation platform allowing users to explore, filter, and sort courses with personalized interactions using likes and dislikes.",

      techStack:
        "React • JavaScript • State Management • Props",

      ghLink:
        "https://github.com/gauravjha0711/course",

      demoLink:
        "https://courseoption.netlify.app/",
    },

    // ================= WEATHER =================

    {
      imgPath: weatherApp,

      title: "Weather App",

      description:
        "A responsive weather forecasting application that retrieves real-time weather information based on location and user searches using external APIs.",

      techStack:
        "HTML • CSS • JavaScript • OpenWeather API",

      ghLink:
        "https://github.com/gauravjha0711/Weather-App",

      demoLink:
        "https://gauravjha0711.github.io/Weather-App/",
    },

    // ================= TICTACTOE =================

    {
      imgPath: ticTaeToe,

      title: "Tic-Tac-Toe",

      description:
        "A colorful and interactive Tic-Tac-Toe game featuring responsive design, win/draw detection, game reset functionality, and DOM manipulation.",

      techStack:
        "HTML • CSS • JavaScript • DOM Manipulation",

      ghLink:
        "https://github.com/gauravjha0711/Tic-Tac-Toe",

      demoLink:
        "https://gauravjha0711.github.io/Tic-Tac-Toe/",
    },

    // ================= PASSWORD =================

    {
      imgPath: passwordGenerator,

      title: "Password Generator",

      description:
        "A secure password generation tool allowing users to create strong and customizable passwords with options for symbols, uppercase letters, numbers, and length.",

      techStack:
        "HTML • CSS • JavaScript",

      ghLink:
        "https://github.com/gauravjha0711/Password-Generator",

      demoLink:
        "https://gauravjha0711.github.io/Password-Generator/",
    },
  ];

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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            {projects.map((project, index) => (
              <Col
                md={4}
                className="project-card"
                key={index}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
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