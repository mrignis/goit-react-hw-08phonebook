import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import instance from "../../redux/auth/operation";

export const apiGetContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log("data GetContacts: ", data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contacts/addNew",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/contacts", formData);
      console.log("data apiAddContact: ", data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiRemoveContact = createAsyncThunk(
  "contacts/remove",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      console.log("data apiRemoveContact: ", data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
