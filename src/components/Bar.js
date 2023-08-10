import React, { useEffect, useRef, useState } from "react";
import Player from "./Player";

function Bar({ loaded, shown, currentTrack, setCurrentTrack }) {
  const [isplaying, setIsplaying] = useState(false);
  const [loopOn, setLoopOn] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0.5);

  const audioEl = useRef(null);

  useEffect(() => {
    setIsplaying(true);
    audioEl.current.play();
    setCurrentTrack({
      ...currentTrack,
      progress: 0,
    });
  }, [currentTrack.url]);

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
    setCurrentTrack({
      ...currentTrack,
      progress: (ct / duration) * 100,
      length: duration,
    });
    console.log(currentTrack);
  };

  return (
    <>
      <audio src={currentTrack.url} ref={audioEl} onTimeUpdate={onPlaying} />
      <Player
        loaded={loaded}
        shown={shown}
        currentTrack={currentTrack}
        isplaying={isplaying}
        setIsplaying={setIsplaying}
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
