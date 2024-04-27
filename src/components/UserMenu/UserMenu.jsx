import React from "react";

const UserMenu = ({ userData, onLogout }) => {
  return (
    <div>
      {userData && userData.name && <span>Hi, {userData.name}</span>}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
