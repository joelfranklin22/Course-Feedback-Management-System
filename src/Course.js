// Header.js
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import timerIcon from "./Image/timer.svg";
import currencyIcon from "./Image/currency.svg";
import mediaIcon from "./Image/media.svg";
import icon_py from "./Image/icon-py.png";
import cliIcon from "./Image/cli.png";
import RegistrationForm from "./Register";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enrollCourse } from "./actions";
import HeaderComponent from "./Header_Course";
import Python_1 from "./Image/PythonCvr.webp";
const COURSE_NAME = "PYTHON CLI APPLICATION ON LINUX";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((s) => s.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  // logged in -> enroll and go to videos, otherwise ask to login/register
  const handleShow = () => {
    if (currentUser) {
      dispatch(enrollCourse(currentUser.email, COURSE_NAME));
      navigate("/module");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <HeaderComponent showLogin={false} />
      <style>
        {`
          .header-container {
            position: relative;
            z-index: 1;
            background-color: #1e1e1e;
          }
          .main-container {
            position: relative;
            z-index: 2;
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(7px);
            padding: 20px;
            border-radius: 10px;
            height: 500px;
            width: 30%;
            margin-left: 100px;
            margin-top: -560px;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 2;
          }
          .logo {
            display: flex;
            align-items: center;
          }
          .logo .company {
            white-space: nowrap;
          }
          .right {
            display: flex;
          }
          .back-img img {
            width: 100%;
            height: auto;
          }
          .topic-abt {
            position: absolute;
            top: 28%;
            left: 5%;
          }
          .time-1 {
            position: absolute;
            top: 55%;
          }
          .currency-1 {
            position: absolute;
            top: 75%;
          }
          .media {
            position: absolute;
            top: 62%;
            left: 50%;
          }
          .btn-1 {
            position: absolute;
            top: 79%;
            left: 50%;
          }
          .course-need, .things {
            border: 2px solid #ffcc00;
            border-radius: 5px;
            width: 1000px;
            margin: 100px auto;
            padding: 20px;
            background-color: #333333; /* Set dark background */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .course-need:hover, .things:hover {
            transform: translateY(-5px);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
          .course-need h2, .things h2 {
            text-align: center;
            position: relative;
            margin-bottom: 40px;
            color: #ffffff; /* Set heading text color to white */
          }
          .course-need h2:after, .things h2:after {
            content: "";
            display: block;
            width: 600px;
            height: 3px;
            background-color: #ffcc00;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
          }
          .course-need ul, .things ul {
            padding-left: 20px;
            list-style: disc;
          }
          .course-need ul li, .things ul li {
            margin-bottom: 10px;
            font-size: 1.1em;
            color: white; /* Set list item color */
          }
          .course-need ul li:hover, .things ul li:hover {
            color: #ffffff; /* Change list item color on hover */
          }
          a {
            text-decoration: none; /* Remove underline from anchor tags */
            color: inherit;
          }
          a:hover {
            text-decoration: underline;
          text-decoration-color: #ffcc00;
          transition: text-decoration-color 0.3s ease;
          }
          .course-details-1, .course-details-2 {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .course-details-1:hover, .course-details-2:hover {
            transform: translateY(-5px);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div className="header-content">
        <div className="back-img">
          <img src={Python_1} alt="Background" className="img-fluid" />
        </div>
      </div>
      <main className="main-container">
        <div className="registration text-white p-4 rounded">
          <h2 className="topic">PYTHON CLI APPLICATION ON LINUX</h2>
          <p className="topic-abt text-white">
            This course is designed to teach students how to build command-line
            interfaces using Python. Students will learn about popular libraries
            such as argparse and click, as well as best practices for creating
            efficient and user-friendly interfaces. By the end of the course,
            students will have the skills to create robust and effective
            command-line applications.
          </p>
          <div className="d-flex align-items-center my-5 time-1">
            <img src={timerIcon} alt="Timer" className="mr-2" width="40" />
            <div>
              <div className="day font-weight-bold">Total Duration</div>
              <div className="time">10 Days</div>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 currency-1">
            <img
              src={currencyIcon}
              alt="Currency"
              className="mr-2"
              width="40"
            />
            <div>
              <div className="old-price font-weight-bold">
                Price <del>19,000</del>
              </div>
              <div className="new-price">10,000</div>
            </div>
          </div>
          <div className="d-flex align-items-center my-3 media">
            <img src={mediaIcon} alt="Media" className="mr-2" width="40" />
            <div>
              <div className="media-1 font-weight-bold">Format</div>
              <div className="media-2">Recorded</div>
            </div>
          </div>
          <Button className="btn-1 enroll mt-3" onClick={handleShow}>
            Enroll Now
          </Button>
        </div>
      </main>
      <section className="course-need p-4">
        <h2 className="text-white h2">
          What Are The Topics Covered By This Course?
        </h2>
        <ul className="list-unstyled my-4">
          <li>
            Anatomy of Linux CLI: We will start by introducing you to the
            anatomy of the Linux command line interface (CLI)...
          </li>
          <li>
            Basic Linux Concepts: In this section, we will cover basic Linux
            concepts that are useful for working with the CLI...
          </li>
          <li>
            Getting started with Python CLI: We will introduce you to writing
            Python scripts for the CLI...
          </li>
          <li>
            Create Mediainfo Converter tool Part 1: In this section, we will
            start working on creating a media converter tool using Python...
          </li>
          <li>
            Shared Memory and Threading: Finally, we will cover shared memory
            and threading in Python...
          </li>
        </ul>
      </section>
      <section className="things py-4 skills">
        <h2 className="text-white text-center mb-4 head">
          What are the Things you Master from Course?
        </h2>
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className="course-details-1 text-center text-dark p-3 border border-yellow">
            <img
              src={icon_py}
              alt="Python"
              width="70"
              height="70"
              className="mb-2"
            />
            <div className="text-white">Python</div>
          </div>
          <div className="course-details-2 text-center text-dark p-3 border border-yellow ml-4">
            <img
              src={cliIcon}
              alt="Linux"
              width="70"
              height="70"
              className="mb-2"
            />
            <div className="text-white">Linux</div>
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Login or Register to Enroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm course={COURSE_NAME} inModal />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
