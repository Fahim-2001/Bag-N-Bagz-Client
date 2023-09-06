import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //   If loading then show loading
  if (loading) {
    return <h1 className="text-3xl text-center">Loading....</h1>;
  } else if (user && user.uid) {
    //If having user and user id then take to wherever use was.
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
