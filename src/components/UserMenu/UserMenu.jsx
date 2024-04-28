// UserMenu.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { apiRemoveContact } from "../../redux/contacts/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(
    (state) => state.auth.userData && state.auth.userData.name
  );

  const handleLogout = () => {
    dispatch(apiLogout());
    // Очистимо колекцію контактів у стані
    dispatch(apiRemoveContact());
  };

  return (
    <div>
      {userName && <span>Hi, {userName}</span>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
