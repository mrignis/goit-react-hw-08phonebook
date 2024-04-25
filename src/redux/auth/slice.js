import { createSlice } from "@reduxjs/toolkit";
import { apiRegister, apiLogin, apiRefreshUser, apiLogout } from "./operation";

const INITIAL_STATE = {
  isSignedIn: false,
  userData: null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Зберегти токен в локальному сховищі
    },
    // Додайте інші reducers за потребою
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegister.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(apiLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(apiLogout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSignedIn = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(apiLogout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
