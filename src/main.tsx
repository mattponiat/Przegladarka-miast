import React from "react";
import ReactDOM from "react-dom/client";
import Root, { rootLoader } from "./routes/root";
import "./index.css";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City, { cityLoader } from "./routes/city";
import AddCity from "./routes/addCity";
import EditCity, { editCityLoader } from "./routes/editCity";

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
    loader: rootLoader,
  },
  {
    path: "/cities/:name/edit",
    element: <EditCity />,
    loader: editCityLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
