import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css"; // Підключення CSS модуля

const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Використовуємо відповідний селектор

  return (
    <header className={styles.header}>
      <Navigation /> {/* Включаємо компонент Navigation */}
      <div className={styles.authContainer}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
