import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import HomeContextProvider from "./context/HomeContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </StrictMode>
);
