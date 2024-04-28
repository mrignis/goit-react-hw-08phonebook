import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { apiRemoveContact } from "../../redux/contacts/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css"; // Імпорт стилів

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const name = userData && userData.name;

  const handleLogout = () => {
    dispatch(apiLogout());
    dispatch(apiRemoveContact());
  };

  return (
    <div className={styles.userMenu}>
      <span>Hi, {name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
