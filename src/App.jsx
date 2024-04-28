import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { apiRefreshUser } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast"; // Імпорт Toaster з react-hot-toast
import "./App.css"; // Підключення глобальних стилів
import Loader from "./components/Loader/Loader";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegistrationPage = React.lazy(() => import("./pages/RegistrationPage"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage"));

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Layout>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegistrationPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
};

export default App;
