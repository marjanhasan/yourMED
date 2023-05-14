import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrrorPage from "./Components/ErrrorPage";
import About from "./Components/About";
import AuthProviders from "./Providers/AuthProviders";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import Appointment from "./Components/appointment/Appointment";
import ServiceDetails from "./Components/home/serviceCategory/serviceDetails/ServiceDetails";
import DoctorDetails from "./Components/home/doctors/DoctorDetails";
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
