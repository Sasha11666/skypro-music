import React, { useRef, useState } from "react";
import * as S from "./Styles";
import VolumeProgress from "./VolumeProgress";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  skipNextTrack,
  skipPrevTrack,
  skipRandomTrack,
} from "../features/currentTrack";
import { setPlayingStatus } from "../features/playingStatus";

function Player({
  loaded,
  shown,
  audioEl,
  loopOn,
  setLoopOn,
  currentVolume,
  setCurrentVolume,
}) {
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.currentAlbum.value.playerTracks);
  const progressRef = useRef(null);
  const [mixed, setMixed] = useState(false);
  const isplaying = useSelector((state) => state.playingStatus.value);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time) - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const formated = `${minutes} : ${seconds}`;
    return formated;
  };

  const PlayPause = () => {
    dispatch(setPlayingStatus(!isplaying));
  };

  const LoopTrack = () => {
    setLoopOn(!loopOn);
  };

  const checkProgress = (e) => {
    let width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const progress = (offset / width) * 100;
    audioEl.current.currentTime = (progress / 100) * currentTrack.length;
  };

  const toggleMute = () => {
    if (currentVolume === 0) {
      setCurrentVolume(0.5);
    } else {
      setCurrentVolume(0);
    }
  };

  function skipToPrev() {
    if (mixed) {
      dispatch(skipRandomTrack(tracks));
    } else {
      dispatch(skipPrevTrack(tracks));
    }
    dispatch(setPlayingStatus(true));
  }

  function skipToNext() {
    if (mixed) {
      dispatch(skipRandomTrack(tracks));
    } else {
      dispatch(skipNextTrack(tracks));
    }
    dispatch(setPlayingStatus(true));
  }

  const mixTracks = () => {
    setMixed(!mixed);
  };

  return (
    <div>
      <S.Bar shown={shown}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "8px",
          }}
        >
          {currentTrack.progress ? (
            <div>
              <span>{formatTime(currentTrack.progress)}</span>
              <span> / {formatTime(currentTrack.length)}</span>
            </div>
          ) : null}
        </div>
        {shown && (
          <S.BarContent>
            <S.BarPlayerProgress onClick={checkProgress} ref={progressRef}>
              <S.ColorPlayerProgress
                style={{ width: `${currentTrack.progress + "%"}` }}
              ></S.ColorPlayerProgress>
            </S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg alt="prev" onClick={skipToPrev}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    {isplaying ? (
                      <S.PlayBtnPlaySvg alt="pause" onClick={PlayPause}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                      </S.PlayBtnPlaySvg>
                    ) : (
                      <S.PlayBtnPlaySvg alt="play" onClick={PlayPause}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                      </S.PlayBtnPlaySvg>
                    )}
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next" onClick={skipToNext}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg
                      alt="repeat"
                      loop={loopOn}
                      onClick={LoopTrack}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg
                      alt="shuffle"
                      shuffle={mixed}
                      onClick={mixTracks}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      {loaded && (
                        <S.TrackPlaySvg alt="music">
                          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                      )}
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor loaded={loaded}>
                      {loaded && (
                        <S.TrackPlayAuthorLink href="http://">
                          {currentTrack.title}
                        </S.TrackPlayAuthorLink>
                      )}
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum loaded={loaded}>
                      {loaded && (
                        <S.TrackPlayAlbumLink href="http://">
                          {currentTrack.author}
                        </S.TrackPlayAlbumLink>
                      )}
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    {currentVolume ? (
                      <S.VolumeSvg alt="volume" onClick={toggleMute}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                      </S.VolumeSvg>
                    ) : (
                      <S.VolumeSvg alt="volume" onClick={toggleMute}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-mute"></use>
                      </S.VolumeSvg>
                    )}
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <VolumeProgress
                      currentVolume={currentVolume}
                      setCurrentVolume={setCurrentVolume}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        )}
      </S.Bar>
    </div>
  );
}

export default Player;
