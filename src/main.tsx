import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root não encontrado no DOM");
}

createRoot(rootElement).render(
  <StrictMode>
    <>
      <App />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  </StrictMode>
);
