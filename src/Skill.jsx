import "./Skill.css";

function Skill() {
  const skills = [
    { name: "HTML", percentage: 95, className: "d1" },
    { name: "CSS", percentage: 85, className: "d2" },
    { name: "JavaScript", percentage: 80, className: "d3" },
    { name: "SQL", percentage: 65, className: "d4" },
    { name: "React", percentage: 60, className: "d5" },
    { name: "Python", percentage: 40, className: "d6" },
    { name: "C", percentage: 80, className: "d7" },
    {
      name: "Responsive Design",
      percentage: 95,

      className: "d8",
    },
    { name: "WordPress", percentage: 55, className: "d9" },
  ];

  return (
    <div className="bige">
      <h1>My Skills</h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className={skill.className} key={skill.name}>
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
