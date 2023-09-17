import { createGlobalStyle } from "styled-components";
import font1 from "./assets/fonts/StratosSkyeng.woff";
import font2 from "./assets/fonts/StratosSkyeng.woff2";
import { AppRoutes } from "./routes";
import { useEffect, useState, createContext, useContext } from "react";
import Bar from "./components/Bar";

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
  min-height: 200vh;
  background-color: #181818;;
  // height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  30% {
    -webkit-transform: scale(0.80);
            transform: scale(0.80);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  90% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
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

export const UserContext = createContext("");

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};

function App() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user: user, setUser }}>
        <>
          <AppRoutes
            loaded={loaded}
            error={error}
            setUser={setUser}
            setError={setError}
            setLoaded={setLoaded}
            setShown={setShown}
          />
          <Bar loaded={loaded} shown={shown} />
        </>
      </UserContext.Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
