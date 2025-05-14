import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterProvider } from "./contexts/counter/CounterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
