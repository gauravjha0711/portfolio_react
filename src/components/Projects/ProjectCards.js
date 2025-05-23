import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const maxLength = 180;
  const isLong = props.description.length > maxLength;
  const displayText = expanded
    ? props.description
    : `${props.description.slice(0, maxLength)}${isLong ? "..." : ""}`;

  return (
    <Card className="project-card-view h-100 d-flex flex-column justify-content-between">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {displayText}
            {isLong && (
              <span
                onClick={toggleExpanded}
                style={{ color: "#0dcaf0", cursor: "pointer", marginLeft: "5px" }}
              >
                {expanded ? "Show less" : "Read more"}
              </span>
            )}
          </Card.Text>
        </div>

        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {" "}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
