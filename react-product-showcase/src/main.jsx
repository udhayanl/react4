import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShopPage from "./ShopPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopPage />
  </StrictMode>
);
