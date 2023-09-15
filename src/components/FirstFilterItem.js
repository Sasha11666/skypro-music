import React from "react";
import * as S from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addToAuthorsArray,
  deleteFromAuthorsArray,
} from "../features/filterAuthor";

function FirstFilterItem({
  firstShown,
  setfirstShown,
  setSecondShown,
  setThirdShown,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const filteredAuthors = useSelector(
    (state) => state.filterAuthor.value.authors
  );
  const dispatch = useDispatch();
  let uniqueAuthoredTracks = [];
  if (currentTracks) {
    let authoredTracks;
    authoredTracks = currentTracks.filter((item) => item.author !== "-");
    let uniqueAuthors = [];
    for (let i = 0; i < authoredTracks.length; i++) {
      if (!uniqueAuthors.includes(authoredTracks[i].author)) {
        uniqueAuthors.push(authoredTracks[i].author);
        uniqueAuthoredTracks.push(authoredTracks[i]);
      } else {
        i++;
      }
    }
  }

  const filterByAuthor = (author) => {
    console.log(author);
    if (filteredAuthors.includes(author)) {
      dispatch(deleteFromAuthorsArray(author));
      console.log("deleted");
    } else {
      dispatch(addToAuthorsArray(author));
      console.log("added");
    }
  };

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setfirstShown(!firstShown);
          setSecondShown(false);
          setThirdShown(false);
        }}
        active={firstShown}
      >
        {filteredAuthors.length > 0 ? (
          <S.SelectedMark>{tracks.length}</S.SelectedMark>
        ) : (
          ""
        )}
        исполнителю
      </S.FilterButton>
      {currentTracks ? (
        <>
          {firstShown && (
            <S.OptionsContainer>
              {uniqueAuthoredTracks.map(({ id, author }) => (
                <S.Option key={id} selected={filteredAuthors.includes(author)}>
                  <S.OptionRadio
                    type="radio"
                    id={id}
                    name="category"
                    onClick={() => filterByAuthor(author)}
                  />
                  <label htmlFor={id}>{author}</label>
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

export default FirstFilterItem;
