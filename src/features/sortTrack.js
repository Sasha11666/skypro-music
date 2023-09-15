import { createSlice } from "@reduxjs/toolkit";

export const sortTracksSlice = createSlice({
  name: "sortTracks",
  initialState: {
    value: {
      sortWay: "",
    },
  },
  reducers: {
    setSortWay: (state, action) => {
      state.value.sortWay = action.payload;
    },
  },
});

export const { setSortWay } = sortTracksSlice.actions;

export default sortTracksSlice.reducer;
