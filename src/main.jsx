import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import CV from "./components/CV";
import Builder from "./components/Builder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Builder />
    <CV />
  </StrictMode>,
);
