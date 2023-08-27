import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../features/currentTrack";
import { skipNextTrack } from "../features/currentTrack";

function Bar({ loaded, shown }) {
  const [loopOn, setLoopOn] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const tracks = useSelector((state) => state.currentAlbum.value.playerTracks);
  const isplaying = useSelector((state) => state.playingStatus.value);
  const dispatch = useDispatch();

  const audioEl = useRef(null);

  useEffect(() => {
    if (isplaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isplaying]);

  useEffect(() => {
    if (loopOn) {
      audioEl.current.loop = "loop";
    } else {
      audioEl.current.loop = "";
    }
  }, [loopOn]);

  useEffect(() => {
    audioEl.current.volume = currentVolume;
  }, [currentVolume]);

  const onPlaying = () => {
    const duration = audioEl.current.duration;
    const ct = audioEl.current.currentTime;
    dispatch(
      setCurrentTrack({
        ...currentTrack,
        progress: (ct / duration) * 100,
        length: duration,
      })
    );
    if (ct === duration) {
      dispatch(skipNextTrack(tracks));
    }
  };

  return (
    <>
      <audio
        src={currentTrack.url}
        ref={audioEl}
        onTimeUpdate={onPlaying}
        autoPlay={true}
      />
      <Player
        loaded={loaded}
        shown={shown}
        audioEl={audioEl}
        loopOn={loopOn}
        setLoopOn={setLoopOn}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
      />
    </>
  );
}

export default Bar;
