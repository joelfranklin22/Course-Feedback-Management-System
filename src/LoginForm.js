import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { loginUser, enrollCourse } from "./actions";

export const authCss = `
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
  .reg-card.in-modal { max-width: 100%; box-shadow: none; padding: 4px 8px; }
  .reg-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 4px; text-align: center; }
  .reg-sub { text-align: center; color: #6c757d; margin-bottom: 24px; font-size: 0.95rem; }
  .reg-card .form-label { font-weight: 600; margin-bottom: 4px; }
  .reg-hint { font-size: 0.8rem; color: #6c757d; margin-top: 4px; }
  .reg-actions { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
  .reg-actions .btn { padding: 10px; font-weight: 600; }
  .reg-switch { text-align: center; margin-top: 18px; font-size: 0.95rem; }
  .reg-switch .btn-link { padding: 0; vertical-align: baseline; font-weight: 600; }
`;

const LoginForm = ({ course, inModal = false, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((s) => s.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    const user = users.find((u) => u.email === email.trim());
    if (!user) {
      setError("No account found for this email. Please register first.");
      return;
    }
    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }
    dispatch(loginUser(user));
    if (course) dispatch(enrollCourse(user.email, course));
    navigate("/module");
  };

  return (
    <div className={`reg-card ${inModal ? "in-modal" : ""}`}>
      <style>{authCss}</style>
      <h2 className="reg-title">Welcome back</h2>
      <p className="reg-sub">
        {course ? `Login to enroll in ${course}` : "Login to continue learning"}
      </p>

      {error && (
        <Alert variant="danger" className="py-2">
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="login-email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="you@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="login-password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Your password"
            />
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>
        </Form.Group>

        <div className="reg-actions">
          <Button type="submit" variant="primary">
            Login
          </Button>
        </div>
      </Form>

      {onSwitch && (
        <div className="reg-switch">
          New here?{" "}
          <button type="button" className="btn btn-link" onClick={onSwitch}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
