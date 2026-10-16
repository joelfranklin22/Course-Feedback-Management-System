import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "./actions";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Header_Course";
import LoginForm, { authCss } from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const RegistrationForm = ({ course, inModal = false }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mode, setMode] = useState("register");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((s) => s.users.users);

  const validators = {
    username: (v) => {
      if (!v.trim()) return "Username is required";
      if (!usernameRegex.test(v)) return "3-20 letters or numbers only";
      return "";
    },
    email: (v) => {
      if (!v.trim()) return "Email is required";
      if (!emailRegex.test(v)) return "Email address is invalid";
      if (users.some((u) => u.email === v))
        return "This email is already registered";
      return "";
    },
    password: (v) => {
      if (!v.trim()) return "Password is required";
      if (!passwordRegex.test(v))
        return "Min 8 chars with uppercase, lowercase, number and special character";
      return "";
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: validators[name](value) }));
  };

  const handleReset = () => {
    setForm({ username: "", email: "", password: "" });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: validators.username(form.username),
      email: validators.email(form.email),
      password: validators.password(form.password),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    const user = { ...form, courses: course ? [course] : [] };
    dispatch(registerUser(user));
    dispatch(loginUser(user));
    setShowSuccess(true);
    handleReset();
    setTimeout(() => navigate("/module"), 1000);
  };

  const field = (name, label, type, placeholder) => (
    <Form.Group className="mb-3" controlId={`reg-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        isInvalid={!!errors[name]}
        autoComplete="off"
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  );

  const registerCard = (
    <div className={`reg-card ${inModal ? "in-modal" : ""}`}>
      <style>{authCss}</style>
      <h2 className="reg-title">Create your account</h2>
      <p className="reg-sub">
        {course ? `Enrolling in ${course}` : "Register to start learning"}
      </p>

      {showSuccess && (
        <Alert variant="success" className="py-2">
          Registration successful! Redirecting...
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        {field("username", "Username", "text", "e.g. joel123")}
        {field("email", "Email", "email", "you@example.com")}

        <Form.Group className="mb-1" controlId="reg-password">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              isInvalid={!!errors.password}
              autoComplete="new-password"
            />
            <Button
              variant="outline-secondary"
              onClick={() => setShowPassword((s) => !s)}
              type="button"
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </InputGroup>
          {!errors.password && (
            <div className="reg-hint">
              8+ characters, with uppercase, number and special character.
            </div>
          )}
        </Form.Group>

        <div className="reg-actions">
          <Button type="submit" variant="primary">
            Register
          </Button>
          <Button
            type="button"
            variant="outline-secondary"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </Form>

      <div className="reg-switch">
        Already registered?{" "}
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setMode("login")}
        >
          Login
        </button>
      </div>
    </div>
  );

  const card =
    mode === "login" ? (
      <LoginForm
        course={course}
        inModal={inModal}
        onSwitch={() => setMode("register")}
      />
    ) : (
      registerCard
    );

  if (inModal) return card;

  return (
    <>
      <HeaderComponent showLogin={false} />
      <div className="reg-page">{card}</div>
    </>
  );
};

export default RegistrationForm;
