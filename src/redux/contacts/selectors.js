import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts;

export const selectContacts = (state) => selectContactsState(state).contacts;

export const selectLoadingStatus = (state) =>
  selectContactsState(state).isLoading;

export const selectErrorStatus = (state) => selectContactsState(state).isError;

export const selectNameFilter = (state) => state.filters.nameFilter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (!contacts) return [];
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
