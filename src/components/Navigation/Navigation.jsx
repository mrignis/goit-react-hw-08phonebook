import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import selectors from "../../redux/auth/selectors";
import routes from "../../Routes/Routes";

import styles from "./Navigation.module.css";
// Компонент главной навигации (меню) приложения
const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles["link--active"]}
        >
          Home
        </NavLink>
      </li>

      {isAuthenticated && (
        <li>
          <NavLink
            to={routes.contacts}
            className={styles.link}
            activeClassName={styles["link--active"]}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
