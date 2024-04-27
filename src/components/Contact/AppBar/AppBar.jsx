// AppBar.jsx

import React from "react";

const AppBar = ({ children }) => {
  return (
    <header>
      <nav>{children}</nav>
    </header>
  );
};

export default AppBar;
