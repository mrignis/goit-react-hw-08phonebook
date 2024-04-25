// store.js

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./contacts/filtersSlice";
import { authReducer } from "./auth/slice"; // оновлений імпорт

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer, // додайте authReducer до кореневого редюсера
  },
});
