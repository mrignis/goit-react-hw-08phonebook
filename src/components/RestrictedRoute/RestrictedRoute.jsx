import React from "react";
import { Route, Navigate } from "react-router-dom";

const RestrictedRoute = ({
  isLoggedIn,
  component: Component,
  redirectTo = "/",
  ...rest
}) => {
  return isLoggedIn ? (
    <Route {...rest} element={<Component {...rest} />} />
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RestrictedRoute;
