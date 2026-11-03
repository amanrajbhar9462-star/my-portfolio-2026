import "./Home.css";
import Oi from "./assets/Oi.png";
import Oip from "./assets/Oip.png";
function Home() {
  return (
    <div className="home-container">
      {/* <nav className="home-navbar"> 
        <a href="#home" className="active">
          HOME
        </a>
        <a href="#about">ABOUT</a>
        <a href="#education">EDUCATION</a>
        <a href="#skill">SKILL</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </nav>*/}

      <div className="home-content">
        <div className="home-text">
          <h3>
            Hi! I Am <span>Aman Kumar</span>
          </h3>

          <h1>
            Frontend <span>Developer</span>
          </h1>

          <p>
            Hi, I'm a passionate Frontend Developer skilled in HTML, CSS,
            JavaScript, and React.js. I love creating responsive, user-friendly,
            and visually appealing websites.
          </p>
        </div>

        <div className="home-image">
          <div className="image-circle">
            <img src={Oip} alt="Oip" />
            <img className="second-img" src={Oi} alt="Oi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
