import { createSlice } from "@reduxjs/toolkit";

export const likedStatusSlice = createSlice({
  name: "likedStatus",
  initialState: { value: { liked: "", disliked: "" } },
  reducers: {
    setLikedStatus: (state, action) => {
      state.value.liked = action.payload;
    },
    setDislikedStatus: (state, action) => {
      state.value.disliked = action.payload;
    },
  },
});

export const { setLikedStatus, setDislikedStatus } = likedStatusSlice.actions;

export default likedStatusSlice.reducer;
