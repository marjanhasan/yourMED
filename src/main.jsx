import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrrorPage from "./Components/ErrrorPage";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Appointment from "./Components/Appointment";
import DoctorDetails from "./Components/DoctorDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Orders from "./Components/Orders";
import AuthProviders from "./Providers/AuthProviders";
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
        path: "orders",
        element: <Orders />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/doctordetails/:id",
        element: <DoctorDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
);
