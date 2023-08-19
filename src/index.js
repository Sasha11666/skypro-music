import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import currentTrackReducer from "./features/currentTrack";
import currentAlbumReducer from "./features/currentAlbum";
import playingStatusReducer from "./features/playingStatus";

const store = configureStore({
  reducer: {
    currentTrack: currentTrackReducer,
    currentAlbum: currentAlbumReducer,
    playingStatus: playingStatusReducer,
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
