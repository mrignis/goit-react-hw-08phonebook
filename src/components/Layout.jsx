import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../App.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../redux/auth/selectors";
import { selectUserData } from "../redux/auth/selectors";
import { apiLogout } from "../redux/auth/operation";

import { useDispatch } from "react-redux";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          {isSignedIn ? (
            <>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
              <div>
                {userData && <span>Hi, {userData.name}</span>}
                <button onClick={onLogout} type="button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={getNavLinkClassName} to="/register">
                Register
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
