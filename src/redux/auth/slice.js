import { createSlice } from "@reduxjs/toolkit";
import { apiRegister, apiLogin, apiRefreshUser, apiLogout } from "./operations";

// Функція для завантаження токена з localStorage
const loadTokenFromStorage = () => {
  return localStorage.getItem("token") || null;
};

// Початковий стан
const INITIAL_STATE = {
  isSignedIn: false,
  userData: null,
  token: loadTokenFromStorage(),
  isLoading: false,
  isError: false,
};

// Створення slice
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
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
        localStorage.setItem("token", action.payload.token); // Зберегти токен в localStorage
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
        localStorage.setItem("token", action.payload.token); // Зберегти токен в localStorage
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
        localStorage.removeItem("token"); // Видалити токен з localStorage при виході з системи
      })
      .addCase(apiLogout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

// Експорт дій та редуктора
export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
