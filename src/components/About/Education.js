import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa"; // Add icons

// Local animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};

function Education() {
  const edu = [
    {
      title: "B.Tech (CSE)",
      place: "Lovely Professional University, Punjab",
      year: "2022 – Present",
      score: "Current CGPA: 8.0/10",
      description: "Currently pursuing a Bachelor's degree in Computer Science Engineering, focused on full-stack development, cloud computing, and AI applications.",
    },
    {
      title: "Senior Secondary (12th)",
      place: "A.N. College, Patna",
      year: "2022",
      score: "79%",
      description: "Completed Senior Secondary Education with a focus on Science, including Mathematics, Physics, and Computer Science.",
    },
    {
      title: "Matriculation (10th)",
      place: "Red Carpet High School, Patna",
      year: "2020",
      score: "85.2%",
      description: "Graduated with a strong foundation in core subjects like Mathematics, English, and Science.",
    },
  ];

  return (
    <Container className="education-section my-5">
      <h1 className="project-heading text-center mb-4">
        <strong className="purple">Education</strong> Journey
      </h1>

      {/* Education Entries */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Row className="justify-content-center">
          {edu.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className="my-3">
              <div className="education-card shadow-lg rounded-lg p-4 bg-dark text-white">
                <div className="d-flex align-items-center mb-3">
                  <FaUniversity className="text-purple mr-3" size={30} />
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted">{item.place}</p>
                <p className="text-sm text-gray-400">{item.year}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
                <div className="mt-3 text-right">
                  <span className="score text-lg">{item.score}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <style jsx>{`
        .education-card {
          background-color: #1f1f1f;
          border: 1px solid #333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .education-card:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .purple {
          color: #8b5cf6;
        }

        .score {
          background-color: #8b5cf6;
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-weight: bold;
        }

        .education-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .education-card p {
          font-size: 0.9rem;
        }

        .project-heading {
          font-size: 2.5rem;
          color: #8b5cf6;
        }

        .text-muted {
          color: #bbb;
        }

        .text-gray-400 {
          color: #888;
        }

        .text-gray-300 {
          color: #ccc;
        }
      `}</style>
    </Container>
  );
}

export default Education;
