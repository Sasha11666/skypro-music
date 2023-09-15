import { createSlice } from "@reduxjs/toolkit";

export const filterAuthorSlice = createSlice({
  name: "filterAuthor",
  initialState: {
    value: {
      authors: [],
    },
  },
  reducers: {
    addToAuthorsArray: (state, action) => {
      state.value.authors.push(action.payload);
    },
    deleteFromAuthorsArray: (state, action) => {
      state.value.authors = state.value.authors.filter(
        (author) => author !== action.payload
      );
    },
  },
});

export const { addToAuthorsArray, deleteFromAuthorsArray } =
  filterAuthorSlice.actions;

export default filterAuthorSlice.reducer;
