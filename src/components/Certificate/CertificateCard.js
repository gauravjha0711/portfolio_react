import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillAwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function CertificateCard(props) {
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
    <Card className="certificate-card-view custom-glow-card h-100 d-flex flex-column justify-content-between">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title className="text-light">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.issuer}</Card.Subtitle>
          <Card.Text className="text-light" style={{ textAlign: "justify" }}>
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
          {props.certLink && (
            <Button variant="success" href={props.certLink} target="_blank">
              <BsFillAwardFill /> &nbsp; View Certificate
            </Button>
          )}
          {" "}
          {props.demoLink && (
            <Button
              variant="info"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Visit
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
