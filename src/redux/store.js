import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./contacts/filtersSlice"; // Імпорт редюсера фільтрів

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer, // Додайте редюсер фільтрів до кореневого редюсера
  },
});
