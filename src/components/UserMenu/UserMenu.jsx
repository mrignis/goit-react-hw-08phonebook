// UserMenu.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { apiRemoveContact } from "../../redux/contacts/operations";

const UserMenu = ({ userData }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(apiLogout());
    // Очистимо колекцію контактів у стані
    dispatch(apiRemoveContact());
  };

  return (
    <div>
      {userData && userData.name && <span>Hi, {userData.name}</span>}
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default UserMenu;
