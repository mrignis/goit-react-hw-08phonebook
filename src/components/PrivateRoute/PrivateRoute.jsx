import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const location = useLocation();

  // Перевірка наявності роуту "/register"
  const isRegisterRoute = location.pathname === "/register";

  // Якщо користувач не увійшов в систему і не на роуті "/register",
  // перенаправляємо його на сторінку входу
  if (!isSignedIn && !isRegisterRoute) {
    return <Navigate to="/login" replace />;
  }

  // Якщо користувач увійшов в систему або на роуті "/register",
  // він має доступ до дочірніх компонентів
  return children;
};

export default PrivateRoute;
