import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ul className={css.nav}>
      <li>
        <NavLink to="/" className={css.navLink} activeclassname={css.active}>
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            to="/contacts"
            className={css.navLink}
            activeclassname={css.active}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
