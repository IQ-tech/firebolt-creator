import React from "react";
import ReactDOM from "react-dom";
/* import { BrowserRouter } from "react-router-dom"; */
import { HashRouter } from "react-router-dom";
import App from "./App";

// @ts-ignore
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  registerSW();
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
