import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "./actions";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Header_Course";
import "bootstrap/dist/css/bootstrap.min.css";

const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const css = `
  .reg-page {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 16px;
    background: linear-gradient(135deg, #1e1e1e 0%, #333 100%);
  }
  .reg-card {
    width: 100%;
    max-width: 440px;
    background: #fff;
    border-radius: 12px;
    padding: 32px 28px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }
  .reg-card.in-modal {
    max-width: 100%;
    box-shadow: none;
    padding: 4px 8px;
  }
  .reg-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 4px; text-align: center; }
  .reg-sub { text-align: center; color: #6c757d; margin-bottom: 24px; font-size: 0.95rem; }
  .reg-card .form-label { font-weight: 600; margin-bottom: 4px; }
  .reg-hint { font-size: 0.8rem; color: #6c757d; margin-top: 4px; }
  .reg-actions { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
  .reg-actions .btn { padding: 10px; font-weight: 600; }
`;

const RegistrationForm = ({ course, inModal = false }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

    const user = { ...form, course: course || "Not selected" };
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

  const card = (
    <div className={`reg-card ${inModal ? "in-modal" : ""}`}>
      <style>{css}</style>
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
    </div>
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
