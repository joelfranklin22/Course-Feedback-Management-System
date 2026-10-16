import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./User.css";
import logo_1 from "./Image/Logo-white.png";
import head_2 from "./Image/head-2.png";
import logo_2 from "./Image/quote-img.svg";

const Header = () => {
  return (
    <div className="app">
      <header>
        <div className="background-image">
          <Container fluid className="position-relative">
            <Row className="align-items-center py-3">
              <Col xs="auto">
                <img src={logo_1} alt="Logo" className="logo" />
              </Col>
              <Col xs="auto">
                <span className="text-white font-weight-bold">
                  Fluid Fusion
                </span>
              </Col>
              <Col className="ml-auto nav-links">
                <Nav className="justify-content-end">
                  <Nav.Link href="#" className="mx-2 text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="mx-2 text-white">
                    About
                  </Nav.Link>
                  <Nav.Link href="#contact" className="mx-2 text-white">
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    href="User_Register.html"
                    className="mx-2 text-white"
                  >
                    Register
                  </Nav.Link>
                  <Nav.Link href="#course" className="mx-2 text-white">
                    Course
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
            <div className="overlay-content text-center">
              <div className="left-image mt-5">
                <image src={head_2} alt="Left Side Image" />
              </div>
              <div className="quote-img">
                <image src={logo_2} alt="Quote Image" className="quote-logo" />
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
