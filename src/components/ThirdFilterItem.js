import React from "react";
import { items } from "./Playlist";
import * as S from "./Styles";

function ThirdFilterItem({
  thirdShown,
  setThirdShown,
  setfirstShown,
  setSecondShown,
}) {
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].genre)) {
      itemsFiltered.push(items[i].genre);
    } else {
      i++;
    }
  }

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setThirdShown(!thirdShown);
          setfirstShown(false);
          setSecondShown(false);
        }}
        active={thirdShown}
        // className="_btn-text"
      >
        жанру
      </S.FilterButton>
      {thirdShown && (
        <S.OptionsContainer>
          {itemsFiltered.map((item, index) => (
            <S.Option>
              <S.OptionRadio type="radio" id={index} name="category" />
              <label htmlFor={index}>{item}</label>
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </S.FilterItem>
  );
}

export default ThirdFilterItem;
