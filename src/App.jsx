import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.title = "Shubham Yadav | Full Stack Developer";
  }, []);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
