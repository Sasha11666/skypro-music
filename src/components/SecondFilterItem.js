import React from "react";
import * as S from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { setSortWay } from "../features/sortTrack";

function SecondFilterItem({
  secondShown,
  setSecondShown,
  setfirstShown,
  setThirdShown,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const sortWay = useSelector((state) => state.sortTracks.value.sortWay);
  const dispatch = useDispatch();

  const setSorted = (id) => {
    dispatch(setSortWay(id));
  };

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
      {currentTracks ? (
        <>
          {secondShown && (
            <S.OptionsContainer>
              <S.Option key={1} selected={sortWay === ""}>
                <S.OptionRadio
                  type="radio"
                  id={1}
                  name="category"
                  onClick={() => setSorted("")}
                />
                <label htmlFor={1}>По умолчанию</label>
              </S.Option>
              <S.Option key={2} selected={sortWay === 2}>
                <S.OptionRadio
                  type="radio"
                  id={2}
                  name="category"
                  onClick={() => setSorted(2)}
                />
                <label htmlFor={2}>Сначала новые</label>
              </S.Option>
              <S.Option key={3} selected={sortWay === 3}>
                <S.OptionRadio
                  type="radio"
                  id={3}
                  name="category"
                  onClick={() => setSorted(3)}
                />
                <label htmlFor={3}>Сначала старые</label>
              </S.Option>
            </S.OptionsContainer>
          )}
        </>
      ) : (
        ""
      )}
    </S.FilterItem>
  );
}

export default SecondFilterItem;
