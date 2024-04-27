import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
const UserMenu = ({ userData, apiLogout }) => {
  return (
    <div>
      {userData && userData.name && <span>Hi, {userData.name}</span>}
      <button onClick={apiLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
