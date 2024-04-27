// Navigation.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={css.nav}>
      <li>
        <NavLink to="/" className={css.navLink} activeClassName={css.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={css.navLink}
          activeClassName={css.active}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
