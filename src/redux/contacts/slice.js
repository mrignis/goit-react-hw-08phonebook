import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { apiGetContacts, apiAddContact, apiRemoveContact } from "./operations";
import { apiLogout } from "../auth/operations";

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        state.isError = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
        state.isError = false;
      })
      .addCase(apiRemoveContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.isError = false;
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.contacts = null;
      })
      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiRemoveContact.pending,
          apiLogout.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiRemoveContact.rejected,
          apiLogout.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
