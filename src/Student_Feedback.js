import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faMeh, faSmile } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Header_Course";
import { useFeedback } from "./FeedbackContext";
import { useSelector } from "react-redux";
import { questions } from "./questions";

const Student_Feedback = () => {
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [validationModalIsOpen, setValidationModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { feedback, setFeedback } = useFeedback();
  const currentUser = useSelector((s) => s.users.currentUser);

  const handleChange = (question, value) => {
    setResponses({ ...responses, [question]: value });
  };

  const validateForm = () => {
    for (let i = 1; i <= 10; i++) {
      if (!responses[`question${i}`]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFeedback([
        ...feedback,
        { username: currentUser?.username || "Guest", email: currentUser?.email || "-", responses },
      ]);
      setModalIsOpen(true);
    } else {
      setValidationModalIsOpen(true);
    }
  };


  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div
        key={index}
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f0f0f0",
          textAlign: "left",
        }}
      >
        <label
          style={{ display: "block", marginBottom: "15px", fontSize: "18px" }}
        >
          {index + 1}. {question}
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            onClick={() => handleChange(`question${index + 1}`, "Worst")}
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={faFrown}
              style={{
                fontSize: "40px",
                color:
                  responses[`question${index + 1}`] === "Worst"
                    ? "red"
                    : "grey",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  responses[`question${index + 1}`] === "Worst"
                    ? "red"
                    : "grey")
              }
            />
          </label>
          <label
            onClick={() => handleChange(`question${index + 1}`, "Better")}
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={faMeh}
              style={{
                fontSize: "40px",
                color:
                  responses[`question${index + 1}`] === "Better"
                    ? "orange"
                    : "grey",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  responses[`question${index + 1}`] === "Better"
                    ? "orange"
                    : "grey")
              }
            />
          </label>
          <label
            onClick={() => handleChange(`question${index + 1}`, "Best")}
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            <FontAwesomeIcon
              icon={faSmile}
              style={{
                fontSize: "40px",
                color:
                  responses[`question${index + 1}`] === "Best"
                    ? "green"
                    : "grey",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  responses[`question${index + 1}`] === "Best"
                    ? "green"
                    : "grey")
              }
            />
          </label>
        </div>
      </div>
    ));
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <HeaderComponent showLogin={false} />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Student Feedback
        </h2>
        <form onSubmit={handleSubmit}>
          {renderQuestions()}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#218838")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#28a745")
              }
            >
              Submit
            </button>
          </div>
        </form>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModalClose}
          contentLabel="Feedback Submitted"
          ariaHideApp={false}
          style={{
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
              overflow: "hidden", // Prevent scrollbars
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
              backgroundColor: "#ffffff", // White background
            },
          }}
        >
          <h2>Feedback Submitted</h2>
          <p>Your feedback has been successfully submitted.</p>
          <button
            onClick={handleModalClose}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "20px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Close
          </button>
        </Modal>

        <Modal
          isOpen={validationModalIsOpen}
          onRequestClose={() => setValidationModalIsOpen(false)}
          contentLabel="Validation Error"
          ariaHideApp={false}
          style={{
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
              overflow: "hidden", // Prevent scrollbars
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
              backgroundColor: "#ffffff", // White background
            },
          }}
        >
          <h2>Please complete all questions before submitting.</h2>
          <button
            onClick={() => setValidationModalIsOpen(false)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "20px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c82333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc3545")
            }
          >
            Close
          </button>
        </Modal>
      </div>
    </>
  );
};

export default Student_Feedback;
