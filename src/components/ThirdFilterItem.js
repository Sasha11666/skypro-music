import React from "react";
import * as S from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  addToGenresArray,
  deleteFromGenresArray,
} from "../features/filterGenre";

function ThirdFilterItem({
  thirdShown,
  setThirdShown,
  setfirstShown,
  setSecondShown,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const filteredGenres = useSelector((state) => state.filterGenre.value.genres);
  const dispatch = useDispatch();
  let uniqueTracks = [];
  if (currentTracks) {
    let uniqueGenres = [];
    for (let i = 0; i < currentTracks.length; i++) {
      if (!uniqueGenres.includes(String(currentTracks[i].genre))) {
        uniqueGenres.push(String(currentTracks[i].genre));
        uniqueTracks.push(currentTracks[i]);
      } else {
        i++;
      }
    }
  }

  const filterByGenre = (genre) => {
    console.log(genre);
    if (filteredGenres.includes(genre)) {
      dispatch(deleteFromGenresArray(genre));
      console.log("deleted");
    } else {
      dispatch(addToGenresArray(genre));
      console.log("added");
    }
  };

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setThirdShown(!thirdShown);
          setfirstShown(false);
          setSecondShown(false);
        }}
        active={thirdShown}
      >
        {filteredGenres.length > 0 ? (
          <S.SelectedMark>{tracks.length}</S.SelectedMark>
        ) : (
          ""
        )}
        жанру
      </S.FilterButton>
      {currentTracks ? (
        <>
          {thirdShown && (
            <S.OptionsContainer>
              {uniqueTracks.map(({ genre, id }) => (
                <S.Option key={id} selected={filteredGenres.includes(genre)}>
                  <S.OptionRadio
                    type="radio"
                    id={id}
                    name="category"
                    onClick={() => filterByGenre(genre)}
                  />
                  <label htmlFor={id}>{genre}</label>
                </S.Option>
              ))}
            </S.OptionsContainer>
          )}
        </>
      ) : (
        ""
      )}
    </S.FilterItem>
  );
}

export default ThirdFilterItem;
