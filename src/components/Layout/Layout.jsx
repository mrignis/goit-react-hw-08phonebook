import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import { apiLogout } from "../../redux/auth/operations";
import styles from "./Layout.module.css";
import { selectUser } from "../../redux/auth/selectors"; // Додано імпорт selectUser
import { selectIsLoggedIn } from "../../redux/auth/selectors"; // Додано імпорт selectIsLoggedIn

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn); // Змінено з selectIsSignedIn на selectIsLoggedIn
  const userData = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={styles.container}>
      <AppBar>
        <Navigation />
        {isLoggedIn ? ( // Змінено isSignedIn на isLoggedIn
          <UserMenu userData={userData} onLogout={handleLogout} />
        ) : (
          <AuthNav />
        )}
      </AppBar>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
