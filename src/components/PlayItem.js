import React from "react";
import * as S from "./Styles";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../features/currentTrack";
import { useSelector } from "react-redux";
import { setPlayingStatus } from "../features/playingStatus";
import { setClickedStatus } from "../features/clickedStatus";
import { useEffect } from "react";
import { useState } from "react";
import { addToFav, deleteFromFav, getFavTracks, updateToken } from "../api";
import { setCurrentAlbumPlayer } from "../features/currentAlbum";

function PlayItem({
  id,
  title,
  author,
  album,
  time,
  loaded,
  setShown,
  url,
  likes,
}) {
  const currentTrack = useSelector((state) => state.currentTrack.value);
  const currentAlbumName = useSelector(
    (state) => state.currentAlbum.value.name
  );
  const isplaying = useSelector((state) => state.playingStatus.value);
  const isClicked = useSelector((state) => state.clickedStatus.value);
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const likedId = useSelector((state) => state.likedStatus.value);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const showBar = () => {
    setShown(true);
    const track = {
      title: title,
      author: author,
      album: album,
      id: id,
      url: url,
    };
    dispatch(setCurrentTrack(track));
    dispatch(setPlayingStatus(true));
    dispatch(setCurrentAlbumPlayer(tracks));
  };

  useEffect(() => {
    if (currentAlbumName === "favourites") {
      setLiked(true);
    } else {
      const found = Boolean(
        likes?.find(
          (x) =>
            x.username === JSON.parse(localStorage.getItem("user")).username
        )
      );
      setLiked(found);
    }
  }, []);

  useEffect(() => {
    if (likedId.liked === id) {
      setLiked(true);
    } else if (likedId.disliked === id) {
      setLiked(false);
    }
  }, [likedId]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time) - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    const formated = `${minutes} : ${seconds}`;
    return formated;
  };

  const manageLikedTrack = (presentId) => {
    if (presentId) {
      setLiked(false);
      deleteFromFav(id)
        .then(() => {
          dispatch(setClickedStatus(!isClicked));
        })
        .catch((err) => {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            deleteFromFav(id).then(() => {
              dispatch(setClickedStatus(!isClicked));
            });
          });
        });
    } else {
      setLiked(true);
      addToFav(id)
        .then(() => {
          dispatch(setClickedStatus(!isClicked));
        })
        .catch((err) => {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            addToFav(id).then(() => {
              dispatch(setClickedStatus(!isClicked));
            });
          });
        });
    }
  };

  const toggleLike = () => {
    let presentObj;
    let presentId;
    getFavTracks()
      .then((tracks) => {
        presentObj = tracks.find((x) => x.id === id);
        presentId = presentObj?.id;
        manageLikedTrack(presentId);
      })
      .catch((err) => {
        if (err) {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            getFavTracks().then((tracks) => {
              presentObj = tracks.find((x) => x.id === id);
              presentId = presentObj?.id;
              manageLikedTrack(presentId);
            });
          });
        }
      });
  };

  return (
    <>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              {loaded && (
                <>
                  {id === currentTrack.id ? (
                    <S.TrackTitleSvg alt="music" isplaying={isplaying}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-dot"></use>
                    </S.TrackTitleSvg>
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </>
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
          <S.TrackTimeBlock>
            {loaded && (
              <S.TrackTimeSvg onClick={toggleLike} liked={liked} alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
            )}
            {loaded && (
              <S.TrackTimeText className="track__time-text">
                {formatTime(time)}
              </S.TrackTimeText>
            )}
          </S.TrackTimeBlock>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </>
  );
}

export default PlayItem;

// Boolean(liked === id)
