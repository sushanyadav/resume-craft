import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ResumeDetailsProvider } from "contextAPI/ResumeDetailsContext";

import Loading from "components/Loading";

import "assets/scss/main.scss";

import App from "containers/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading />}>
        <ResumeDetailsProvider>
          <App />
        </ResumeDetailsProvider>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
