// c:/Users/chelb/Documents/GitHub/goit-react-hw-08phonebook/src/redux/auth/selectors.js

export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
