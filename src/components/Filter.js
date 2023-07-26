import React from "react";
import FirstFilterItem from "./FirstFilterItem";
import { useState } from "react";
import SecondFilterItem from "./SecondFilterItem";
import ThirdFilterItem from "./ThirdFilterItem";
import * as S from "./Styles";

function Filter() {
  const [firstShown, setFirstShown] = useState(false);
  const [secondShown, setSecondShown] = useState(false);
  const [thirdShown, setThirdShown] = useState(false);

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FirstFilterItem
        firstShown={firstShown}
        setfirstShown={setFirstShown}
        setSecondShown={setSecondShown}
        setThirdShown={setThirdShown}
      />
      <SecondFilterItem
        secondShown={secondShown}
        setSecondShown={setSecondShown}
        setfirstShown={setFirstShown}
        setThirdShown={setThirdShown}
      />
      <ThirdFilterItem
        thirdShown={thirdShown}
        setThirdShown={setThirdShown}
        setSecondShown={setSecondShown}
        setfirstShown={setFirstShown}
      />
    </S.CenterblockFilter>
  );
}

export default Filter;
