import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiRefreshUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const NotFound = lazy(() => import("./pages/NotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }
  useEffect(() => {
    // Перевіряємо, чи є дані про статус авторизації в localStorage
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Якщо користувач авторизований, виконуємо дійсну авторизацію
    if (isLoggedIn) {
      dispatch(apiRefreshUser());
    }
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={RegistrationPage} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={LoginPage} />}
            />
            {isLoggedIn ? (
              <Route
                path="/contacts"
                element={<PrivateRoute component={ContactsPage} />}
              />
            ) : (
              <Route path="/contacts" element={<Navigate to="/login" />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
