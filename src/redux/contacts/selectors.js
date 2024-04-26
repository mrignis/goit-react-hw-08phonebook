import { createSelector } from "@reduxjs/toolkit";

export const selectPhonebookContacts = (state) => state.phonebook.contacts;
export const selectPhonebookIsLoading = (state) => state.phonebook.isLoading;
export const selectPhonebookIsError = (state) => state.phonebook.isError;
export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.nameFilter;

// Переписуємо селектор, щоб фільтрувати контакти за іменем
