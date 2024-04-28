// AuthNav.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/register"
            className={css.navLink}
            activeclassname={css.active}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={css.navLink}
            activeclassname={css.active}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
