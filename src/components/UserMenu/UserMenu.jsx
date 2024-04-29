import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { apiRemoveContact } from "../../redux/contacts/operations";
import { selectUser } from "../../redux/auth/selectors";
import Button from "@mui/material/Button"; // Імпорт компонента кнопки з Material-UI
import styles from "./UserMenu.module.css"; // Імпорт стилів

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const name = userData && userData.name;

  const handleLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={styles.userMenu}>
      <span>Hi, {name}</span>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>{" "}
      {/* Використовуйте Material-UI кнопку */}
    </div>
  );
};

export default UserMenu;
