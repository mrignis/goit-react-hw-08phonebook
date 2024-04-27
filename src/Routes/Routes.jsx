import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ContactsPage from "../pages/ContactsPage";
import NotFound from "../pages/NotFound";
import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routes;
