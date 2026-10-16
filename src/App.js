import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header, { AboutUs, CourseFeedback, Footer } from "./New.js";
import Card from "./Card.js";
import Course from "./Course.js";
import RegistrationForm from "./Register.js";
import Main from "./Module.js";
import StudentFeedback from "./Student_Feedback.js";
import Admin from "./Admin.js";

function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, [hash]);

  return (
    <div>
      <Header />
      <div id="about">
        <AboutUs />
      </div>
      <CourseFeedback />
      <div id="course">
        <Card />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/module" element={<Main />} />
        <Route path="/Student_Feedback" element={<StudentFeedback />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div id="contact">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
