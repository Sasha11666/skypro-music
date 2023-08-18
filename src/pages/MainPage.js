import React from "react";
import { useState } from "react";
import Bar from "../components/Bar";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import Footer from "../components/Footer";
import * as S from "../components/Styles";

export const MainPage = ({ loaded, error }) => {
  const [shown, setShown] = useState(false);
  // const [isplaying, setIsplaying] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            setShown={setShown}
            error={error}
            // setIsplaying={setIsplaying}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Bar loaded={loaded} shown={shown} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
