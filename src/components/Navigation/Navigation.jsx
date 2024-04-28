import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { getNavLinkClassName } from "../AuthNav/AuthNav";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink className={getNavLinkClassName} to="/contacts">
            Contacts
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navigation;
