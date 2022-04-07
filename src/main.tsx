import React from "react";
import ReactDOM from "react-dom";
/* import { BrowserRouter } from "react-router-dom"; */
import { HashRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    {/* 
    <BrowserRouter basename="/firebolt-creator">
      <App />
    </BrowserRouter> 
    */}
    {/* using hash router due to github pages problems */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
