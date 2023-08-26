import React, { useEffect } from "react";
import * as S from "../components/Styles";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import { getFavTracks, updateToken } from "../api";
import { setCurrentAlbum, setCurrentAlbumName } from "../features/currentAlbum";
import { useDispatch, useSelector } from "react-redux";

function FavouritesPage({ loaded, error, setLoaded, setError, setShown }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.clickedStatus.value);

  const getFavs = () => {
    setLoading(true);
    getFavTracks()
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks));
        dispatch(setCurrentAlbumName("favourites"));
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          updateToken(
            `${JSON.parse(localStorage.getItem("refreshToken"))}`
          ).then((data) => {
            localStorage.removeItem("token");
            localStorage.setItem("token", JSON.stringify(data));
            getFavTracks().then((tracks) => {
              dispatch(setCurrentAlbum(tracks));
              dispatch(setCurrentAlbumName("favourites"));
              setLoading(false);
              setLoaded(true);
            });
          });
        }
      });
  };

  useEffect(() => {
    getFavs();
  }, []);

  useEffect(() => {
    getFavs();
  }, [isClicked]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            setShown={setShown}
            error={error}
            loading={loading}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}

export default FavouritesPage;
