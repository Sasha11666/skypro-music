import React from "react";
import { items } from "./Playlist";
import * as S from "./Styles";

function FirstFilterItem({
  firstShown,
  setfirstShown,
  setSecondShown,
  setThirdShown,
}) {
  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setfirstShown(!firstShown);
          setSecondShown(false);
          setThirdShown(false);
        }}
        active={firstShown}
        // className="_btn-text"
      >
        исполнителю
      </S.FilterButton>
      {firstShown && (
        <S.OptionsContainer>
          {items.map(({ id, author }) => (
            <S.Option>
              <S.OptionRadio type="radio" id={id} name="category" />
              <label htmlFor={id}>{author}</label>
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </S.FilterItem>
  );
}

export default FirstFilterItem;
