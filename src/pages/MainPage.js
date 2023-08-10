import React from "react";
import { useState } from "react";
import Bar from "../components/Bar";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Centerblock from "../components/Centerblock";
import Footer from "../components/Footer";
import * as S from "../components/Styles";

export const MainPage = ({ tracks, loaded, error }) => {
  const [shown, setShown] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoaded(true);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav loaded={loaded} />
          <Centerblock
            loaded={loaded}
            tracks={tracks}
            setShown={setShown}
            setCurrentTrack={setCurrentTrack}
            error={error}
          />
          <Sidebar loaded={loaded} />
        </S.Main>
        <Bar
          loaded={loaded}
          shown={shown}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
