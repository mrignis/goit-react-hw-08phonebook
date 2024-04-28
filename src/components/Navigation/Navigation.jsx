import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const onLogout = () => {
    console.log(true);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/search">Search</NavLink>
      <div>
        <span>Hi</span>
        <button onClick={onLogout} type="button">
          Logout
        </button>
      </div>

      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navigation;
