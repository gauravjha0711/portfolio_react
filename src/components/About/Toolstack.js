import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiRabbitmq,
  SiGithub,
  SiGit,
  SiLinux,
  SiSwagger,
  SiMicrosoftsqlserver,
  SiAmazon,
  SiMicrosoftazure,
  SiVisualstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>

      {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio title="Visual Studio" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      {/* API Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger title="Swagger" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="SQL Server" />
      </Col>

      {/* DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes title="Kubernetes" />
      </Col>

      {/* Microservices */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq title="RabbitMQ" />
      </Col>

      {/* Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon title="AWS" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Azure" />
      </Col>

    </Row>
  );
}

export default Toolstack;
