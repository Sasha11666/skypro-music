import { createSlice } from "@reduxjs/toolkit";

export const currentAlbumSlice = createSlice({
  name: "currentAlbum",
  initialState: { value: "" },
  reducers: {
    setCurrentAlbum: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentAlbum } = currentAlbumSlice.actions;

export default currentAlbumSlice.reducer;
