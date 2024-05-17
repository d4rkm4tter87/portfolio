import { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Home from "./components/Home";
import TsumegoHero from "./components/TsumegoHero";
import CityDating from "./components/CityDating";
import GoBremen from "./components/GoBremen";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Certificates from "./components/Certificates";

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
      <Menu2 />
      <Menu
        onPageClicked={(p) => {
          setPage(p);
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tsumegohero" element={<TsumegoHero />} />
        <Route path="gobremen" element={<GoBremen />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="projects" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
          <Route index element={<h3>Select👽</h3>} />
        </Route>
        <Route path="citydating" element={<CityDating />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

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
