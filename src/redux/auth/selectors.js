export const selectIsSignedIn = (state) => state.auth.isSignedIn;
//export const selectUser = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;
