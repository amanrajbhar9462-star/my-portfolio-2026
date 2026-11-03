import c from "./assets/c.png";
import css from "./assets/css.png";
import devices from "./assets/devices.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import sql from "./assets/sql.png";
import "./Skill.css";

function Skill() {
  const skills = [
    { name: "HTML", percentage: 95, image: html, className: "d1" },
    { name: "CSS", percentage: 85, image: css, className: "d2" },
    { name: "JavaScript", percentage: 80, image: js, className: "d3" },
    { name: "SQL", percentage: 65, image: sql, className: "d4" },
    { name: "React", percentage: 60, image: react, className: "d5" },
    { name: "Python", percentage: 70, image: python, className: "d6" },
    { name: "C", percentage: 80, image: c, className: "d7" },
    {
      name: "Responsive Design",
      percentage: 95,
      image: devices,
      className: "d8",
    },
  ];

  return (
    <div className="bige">
      <h1>My Skills</h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className={skill.className} key={skill.name}>
            {/* <img src={skill.image} alt={skill.name} />*/}

            <div className="skill-details">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
