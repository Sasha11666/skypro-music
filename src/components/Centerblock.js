import React from "react";
import Playlist from "./Playlist";
import Filter from "./Filter";
import * as S from "./Styles";
import { useSelector } from "react-redux";

function Centerblock({ loaded, setShown, error, loading }) {
  const currentAlbum = useSelector((state) => state.currentAlbum.value.name);

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockHeading>
        {currentAlbum === "favourites" ? "Мои треки" : "Треки"}
      </S.CenterblockHeading>
      {currentAlbum === "favourites" ? "" : <Filter />}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitle1>Трек</S.PlaylistTitle1>
          <S.PlaylistTitle2>ИСПОЛНИТЕЛЬ</S.PlaylistTitle2>
          <S.PlaylistTitle3>АЛЬБОМ</S.PlaylistTitle3>
          <S.PlaylistTitle4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitle4>
        </S.ContentTitle>
        <Playlist
          loaded={loaded}
          setShown={setShown}
          error={error}
          loading={loading}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default Centerblock;
