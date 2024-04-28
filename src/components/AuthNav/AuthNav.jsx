import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material"; // Імпорт компонента кнопки з Material-UI
import clsx from "clsx";
import styles from "./AuthNav.module.css"; // Підключення CSS модуля

export const getNavLinkClassName = ({ isActive }) =>
  clsx(styles.navLink, {
    [styles.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
