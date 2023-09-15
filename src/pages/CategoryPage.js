import React, { useEffect, useState } from "react";
import * as S from "../components/Styles";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelectedTracks } from "../api";
import { setCurrentAlbum, setCurrentAlbumName } from "../features/currentAlbum";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";

function CategoryPage({ loaded, error, setLoaded, setError, setShown }) {
  const params = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(setCurrentAlbumName(`category${params.id}`));
    getSelectedTracks(params.id)
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks.items));
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
}

export default CategoryPage;
