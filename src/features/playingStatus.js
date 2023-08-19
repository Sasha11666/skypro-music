import { createSlice } from "@reduxjs/toolkit";

export const playingStatusSlice = createSlice({
  name: "playingStatus",
  initialState: { value: false },
  reducers: {
    setPlayingStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayingStatus } = playingStatusSlice.actions;

export default playingStatusSlice.reducer;
