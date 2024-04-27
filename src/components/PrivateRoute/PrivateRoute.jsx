import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ path, children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
