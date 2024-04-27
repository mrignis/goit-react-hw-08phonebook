import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "../AppBar/AppBar";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={styles.container}>
      <AppBar>
        <Navigation />
        {isSignedIn ? (
          <UserMenu userData={userData} onLogout={handleLogout} />
        ) : (
          <AuthNav />
        )}
      </AppBar>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        {children}
      </main>
    </div>
  );
};

export default Layout;