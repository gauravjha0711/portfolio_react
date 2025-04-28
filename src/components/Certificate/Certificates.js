import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";

// Import your certificate images here
import nptelCloud from "../../Assets/Certificates/CloudComputing.png";
import acmegrade from "../../Assets/Certificates/acmegrade.jpg";
import DevopsIBM from "../../Assets/Certificates/DevopsIBM.png";
import frontend from "../../Assets/Certificates/frontend.png";
import mern from "../../Assets/Certificates/mern.jpg";
import ngo from "../../Assets/Certificates/ngo.jpg";
import node from "../../Assets/Certificates/node.png";
import php from "../../Assets/Certificates/php.png";
import Udemy from "../../Assets/Certificates/Udemy_DSA.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few certifications I've earned along my journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Animation Wrapper */}
          {[ 
            { img: mern, title: "MERN Stack Development", issuer: "CSE Pathshala", desc: "This certificate validates my successful completion of the MERN Stack Development course, which covered MongoDB, Express.js, React.js, and Node.js. It enhanced my skills in full-stack web development and building dynamic applications.", link: "https://github.com/gauravjha0711/Mern-Stack_course/blob/main/mern_stack_cse_pathsaala.jpg" },
            { img: nptelCloud, title: "Cloud Computing", issuer: "NPTEL", desc: "Completed an 8-week certification course on Cloud Computing conducted by NPTEL, covering AWS, IaaS, PaaS, SaaS, virtualization, and cloud security concepts. It enhanced my understanding of cloud technologies and their applications.", link: "https://github.com/gauravjha0711/nptelCloudComputing/blob/main/Cloud%20Computing.pdf" },
            { img: acmegrade, title: "Training on Acmegrade", issuer: "Acmegrade", desc: "This certificate validates my successful completion of the training program on Acmegrade, which focused on enhancing my skills in web development and related technologies. It provided valuable insights into industry practices and tools.", link: "https://github.com/gauravjha0711/Internship/blob/main/acmegrade.jpg" },
            { img: DevopsIBM, title: "DevOps and Software Engineering", issuer: "IBM", desc: "This certificate validates my successful completion of the DevOps and Software Engineering course offered by IBM. It enhanced my understanding of DevOps practices, software development methodologies, and tools for continuous integration and deployment.", link: "https://github.com/gauravjha0711/devopsIBM/blob/main/Coursera_Main_IBM_Devops_and_Software_engineering.pdf" },
            { img: node, title: "Node.js", issuer: "Coursera", desc: "This certificate validates my successful completion of the Node.js course offered by Coursera. It enhanced my understanding of Node.js fundamentals, asynchronous programming, and building scalable applications using JavaScript on the server side.", link: "https://github.com/gauravjha0711/backendCoursera/blob/main/node_js_mooc_Coursera.pdf" },
            { img: Udemy, title: "Data Structures and Algorithms", issuer: "Udemy", desc: "This certificate validates my successful completion of the Data Structures and Algorithms course on Udemy. It enhanced my understanding of fundamental data structures, algorithms, and problem-solving techniques in computer science.", link: "https://github.com/gauravjha0711/dsaCoursera/blob/main/Udemy_DSA.pdf" },
            { img: frontend, title: "Frontend Development", issuer: "Coursera", desc: "This certificate validates my successful completion of the Frontend Development course offered by Coursera. It enhanced my skills in HTML, CSS, JavaScript, and responsive web design, enabling me to create engaging user interfaces.", link: "https://github.com/gauravjha0711/frontendUdemy/blob/main/frontend_mooc_coursera.pdf" },
            { img: php, title: "Building web using PHP", issuer: "COURSEERA", desc: "This certificate validates my successful completion of the Building Web Applications in PHP course offered by the University of Michigan through Coursera. It enhanced my understanding of PHP fundamentals, web development concepts, and server-side programming techniques.", link: "https://github.com/gauravjha0711/phpCertificate/blob/main/Coursera_Php.pdf" },
            { img: ngo, title: "NGO Volunteer", issuer: "Read India", desc: "I volunteered at Read India, an NGO focused on improving literacy and education in rural areas. I contributed to their mission by assisting in organizing educational programs and community outreach initiatives.", link: "https://github.com/gauravjha0711/ngoCertificate/blob/main/certificate_ngo1.jpg" },
          ].map((certificate, index) => (
            <Col md={4} className="project-card" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificateCard
                  imgPath={certificate.img}
                  title={certificate.title}
                  issuer={certificate.issuer}
                  description={certificate.desc}
                  certLink={certificate.link}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
