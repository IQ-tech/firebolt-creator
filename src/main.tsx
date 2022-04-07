import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";


// trigger build

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/firebolt-creator">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
