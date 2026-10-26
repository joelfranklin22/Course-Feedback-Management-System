import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import intro from "./Videos/1.mp4";
import swap from "./Videos/2.mp4";
import printf from "./Videos/3.mp4";
import exercise from "./Videos/4.mp4";
import HeaderComponent from "./Header_Course";
const Main = () => {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videos = [
    {
      title: "Module 1: Introduction to Course",
      content:
        "Welcome to our Introduction to Python course! This course is designed to provide you with a solid foundation in Python programming, one of the most popular and versatile programming languages in the world. Whether you're a complete beginner or have some prior coding experience, this course will help you understand the core concepts and applications of Python.",
      src: intro,
    },
    {
      title: "Module 2: Basic Syntax and Data Types",
      content:
        "This exercise introduces you to variable assignment and manipulation in Python. You will learn how to swap the values of two variables using different methods. Swapping values is a common task that helps you understand the importance of variable references and memory management in Python.Understand different methods of swapping variable values.",
      src: swap,
    },
    {
      title: "Module 3: Control Flow and Functions",
      content:
        "The print() function in Python is one of the most commonly used functions. It outputs text and other data to the console or standard output device. This function is crucial for debugging and interacting with users.Learn how to print variables and format output.",
      src: printf,
    },
    {
      title: "Module 4: Object-Oriented Programming",
      content:
        "The print() function in Python is a built-in function used to output data to the console or a specified file. It's a fundamental tool for displaying information during code execution or debugging. It outputs text and other data to the console or standard output device..Learn how to print variables and format output.Learn how to print variables and format output.Learn how to print collections and use escape characters.",
      src: exercise,
    },
  ];

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      navigate("/Student_Feedback"); // Navigate to the Student Feedback page
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

    return (
        <>
            <HeaderComponent showLogin={false} />
        <Container
      style={{
        paddingTop: "20px",
        paddingBottom: "50px",
      }}
    >
      <Row>
        <Col md={12}>
          <Card
            style={{
              marginTop: "30px",
              padding: "clamp(16px, 4vw, 50px) clamp(12px, 3vw, 30px)",
              borderRadius: "8px",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#1e1e1e",
            }}
          >
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {videos[currentVideoIndex].title}
              </Card.Title>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
                <video
                  controls
                  src={videos[currentVideoIndex].src}
                  style={{
                    flex: "1 1 320px",
                    minWidth: 0,
                    width: "100%",
                    maxWidth: "700px",
                    display: "block",
                    boxShadow: "0px 0px 2px 2px white",
                  }}
                />
                <Card.Text
                  style={{
                    color: "white",
                    flex: "1 1 260px",
                    maxWidth: "500px",
                    textAlign: "justify",
                  }}
                >
                  {`  ${videos[currentVideoIndex].content}`}
                </Card.Text>
              </div>
              <div className="text-center" style={{ marginTop: "20px" }}>
                <Button
                  onClick={handlePrevious}
                  variant="secondary"
                  style={{ marginRight: "10px" }}
                  disabled={currentVideoIndex === 0}
                >
                  Previous
                </Button>
                <Button onClick={handleNext} variant="primary">
                  {currentVideoIndex < videos.length - 1
                    ? "Next"
                    : "End the Module"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
            </Container>
        </>
        
  );
};

export default Main;
