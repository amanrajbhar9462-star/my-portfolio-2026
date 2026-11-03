import "./Project.css";
function Project() {
  return (
    <div className="project">
      <h1>Project</h1>

      <h3 className="t">Personal Portfolio Website</h3>
      <h2 className="h">Weather-App</h2>
      <div className="pr">
        <div className="description">
          <p>
            I have built a personal portfolio website using React.js, HTML, CSS,
            and JavaScript to showcase my skills, education, and projects. The
            website features a clean and modern design, smooth navigation,
            interactive elements, and a responsive layout for different screen
            sizes. This project helped me improve my frontend development skills
            and gain practical experience in building user-friendly web
            interfaces.
          </p>
          <a
            href="https://my-portfolio-2026-six-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            Go 👈
          </a>
        </div>

        <div className="w">
          <p>
            Developed a responsive weather application using React.js that
            allows users to search for any city and view real-time weather
            information. Key Features: Search weather information by city name.
            Display current temperature and weather conditions. Show humidity,
            wind speed, atmospheric pressure, . Display sunrise and sunset
            timings. Show rain probability.Integrated OpenWeatherMap API to
            fetch live weather data.
          </p>
          <a
            href="https://weather-app-delta-seven-21.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            Go 👈
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
