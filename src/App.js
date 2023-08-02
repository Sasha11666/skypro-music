import { createGlobalStyle } from "styled-components";
import font1 from "./assets/fonts/StratosSkyeng.woff";
import font2 from "./assets/fonts/StratosSkyeng.woff2";
import { AppRoutes } from "./routes";

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
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <GlobalStyle />
    </div>
  );
}

export default App;
