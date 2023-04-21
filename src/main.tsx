import React from "react";
import ReactDOM from "react-dom/client";
import Root, { rootLoader } from "./routes/root.tsx";
import "./index.css";
import Header from "./components/Header.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City, { cityLoader } from "./routes/city.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "miasto/:name",
        element: <City />,
        loader: cityLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
