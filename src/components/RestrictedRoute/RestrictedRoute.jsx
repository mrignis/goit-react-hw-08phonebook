// RestrictedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors"; // Правильний імпорт
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsSignedIn); // Використовуємо правильний селектор

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default RestrictedRoute;
