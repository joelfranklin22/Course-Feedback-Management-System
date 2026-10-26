// Card.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import python from "./Image/python-card.png";
import lahtp from "./Image/Lahtp-card.png";
import Bug from "./Image/Bug-card.png";

const CourseCard = ({ imgSrc, title, text, link }) => {
  const cardStyle = {
    position: "relative",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    minHeight: "450px",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const cardImageStyle = {
    width: "100%",
    maxWidth: "300px",
    height: "190px",
    objectFit: "contain",
    margin: "10px auto",
    display: "block",
  };

  const cardBodyStyle = {
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    width: "90%",
    margin: "0 auto",
    borderRadius: "8px",
    flex: "1 1 auto",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#343a40",
  };

  const cardTextStyle = {
    fontSize: "1rem",
    margin: "0.5rem 0",
    top: "30px",
    left: "2%",
    color: "#6c757d",
  };

  const cardFooterStyle = {
    textAlign: "center",
    width: "90%",
    margin: "0 auto",
    borderRadius: "8px",
    padding: "1rem",
  };

  const btnPrimaryStyle = {
    width: "100%",
  };

  return (
    <div style={cardStyle} className="Card_course">
      <img src={imgSrc} alt={title} style={cardImageStyle} />
      <div style={cardBodyStyle}>
        <h5 style={cardTitleStyle} className="title-card">
          {title}
        </h5>
        <p style={cardTextStyle} className="content-card">
          {text}
        </p>
      </div>
      <div style={cardFooterStyle}>
        <Link to={link} className="btn btn-primary" style={btnPrimaryStyle}>
          Course Details
        </Link>
      </div>
    </div>
  );
};

const Card = () => {
  const courses = [
    {
      imgSrc: python,
      title: "PYTHON CLI APP LINUX",
      text: "This course is designed to teach students how to build command-line interfaces using Python. Best practices for creating efficient and user-friendly interfaces.",
      link: "/course/python-cli-app-linux",
    },
    {
      imgSrc: lahtp,
      title: "LAHTP ADVANCE",
      text: "This Learn the Art of Hacking Through Programming teaches programming concepts for building security tools, exploits, and hacking thought processes.",
      link: "/course/lahtp-advance",
    },
    {
      imgSrc: Bug,
      title: "PRO BUG HUNTER",
      text: "This course teaches students how to identify, report, and fix security vulnerabilities in web applications. It covers the responsible disclosure of security flaws.",
      link: "/course/pro-bug-hunter",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Courses Offered</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={index}>
            <CourseCard
              imgSrc={course.imgSrc}
              title={course.title}
              text={course.text}
              link={course.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
