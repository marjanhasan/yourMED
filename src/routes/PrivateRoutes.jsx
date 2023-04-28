import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import LoadingSpinner from "../Components/LoadingSpinners";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
