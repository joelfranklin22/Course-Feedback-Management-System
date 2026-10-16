import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./actions";
import logo from "./Image/Logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderComponent = ({ showLogin }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const isLoggedIn = !!currentUser;
  const dispatch = useDispatch();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    // Demo admin credentials
    if (email === "joel@admin.in" && password === "Admin1234") {
      setShow(false);
      navigate("/admin");
      return;
    }
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      dispatch(loginUser(user));
      setShow(false);
      navigate("/module");
    } else {
      setEmailError("Invalid email/password or not registered. Please register first.");
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one letter and one number"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Password is required");
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one letter and one number"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <style>
        {`
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
          a {
            text-decoration: none; /* Remove underline from anchor tags */
            color: inherit;
          }
          a:hover {
            text-decoration: underline; 
            text-decoration-color: #ffcc00; 
            transition: text-decoration-color 0.3s ease;
          }
          .header-container {
            background-image: url('./Image/background.jpg'); /* Update the path to your background image */
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
      <header className="header-container bg-black">
        <div className="nav text-white p-3">
          <div className="logo">
            <img src={logo} alt="Logo" width="60" height="50" />
            <span className="company ml-2">Fluid Fusion</span>
          </div>
          <ul className="right d-flex align-items-center list-unstyled m-0">
            <li className="feedback mx-2">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="register mx-2">
              <Link to="/#about" className="text-white">
                About
              </Link>
            </li>
            <li className="course mx-2">
              <Link to="/#course" className="text-white">
                Course
              </Link>
            </li>
            <li className="contact mx-2">
              <Link to="/#contact" className="text-white">
                Contact
              </Link>
            </li>
            <li className="register mx-2">
              <Link to="/register" className="text-white">
                Register
              </Link>
            </li>
            {showLogin && (
              <li className="register mx-2">
                {isLoggedIn ? (
                  <span
                    onClick={handleLogout}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </span>
                ) : (
                  <span
                    onClick={handleShow}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </span>
                )}
              </li>
            )}
          </ul>
        </div>
      </header>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!!emailError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!passwordError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeaderComponent;
