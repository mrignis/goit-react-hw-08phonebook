import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Використовуємо відповідний селектор

  return (
    <header>
      <Navigation /> {/* Включаємо компонент Navigation */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
