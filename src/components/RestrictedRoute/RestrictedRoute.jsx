// RestrictedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const RestrictedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return isLoggedIn ? (
    <Route {...rest} element={<Component {...rest} />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default RestrictedRoute;
