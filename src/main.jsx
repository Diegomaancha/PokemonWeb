// src/main.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css"; // ✔ CORREGIDO
import App from "./App.jsx";
import bg from "./assets/images/pkk.jpg";

// ✅ ESTO ES LO QUE FALTABA
document.documentElement.style.setProperty(
  "--bg-image",
  `url(${bg})`
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
