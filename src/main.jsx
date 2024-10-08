import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProviders } from "./providers/SearchProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProviders>
      <App />
    </SearchProviders>
  </StrictMode>
);

