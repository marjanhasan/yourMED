import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrrorPage from "./Components/ErrrorPage";
import Home from "./Components/Home";
import About from "./Components/About";
import Appointment from "./Components/Appointment";
import DoctorDetails from "./Components/DoctorDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProviders from "./Providers/AuthProviders";
import PrivateRoutes from "./routes/PrivateRoutes";
import Others from "./Components/Others";
import ServiceDetails from "./Components/ServiceDetails";
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
        path: "others",
        element: (
          <PrivateRoutes>
            <Others />
          </PrivateRoutes>
        ),
      },
      {
        path: "appointment",
        element: (
          <PrivateRoutes>
            <Appointment />
          </PrivateRoutes>
        ),
        loader: () => fetch("/doctors.json"),
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
        path: "/services/:id",
        element: <ServiceDetails />,
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
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
