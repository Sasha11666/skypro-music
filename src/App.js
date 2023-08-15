import { createGlobalStyle } from "styled-components";
import font1 from "./assets/fonts/StratosSkyeng.woff";
import font2 from "./assets/fonts/StratosSkyeng.woff2";
import { AppRoutes } from "./routes";
import { useEffect, useState, createContext, useContext } from "react";
import { getTracks } from "./api";

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
  const [tracks, setTracks] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
    setUser(JSON.parse(localStorage.getItem("user")));
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user: user, setUser }}>
        <AppRoutes
          tracks={tracks}
          loaded={loaded}
          error={error}
          setUser={setUser}
        />
      </UserContext.Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
