import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={mern}
              title="MERN Stack Development"
              issuer="CSE Pathshala"
              description="This certificate validates my successful completion of the MERN Stack Development course, which covered MongoDB, Express.js, React.js, and Node.js. It enhanced my skills in full-stack web development and building dynamic applications."
              certLink="https://github.com/gauravjha0711/Mern-Stack_course/blob/main/mern_stack_cse_pathsaala.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={nptelCloud}
              title="Cloud Computing"
              issuer="NPTEL"
              description="Completed an 8-week certification course on Cloud Computing conducted by NPTEL, covering AWS, IaaS, PaaS, SaaS, virtualization, and cloud security concepts. It enhanced my understanding of cloud technologies and their applications."
              certLink="https://github.com/gauravjha0711/nptelCloudComputing/blob/main/Cloud%20Computing.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={acmegrade}
              title="Training on Acmegrade"
              issuer="Acmegrade"
              description="This certificate validates my successful completion of the training program on Acmegrade, which focused on enhancing my skills in web development and related technologies. It provided valuable insights into industry practices and tools."
              certLink="https://github.com/gauravjha0711/Internship/blob/main/acmegrade.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={DevopsIBM}
              title="DevOps and Software Engineering"
              issuer="IBM"
              description="This certificate validates my successful completion of the DevOps and Software Engineering course offered by IBM. It enhanced my understanding of DevOps practices, software development methodologies, and tools for continuous integration and deployment."
              certLink="https://github.com/gauravjha0711/devopsIBM/blob/main/Coursera_Main_IBM_Devops_and_Software_engineering.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={node}
              title="Node.js"
              issuer="Coursera"
              description="This certificate validates my successful completion of the Node.js course offered by Coursera. It enhanced my understanding of Node.js fundamentals, asynchronous programming, and building scalable applications using JavaScript on the server side."
              certLink="https://github.com/gauravjha0711/backendCoursera/blob/main/node_js_mooc_Coursera.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Udemy}
              title="Data Structures and Algorithms"
              issuer="Udemy"
              description="This certificate validates my successful completion of the Data Structures and Algorithms course on Udemy. It enhanced my understanding of fundamental data structures, algorithms, and problem-solving techniques in computer science."
              certLink="https://github.com/gauravjha0711/dsaCoursera/blob/main/Udemy_DSA.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={frontend}
              title="Frontend Development"
              issuer="Coursera"
              description="This certificate validates my successful completion of the Frontend Development course offered by Coursera. It enhanced my skills in HTML, CSS, JavaScript, and responsive web design, enabling me to create engaging user interfaces."
              certLink="https://github.com/gauravjha0711/frontendUdemy/blob/main/frontend_mooc_coursera.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={php}
              title="Building web using PHP"
              issuer="COURSEERA"
              description="This certificate validates my successful completion of the Building Web Applications in PHP course offered by the University of Michigan through Coursera. It enhanced my understanding of PHP fundamentals, web development concepts, and server-side programming techniques."
              certLink="https://github.com/gauravjha0711/phpCertificate/blob/main/Coursera_Php.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ngo}
              title="NGO Volunteer"
              issuer="Read India"
              description="I volunteered at Read India, an NGO focused on improving literacy and education in rural areas. I contributed to their mission by assisting in organizing educational programs and community outreach initiatives."
              certLink="https://github.com/gauravjha0711/ngoCertificate/blob/main/certificate_ngo1.jpg"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
