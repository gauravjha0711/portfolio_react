import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 120;

  const isLong =
    props.description &&
    props.description.length > maxLength;

  const displayText = expanded
    ? props.description
    : `${props.description.slice(
        0,
        maxLength
      )}${isLong ? "..." : ""}`;

  return (
    <Card
      className="project-card-view"
      style={{
        background: "rgba(18,18,30,0.9)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(199,112,240,0.2)",
        borderRadius: "22px",
        overflow: "hidden",
        minHeight: "700px",
        maxHeight: "700px",
        transition: "all .35s ease",
        boxShadow: "0 0 20px rgba(199,112,240,.12)",
      }}
    >
      {/* Project Image */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        style={{
          height: "210px",
          objectFit: "cover",
          borderBottom:
            "1px solid rgba(199,112,240,0.15)",
        }}
      />

      <Card.Body
        className="d-flex flex-column"
        style={{
          padding: "25px",
        }}
      >
        {/* Featured Badge */}
        {props.featured && (
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg,#c770f0,#8b5cf6)",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "700",
                color: "white",
              }}
            >
              ⭐ Featured Project
            </span>
          </div>
        )}

        {/* Title */}
        <Card.Title
          style={{
            color: "#fff",
            fontSize: "1.6rem",
            fontWeight: "700",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {props.title}
        </Card.Title>

        {/* Description */}
        <Card.Text
          style={{
            color: "#d7d7d7",
            lineHeight: "1.8",
            fontSize: ".95rem",
            textAlign: "justify",
            minHeight: "140px",
          }}
        >
          {displayText}

          {isLong && (
            <span
              onClick={() =>
                setExpanded(!expanded)
              }
              style={{
                color: "#c770f0",
                cursor: "pointer",
                fontWeight: "700",
                marginLeft: "6px",
              }}
            >
              {expanded
                ? " Show less"
                : " Read more"}
            </span>
          )}
        </Card.Text>

        {/* Tech Stack */}
        {props.techStack && (
          <div
            style={{
              marginBottom: "20px",
              marginTop: "10px",
              padding: "18px",
              borderRadius: "15px",
              background:
                "rgba(199,112,240,0.08)",
              border:
                "1px solid rgba(199,112,240,0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#c770f0",
                fontWeight: "700",
                marginBottom: "12px",
                fontSize: "1rem",
              }}
            >
              <FaCode
                style={{
                  marginRight: "8px",
                }}
              />
              Tech Stack
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {props.techStack
                .split("•")
                .slice(0, 7)
                .map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background:
                        "rgba(199,112,240,0.15)",
                      color: "#d88cff",
                      border:
                        "1px solid rgba(199,112,240,0.35)",
                      padding:
                        "6px 12px",
                      borderRadius:
                        "20px",
                      fontSize:
                        "12px",
                      fontWeight:
                        "500",
                    }}
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div
          className="mt-auto"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* Github */}
          <Button
            href={props.ghLink}
            target="_blank"
            style={{
              background:
                "#c770f0",
              border: "none",
              borderRadius:
                "10px",
              padding:
                "10px 20px",
              fontWeight:
                "600",
            }}
          >
            <BsGithub />
            &nbsp;GitHub
          </Button>

          {/* Demo */}
          {props.demoLink && (
            <Button
              href={
                props.demoLink
              }
              target="_blank"
              style={{
                background:
                  "#8b5cf6",
                border: "none",
                borderRadius:
                  "10px",
                padding:
                  "10px 20px",
                fontWeight:
                  "600",
              }}
            >
              <CgWebsite />
              &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>

      {/* Hover Effect */}
      <style>{`
        .project-card-view:hover{
          transform:translateY(-10px);
          box-shadow:
            0 20px 40px rgba(199,112,240,.25),
            0 0 25px rgba(199,112,240,.15);
        }
      `}</style>
    </Card>
  );
}

export default ProjectCards;