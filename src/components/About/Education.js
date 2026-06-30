import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Matriculation (10th)",
      institute: "Red Carpet High School, Patna",
      board: "ICSE Board",
      year: "2020",
      score: "85.2%",
      description:
        "Completed secondary education with strong academic foundations in Mathematics, Science, English, and analytical problem-solving.",
    },

    {
      icon: <FaGraduationCap />,
      title: "Senior Secondary (12th)",
      institute: "A.N. College, Patna",
      board: "BSEB Board",
      year: "2022",
      score: "79%",
      description:
        "Completed higher secondary education with specialization in Physics, Chemistry, Mathematics, and Computer Science.",
    },

    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Technology (CSE)",
      institute: "Lovely Professional University, Punjab",
      board: "Undergraduate Program",
      year: "2022 – 2026",
      score: "CGPA: 8.0/10",
      description:
        "Pursuing Computer Science Engineering with specialization in Full Stack Development, Microservices Architecture, DevOps Engineering, Distributed Systems, and Software Engineering.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Software Engineer Trainee",
      institute: "Capgemini",
      board: "Industry Training Program",
      year: "Dec 2025 – May 2026",
      score: "6 Months",
      description:
        "Completed industry-oriented software engineering training focused on enterprise application development and modern software architecture practices.",
      skills: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "REST APIs",
        "Redis",
        "RabbitMQ",
        "Microservices",
        "Docker",
        "Git",
        "Clean Architecture",
      ],
    },
  ];

  return (
    <Container className="education-section">
      <h1 className="education-heading">
        Educational <span>Journey</span>
      </h1>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">
              <div className="year-badge">
                {item.year}
              </div>

              <h3>{item.title}</h3>

              <h4 className="institution">
                {item.institute}
              </h4>

              <div className="board">
                {item.board}
              </div>

              <div className="timeline-meta">
                <span className="score">
                  {item.score}
                </span>
              </div>

              <p>{item.description}</p>

              {item.skills && (
                <div className="skills-container">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="skill-chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .education-section {
          padding: 100px 0;
          position: relative;
        }

        .education-heading {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 100px;
          color: white;
          font-weight: 700;
        }

        .education-heading span {
          color: #c770f0;
        }

        .timeline {
          position: relative;
          max-width: 1100px;
          margin: auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            #c770f0,
            rgba(199,112,240,0.15)
          );
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          display: flex;
          justify-content: center;
          margin: 90px 0;
        }

        .timeline-icon {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #c770f0,
            #8b5cf6
          );
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          z-index: 10;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 15px rgba(199,112,240,0.3);
          }
          50% {
            box-shadow:
              0 0 35px rgba(199,112,240,0.9),
              0 0 60px rgba(199,112,240,0.3);
          }
          100% {
            box-shadow: 0 0 15px rgba(199,112,240,0.3);
          }
        }

        .timeline-content {
          width: 42%;
          padding: 32px;
          border-radius: 24px;
          background: rgba(18,18,30,0.85);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(199,112,240,0.25);
          position: relative;
          overflow: hidden;
          transition: all .4s ease;
        }

        .timeline-content::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(199,112,240,.7),
            rgba(0,212,255,.3)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .timeline-content:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow:
            0 20px 40px rgba(199,112,240,0.2),
            0 0 30px rgba(199,112,240,0.1);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: 55%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
        }

        .year-badge {
          display: inline-block;
          background: linear-gradient(
            90deg,
            #c770f0,
            #8b5cf6
          );
          color: white;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .timeline-content h3 {
          color: #d48fff;
          font-size: 1.7rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .institution {
          color: #00d4ff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .board {
          display: inline-block;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #bbb;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .timeline-meta {
          margin-bottom: 20px;
        }

        .score {
          background: #c770f0;
          color: white;
          padding: 8px 18px;
          border-radius: 25px;
          font-weight: 700;
        }

        .timeline-content p {
          color: #d7d7d7;
          line-height: 1.8;
          font-size: 1rem;
        }

        .skills-container {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-chip {
          background: rgba(199,112,240,.12);
          color: #d48fff;
          border: 1px solid rgba(199,112,240,.35);
          padding: 7px 15px;
          border-radius: 25px;
          font-size: .85rem;
          transition: all .3s ease;
        }

        .skill-chip:hover {
          background: #c770f0;
          color: white;
          transform: translateY(-3px);
        }

        @media(max-width:768px) {

          .education-heading {
            font-size: 2.2rem;
          }

          .timeline::before {
            left: 35px;
          }

          .timeline-item {
            justify-content: flex-start;
          }

          .timeline-icon {
            left: 35px;
            width: 60px;
            height: 60px;
          }

          .timeline-content {
            width: calc(100% - 100px);
            margin-left: 100px !important;
            margin-right: 0 !important;
          }

          .timeline-content h3 {
            font-size: 1.3rem;
          }

          .institution {
            font-size: 1rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Education;