import React from "react";
import { Col, Row } from "react-bootstrap";

import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiAngularSimple,
} from "react-icons/di";

import {
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiDjango,
  SiRedis,
  SiRabbitmq,
  SiMicrosoftsqlserver,
  SiCsharp,
  SiRazorpay,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp title="PHP" />
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap title="Bootstrap" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet title=".NET / ASP.NET Core" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django" />
      </Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="SQL Server" />
      </Col>

      {/* Microservices & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq title="RabbitMQ" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDocker title="Docker" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>

      {/* Payment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRazorpay title="Razorpay" />
      </Col>

    </Row>
  );
}

export default Techstack;
