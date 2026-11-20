import "./Experience.css";
function Experience() {
  return (
    <div className="ex">
      <h1>Internship</h1>
      <div className="int">
        <h2>Frontend Developer Intern</h2>

        <strong className="st">Krishna Institute</strong>

        <p className="duration">
          <strong>Duration:</strong> 4 Months
        </p>

        <p className="descriptio">
          <strong>Description:</strong>
          <span>
            Completed a 4-month Frontend Development Internship, where I gained
            practical experience in web development and worked with HTML, CSS,
            JavaScript, React.js, Node.js, MySQL, and Git & Hub.
          </span>
        </p>

        <h3>Projects Developed:</h3>

        <ul>
          <li>
            <strong>Weather App:</strong> Developed a weather application to
            display weather information.
          </li>
          <li>
            <strong>Personal Portfolio Website:</strong> Created a responsive
            portfolio to showcase my skills and projects.
          </li>
        </ul>

        <p>
          <strong>Technologies:</strong> HTML, CSS, JavaScript, React.js,
          Node.js, MySQL, Git & Hub.
        </p>
      </div>
    </div>
  );
}
export default Experience;
