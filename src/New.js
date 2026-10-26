import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import head_2 from "./Image/head-2.png";
import logo_2 from "./Image/quote-img.svg";
import Person1 from "./Image/Person-1.png";
import Person2 from "./Image/Person-2.png";
import Person3 from "./Image/Person-3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./Header_Course";

const Header = () => {
  return (
    <div className="app">
    <HeaderComponent showLogin={true} />
      <header>
        <div className="background-image">
          <Container fluid className="position-relative">
            <div className="overlay-content text-center">
              <div className="left-image mt-5">
                <img src={head_2} alt="Left side illustration" />
              </div>
              <div className="quote-img">
                <img src={logo_2} alt="Quotation mark" className="quote-logo" />
              </div>
              <div className="quote mt-5 text-light">
                <p>
                  Education is Learning what you didn't even know You didn't
                  Know....
                </p>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
};

export default Header;
const AboutUs = () => {
  return (
    <Container className="about-us">
      <Row>
        <Col md={{ span: 0, offset: 0 }}>
          <h2 className="about ">About Us</h2>
          <p className="p1 text-justify">
            Welcome to Fluid Fusion, a premier feedback management company
            dedicated to helping organizations harness the power of feedback to
            drive improvement and success. We specialize in providing
            comprehensive feedback solutions that enable businesses to collect,
            analyze, and act on insights from their stakeholders, whether they
            are customers, employees, or training participants.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 0, offset: 0 }}>
          <h2 className="mission">Mission & Vision</h2>
          <ol className="mission-vision-list text-justify">
            <li>
              Our mission is to empower organizations with the tools and
              insights needed to foster a culture of continuous improvement.
            </li>
            <li>
              By offering robust feedback management systems, we aim to help our
              clients make informed decisions that enhance performance,
              satisfaction, and overall success.
            </li>
            <li>
              We envision a world where feedback is seamlessly integrated into
              the fabric of every organization, driving innovation and
              excellence.
            </li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

const CourseFeedback = () => {
  const feedbacks = [
    {
      name: "Cassie",
      imgSrc: Person1,
      education: "UG in Computer Science",
      profession: "I'm Software Developer",
      feedback:
        "The course was exceptionally well-designed and greatly enhanced my knowledge in the subject area. Overall, I highly recommend this course for its comprehensive content.",
    },
    {
      name: "Christina",
      imgSrc: Person2,
      education: "UG in Computer Science",
      profession: "MBA in CyberSecurity",
      feedback:
        "The course was helpful in gaining knowledge and provided ample resources for learning. The module design was well-structured, making it suitable for beginners who wish to enroll.",
    },
    {
      name: "Carla",
      imgSrc: Person3,
      education: "UG in Computer Science",
      profession: "I'm Software Developer",
      feedback:
        "The course was extremely beneficial in enhancing my knowledge. It provided ample resources that facilitated effective learning. The module design was well-structured.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Course Feedback</h2>
      <div className="row justify-content-center">
        {feedbacks.map((feedback, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-stretch" key={index}>
            <div className="card feedback-card text-center">
              <div className="card-body">
                <img
                  src={feedback.imgSrc}
                  alt={feedback.name}
                  className="img-fluid"
                />
                <h5 className="card-title mt-3">{feedback.name}</h5>
                <p className="card-text">
                  {feedback.education}
                  <br />
                  {feedback.profession}
                </p>
                <hr style={{ width: "100%" }} className="line" />
                <p className="content ">{feedback.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#1e1e1e" }}>
      <Container>
        <Row>
          <Col md={3} className="footer-section">
            <h5 className="follow">FOLLOW US ON</h5>
            <ul className="list-unstyled social-icons">
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Core Team</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Career</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Hire from Us</a>
              </li>
              <li>
                <a href="#!">Apply as Mentor</a>
              </li>
              <li>
                <a href="#!">Work with us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5 className="contact_1">CONTACT US</h5>
            <p className="contact-1">Fluid Fusion Tech.</p>
            <p className="contact-2">Phone: 04362 221112, 221113</p>
            <p className="contact-3">Fax: 04362 221112</p>
            <p className="contact-4">Email: FluidFusion@business.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="foot">
            <p className="left">Copyright &copy; Fluid Fusion Tech.</p>
            <p className="right">
              Developed & Maintained by Joel <i className="fas fa-tools" ></i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { AboutUs, CourseFeedback, Footer };
