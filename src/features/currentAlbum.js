import { createSlice } from "@reduxjs/toolkit";

export const currentAlbumSlice = createSlice({
  name: "currentAlbum",
  initialState: { value: { tracks: "", name: "", playerTracks: "" } },
  reducers: {
    setCurrentAlbum: (state, action) => {
      state.value.tracks = action.payload;
    },
    setCurrentAlbumName: (state, action) => {
      state.value.name = action.payload;
    },
    setCurrentAlbumPlayer: (state, action) => {
      state.value.playerTracks = action.payload;
    },
  },
});

export const { setCurrentAlbum, setCurrentAlbumName, setCurrentAlbumPlayer } =
  currentAlbumSlice.actions;

export default currentAlbumSlice.reducer;
