import "./App.css";
import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Centerblock from "./components/Centerblock";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  });

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav loaded={loaded} />
          <Centerblock loaded={loaded} />
          <Sidebar loaded={loaded} />
        </main>
        <Bar loaded={loaded} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
