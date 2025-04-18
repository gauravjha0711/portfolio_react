import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS with debug mode enabled
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // Service ID from EmailJS
        "YOUR_TEMPLATE_ID",    // Template ID from EmailJS
        e.target,              // The form itself
        "YOUR_USER_ID",        // User ID from EmailJS
        { debug: true }        // Enable debug mode
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("There was an error sending your message. Please try again later.");
        }
      );

    // Reset form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container
      fluid
      className="contact-section"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Particle />
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col
          md={6}
          className="contact-form"
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: 10,  // Ensure the form is clickable
          }}
        >
          <h2 className="text-center mb-4">Contact Us</h2>

          <Form onSubmit={handleSubmit}>
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Message Input */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;