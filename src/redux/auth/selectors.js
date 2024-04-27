export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUserEmail = (state) => state.auth.user.email;

// eslint-disable-next-line

export const useAuth = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const isRefreshing = useSelector(selectedIsRefreshing);
  const user = useSelector(selectedUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
export default { getIsAuthenticated, getUserEmail };
