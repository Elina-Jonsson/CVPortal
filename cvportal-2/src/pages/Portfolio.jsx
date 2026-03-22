import "./Portfolio.css";
import fourFinance from "../assets/fourfinance3.png";
import highschool from "../assets/highschool3.png";
import panik from "../assets/panik2.png";
import xmas from "../assets/xmas-pic2.png";
import { useState, useEffect } from "react";


function Portfolio() {
  const projectData = {
    fourfinance: { image: fourFinance },
    highschool: { image: highschool },
    panik: { image: panik },
    xmas: { image: xmas },
  };

  const projectInfo = {
    fourfinance: {
      title: "FourFinance",
      description:
        "A banking app that helps users manage savings and track expenses.",
    },
    highschool: {
      title: "Highschool",
      description:
        "A program to help admin organize students, classes, teachers etc.",
    },
    panik: {
      title: "P-anik",
      description:
        "A smart parking app that helps users find available parking spots.",
    },
    xmas: {
      title: "X-mas Games",
      description: "A fun Christmas-themed game built with Jonna.",
    },
  };

  const repoMap = {
    "FourFinance": "fourfinance",
    "HighSchool.Labb3": "highschool",
    "Panik": "panik",
    "XmasGames": "xmas",
  };

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Elina-Jonsson/repos")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((repo) => repoMap[repo.name]);
        setProjects(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main>
      <section className="portfolio">
        <h2>My projects</h2>
        <p>
          Check out some of my projects down below, or all of them on my {" "}
          <a
            href="https://github.com/Elina-Jonsson?tab=repositories"
            target="_blank"
          >
            GitHub page.
          </a>
        </p>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project) => {
            const key = repoMap[project.name];
            if (!key) return null;
            const extra = projectData[key];

            return (
              <article key={project.id}>
                <h3>{projectInfo[key].title}</h3>
                <p>Language: {project.language || "Not specified"}</p>

                <img src={extra.image} alt={project.name} />
                
                <p className="project-description">
                  {projectInfo[key].description}
                </p>
              </article>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Portfolio;


