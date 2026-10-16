import React, { createContext, useContext, useState, useEffect } from "react";

const FeedbackContext = createContext();
export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ff_feedback")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ff_feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
