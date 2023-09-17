import { createSlice } from "@reduxjs/toolkit";

export const filterGenreSlice = createSlice({
  name: "filterGenre",
  initialState: {
    value: {
      genres: [],
    },
  },
  reducers: {
    addToGenresArray: (state, action) => {
      state.value.genres.push(action.payload);
    },
    deleteFromGenresArray: (state, action) => {
      state.value.genres = state.value.genres.filter(
        (genre) => genre !== action.payload
      );
    },
  },
});

export const { addToGenresArray, deleteFromGenresArray } =
  filterGenreSlice.actions;

export default filterGenreSlice.reducer;
