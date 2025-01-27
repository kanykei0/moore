import { Router } from "app/Router/Router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./app/Styles/global.scss";
import "./app/Styles/_variables.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
