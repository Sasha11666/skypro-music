import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import * as S from "../components/Styles";
import { useDispatch } from "react-redux";
import { getTracks } from "../api";
import { setCurrentAlbum, setCurrentAlbumName } from "../features/currentAlbum";

export const MainPage = ({ loaded, error, setLoaded, setError, setShown }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracks()
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks));
        dispatch(setCurrentAlbumName("main"));
        setLoading(false);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
};
