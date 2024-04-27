import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <header>
      <Navigation />
      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
