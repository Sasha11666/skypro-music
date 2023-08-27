import { createSlice } from "@reduxjs/toolkit";

export const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: { value: "" },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.value = action.payload;
    },
    skipPrevTrack: (state, action) => {
      const index = Number(
        action.payload.findIndex((x) => x.id === state.value.id)
      );
      console.log(index);
      if (index > 0) {
        const prevTrack = action.payload[index - 1];
        // let prevTrack = action.payload.filter(
        //   (item) => Number(item.id) === Number(state.value.id) - 1
        // );
        state.value = {
          title: prevTrack.name,
          author: prevTrack.author,
          album: prevTrack.album,
          id: prevTrack.id,
          url: prevTrack.track_file,
        };
      } else {
        return;
      }
    },
    skipNextTrack: (state, action) => {
      const index = Number(
        action.payload.findIndex((x) => x.id === state.value.id)
      );
      if (index < action.payload.length - 1) {
        // let nextTrack = action.payload.filter(
        //   (item) => Number(item.id) === Number(state.value.id) + 1
        // );
        const nextTrack = action.payload[index + 1];
        state.value = {
          title: nextTrack.name,
          author: nextTrack.author,
          album: nextTrack.album,
          id: nextTrack.id,
          url: nextTrack.track_file,
        };
      } else {
        return;
      }
    },
    skipRandomTrack: (state, action) => {
      let index = Math.floor(Math.random() * action.payload.length);
      console.log(index);
      let randomTrack = action.payload[index];
      state.value = {
        title: randomTrack.name,
        author: randomTrack.author,
        album: randomTrack.album,
        id: randomTrack.id,
        url: randomTrack.track_file,
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
