import React from "react";
import { useEffect, useState } from "react";
import Bar from "../components/Bar";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import Footer from "../components/Footer";
import * as S from "../components/Styles";

export const MainPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock loaded={loaded} />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Bar loaded={loaded} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
