import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
