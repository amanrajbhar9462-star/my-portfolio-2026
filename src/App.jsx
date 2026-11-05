import { useState } from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Education from "./Education";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="main-container">
      <nav className="home-navbar">
        {["home", "about", "education", "skill", "project", "contact"].map(
          (page) => (
            <a
              key={page}
              href="#"
              className={activePage === page ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage(page);
              }}
            >
              {page.toUpperCase()}
            </a>
          ),
        )}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      </nav>

      <div className="page-content">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "education" && <Education />}
        {activePage === "skill" && <Skill />}
        {activePage === "project" && <Project />}
        {activePage === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
