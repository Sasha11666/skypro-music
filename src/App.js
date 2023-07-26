import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Centerblock from "./components/Centerblock";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import font1 from "./assets/fonts/StratosSkyeng.woff";
import font2 from "./assets/fonts/StratosSkyeng.woff2";
import * as S from "./components/Styles";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url(${font2}) format("woff2"),
    url(${font1}) format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

ul li {
  list-style: none;
} 

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}
`;

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
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
    </div>
  );
}

export default App;
