import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Education from "./Education";

import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";

function App() {
  return (
    <div className="main-container">
      <nav className="home-navbar">
        <a href="#home" className="active">
          HOME
        </a>
        <a href="#about">ABOUT</a>
        <a href="#education">EDUCATION</a>
        <a href="#skill">SKILL</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
