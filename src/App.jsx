import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { apiRefreshUser } from "./redux/auth/operations";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegistrationPage = React.lazy(() => import("./pages/RegistrationPage"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivateRoute = React.lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Loader = React.lazy(() => import("./components/Loader/Loader"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                isLoggedIn ? (
                  <PrivateRoute
                    path="/"
                    element={<ContactsPage />}
                    startTransition
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Suspense>
    </Layout>
  );
};

export default App;
