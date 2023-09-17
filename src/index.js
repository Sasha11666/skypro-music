import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import currentTrackReducer from "./features/currentTrack";
import currentAlbumReducer from "./features/currentAlbum";
import playingStatusReducer from "./features/playingStatus";
import clickedStatusReducer from "./features/clickedStatus";
import likedStatusReducer from "./features/likedStatus";
import filterStatusReducer from "./features/filterStatus";
import filterAuthorReducer from "./features/filterAuthor";
import filterGenreReducer from "./features/filterGenre";
import sortTracksReducer from "./features/sortTrack";

const store = configureStore({
  reducer: {
    currentTrack: currentTrackReducer,
    currentAlbum: currentAlbumReducer,
    playingStatus: playingStatusReducer,
    clickedStatus: clickedStatusReducer,
    likedStatus: likedStatusReducer,
    filterStatus: filterStatusReducer,
    filterAuthor: filterAuthorReducer,
    filterGenre: filterGenreReducer,
    sortTracks: sortTracksReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
