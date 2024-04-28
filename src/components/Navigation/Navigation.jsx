import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors"; // Імпортуємо відповідний селектор
import {
  selectToken,
  selectIsLoading,
  selectIsError,
} from "../../redux/auth/selectors";

import { selectUserData } from "../../redux/auth/selectors"; // Імпортуємо відповідний селектор
import routes from "../../Routes/Routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn); // Використовуємо відповідний селектор

  const userData = useSelector(selectUserData);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact="true"
            to={routes.home}
            className={styles.link}
            activeclassname={styles["link--active"]}
          >
            Home
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={styles.link}
              activeClassName={styles["link--active"]}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
