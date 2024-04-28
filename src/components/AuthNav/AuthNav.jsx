import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material"; // Імпорт компонента кнопки з Material-UI
import clsx from "clsx";
import css from "./AuthNav.module.css";

export const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
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
