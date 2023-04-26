import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrrorPage from "./Components/ErrrorPage";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
