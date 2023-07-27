import React from "react";
import { items } from "./Playlist";
import * as S from "./Styles";

function SecondFilterItem({
  secondShown,
  setSecondShown,
  setfirstShown,
  setThirdShown,
}) {
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].year)) {
      itemsFiltered.push(items[i].year);
    } else {
      i++;
    }
  }

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setSecondShown(!secondShown);
          setfirstShown(false);
          setThirdShown(false);
        }}
        active={secondShown}
        // className="_btn-text"
      >
        году выпуска
      </S.FilterButton>
      {secondShown && (
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

export default SecondFilterItem;
