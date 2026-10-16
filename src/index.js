import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./User.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { FeedbackProvider } from "./FeedbackContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </Provider>
);
