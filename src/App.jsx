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
      favicon.href = "/Dev_Por/Gif.gif";
    }
  }, []);

  return (
    <>
      <Router>
        <SideNav />
        <Routes>
          <Route path="/Dev_Por/" element={<Home />} />
          <Route path="/Dev_Por/about" element={<About />} />
          <Route path="/Dev_Por/skills" element={<Skills />} />
          <Route path="/Dev_Por/projects" element={<Projects />} />
          <Route path="/Dev_Por/kinhnghiem" element={<KinhNghiem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
