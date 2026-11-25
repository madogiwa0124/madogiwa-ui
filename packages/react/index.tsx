import { StrictMode } from "react";
import { App } from "./demo/App";
import { createRoot } from "react-dom/client";
import "@madogiwa-ui/css";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("#root element is not found");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
