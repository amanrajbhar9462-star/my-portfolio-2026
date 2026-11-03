import "./Header.css";
function Header() {
  return (
    <div className="big-div">
      <div className="logo-img">
        <img
          src="https://abhishek9503.vercel.app/assets/logo-780c3a48.png"
          alt=""
          height="100px"
          width="auto"
        />

        <h2>Front end Developer</h2>
      </div>

      <div>
        <ul className="list-itm">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#skill">Skill</a>
          </li>

          <li>
            <a href="#project">Project</a>
          </li>

          <li>
            <a href="#experience"> Work Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
