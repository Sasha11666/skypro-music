import "./App.css";
import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Centerblock from "./components/Centerblock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <Centerblock />
          <Sidebar />
        </main>
        <Bar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
