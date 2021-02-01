import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ResumeDetailsProvider } from "contextAPI/ResumeDetailsContext";

import "assets/scss/main.scss";

import App from "containers/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ResumeDetailsProvider>
        <App />
      </ResumeDetailsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
