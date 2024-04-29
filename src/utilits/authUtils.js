// authUtils.js

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const getIsLoggedIn = () => {
  return useSelector(selectIsLoggedIn);
};
