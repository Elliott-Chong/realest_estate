import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextWrapper } from "./context";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AppContextWrapper>
        <App />
      </AppContextWrapper>
    </Router>
  </React.StrictMode>
);
