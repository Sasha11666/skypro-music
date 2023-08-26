import { createSlice } from "@reduxjs/toolkit";

export const clickedStatusSlice = createSlice({
  name: "clickedStatus",
  initialState: { value: false },
  reducers: {
    setClickedStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setClickedStatus } = clickedStatusSlice.actions;

export default clickedStatusSlice.reducer;
