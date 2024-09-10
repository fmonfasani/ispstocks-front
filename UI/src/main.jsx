// main.jsx o index.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Cambiar importación a 'react-dom/client'
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Usar createRoot en lugar de render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
