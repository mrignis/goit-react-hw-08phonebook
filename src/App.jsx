import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { apiRefreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn } from "./redux/auth/selectors"; // Import selectIsLoggedIn

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
  const { isRefreshing } = useSelector((state) => state.auth);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    // Перевіряємо наявність токена в localStorage
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Якщо токен знайдено, робимо користувача автентифікованим
      // І викликаємо операцію оновлення даних користувача
      dispatch(apiRefreshUser());
    }
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default App;
