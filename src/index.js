import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";
import ItemList from "./ItemsList";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
        <ItemList className="itemlist" />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
