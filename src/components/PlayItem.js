import React from "react";
import * as S from "./Styles";

function PlayItem({
  id,
  title,
  author,
  album,
  time,
  loaded,
  setShown,
  setCurrentTrack,
  url,
  setIsplaying,
}) {
  const showBar = () => {
    setShown(true);
    const track = {
      title: title,
      author: author,
      album: album,
      id: id,
      url: url,
    };
    setCurrentTrack(track);
    setIsplaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time) - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const formated = `${minutes} : ${seconds}`;
    return formated;
  };

  return (
    <>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              {loaded && (
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImg>
            <S.TrackTitleText loaded={loaded}>
              {loaded && (
                <S.TrackTitleLink onClick={showBar}>
                  {title} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor loaded={loaded}>
            {loaded && (
              <S.TrackAuthorLink onClick={showBar}>{author}</S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum loaded={loaded}>
            {loaded && (
              <S.TrackAlbumLink onClick={showBar}>{album}</S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          <div>
            {loaded && (
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
            )}
            {loaded && (
              <S.TrackTimeText className="track__time-text">
                {formatTime(time)}
              </S.TrackTimeText>
            )}
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </>
  );
}

export default PlayItem;
