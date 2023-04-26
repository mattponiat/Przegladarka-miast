import React from "react";
import ReactDOM from "react-dom/client";
import Root, { rootLoader } from "./routes/root.tsx";
import "./index.css";
import Header from "./components/header.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City, { cityLoader } from "./routes/city.tsx";
import AddCity from "./routes/addCity.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "cities/:name",
        element: <City />,
        loader: cityLoader,
      },
    ],
  },
  {
    path: "/add-city",
    element: <AddCity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
