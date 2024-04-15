import { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import TsumegoHero from "./components/TsumegoHero";
import CityDating from "./components/CityDating";
import GoBremen from "./components/GoBremen";

function App() {
  const [page, setPage] = useState("home");
  const [content, setContent] = useState(<GoBremen />);
  useEffect(() => {
    if (page === "home") setContent(<div></div>);
    else if (page === "Tsumego Hero") setContent(<TsumegoHero />);
    else if (page === "Go in Bremen") setContent(<GoBremen />);
    else if (page === "City Dating") setContent(<CityDating />);
    else setContent(<div></div>);
  }, [page]);
  return (
    <div className="App">
      <div id="magic"></div>
      <Menu
        onPageClicked={(p) => {
          setPage(p);
        }}
      />
      <div className="page" align="center">
        {content}
      </div>
      <div className="playground">
        <div className="bottomPosition"></div>
      </div>
      <div className="footer1 mirror3 font4">Story about me</div>
      <div className="footer2 mirror3x font4">
        <div align="center">
          Joschka Zimdars © 2024
          <br />
          joschka.zimdars@googlemail.com
        </div>
      </div>
      <div className="footer3 mirror3 font4">More projects (pdf)</div>
    </div>
  );
}

export default App;
