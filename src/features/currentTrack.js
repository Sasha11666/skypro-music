import { createSlice } from "@reduxjs/toolkit";

export const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: { value: "" },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.value = action.payload;
    },
    skipPrevTrack: (state, action) => {
      if (Number(state.value.id) > 8) {
        let prevTrack = action.payload.filter(
          (item) => Number(item.id) === Number(state.value.id) - 1
        );
        state.value = {
          title: prevTrack[0].name,
          author: prevTrack[0].author,
          album: prevTrack[0].album,
          id: prevTrack[0].id,
          url: prevTrack[0].track_file,
        };
      } else {
        return;
      }
    },
    skipNextTrack: (state, action) => {
      if (Number(state.value.id) < action.payload.length + 7) {
        let nextTrack = action.payload.filter(
          (item) => Number(item.id) === Number(state.value.id) + 1
        );
        state.value = {
          title: nextTrack[0].name,
          author: nextTrack[0].author,
          album: nextTrack[0].album,
          id: nextTrack[0].id,
          url: nextTrack[0].track_file,
        };
      } else {
        return;
      }
    },
    skipRandomTrack: (state, action) => {
      let id = Math.floor(Math.random() * (36 + 1));
      if (id < 8) {
        id += 8;
      }
      let randomTrack = action.payload.filter((item) => Number(item.id) === id);
      state.value = {
        title: randomTrack[0].name,
        author: randomTrack[0].author,
        album: randomTrack[0].album,
        id: randomTrack[0].id,
        url: randomTrack[0].track_file,
      };
    },
  },
});

export const {
  setCurrentTrack,
  skipPrevTrack,
  skipNextTrack,
  skipRandomTrack,
} = currentTrackSlice.actions;

export default currentTrackSlice.reducer;
