import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "./actions";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = ({ course }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((s) => s.users.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validateUsername(username),
      email:
        validateEmail(email) ||
        (users.some((u) => u.email === email) ? "This email is already registered" : ""),
      password: validatePassword(password),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      const user = { username, email, password, course: course || "Not selected" };

      dispatch(registerUser(user));
      dispatch(loginUser(user));
      setShowSuccess(true);

      setTimeout(() => {
        navigate("/module");
        setShowSuccess(false);
      }, 1000);

      handleReset();
    }
  };

  const validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    if (!value.trim()) return "Username is required";
    if (!usernameRegex.test(value))
      return "Username must be 3-20 characters long and contain only alphanumeric characters";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email is required";
    if (!emailRegex.test(value)) return "Email address is invalid";
    return "";
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!value.trim()) return "Password is required";
    if (!passwordRegex.test(value))
      return "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: validateUsername(value),
        }));
        break;
      case "email":
        setEmail(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value),
        }));
        break;
      case "password":
        setPassword(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: validatePassword(value),
        }));
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <Container>
      <div
        className="form-container"
        style={{
          maxHeight: "600px",
          overflowY: "auto",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Form onSubmit={handleSubmit}>
          {showSuccess && (
            <Alert
              variant="success"
              onClose={() => setShowSuccess(false)}
              dismissible
            >
              Registration successful!
            </Alert>
          )}
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="mt-3 d-flex justify-content-between">
            <Button type="submit">Register</Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;
