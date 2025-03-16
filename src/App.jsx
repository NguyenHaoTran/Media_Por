import "./styles/main.scss";
import "./App.scss";
import SideNav from "./Components/side_Nav/SideNav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About.jsx";
import KinhNghiem from "./Components/KinhNghiem/KinhNghiem.jsx";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import { useEffect } from "react";
// remix icons
import "remixicon/fonts/remixicon.css";

//

function App() {
  useEffect(() => {
    const favicon = document.getElementById("dynamic-favicon");

    if (favicon) {
      favicon.href = "/Gif.gif";
    }
  }, []);

  return (
    <>
      <Router>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/kinhnghiem" element={<KinhNghiem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
