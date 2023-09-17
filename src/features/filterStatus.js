import { createSlice } from "@reduxjs/toolkit";

export const filterStatusSlice = createSlice({
  name: "filterStatus",
  initialState: { value: false },
  reducers: {
    setFilterStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterStatus } = filterStatusSlice.actions;

export default filterStatusSlice.reducer;
