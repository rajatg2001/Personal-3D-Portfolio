import React from "react";
import playStoreIcon from "../../../public/play_store.png";
import githubIcon from "../../../public/github.svg";
import pglifeIcon from "../../../public/pglifeIcon.pmg.jpg";
import pglifeCard from "../../../public/pglife_card.png";
import amazonIcon from "../../../public/amazonIcon.png";
import amazonCard from "../../../public/amazonCard.png";
import UIUXIcon from "../../../public/UIUXIcon.png";
import UIUXCard from "../../../public/UIUXCard.png";
import portfolioIcon from "../../../public/logo.png";
import portfolioCard from "../../../public/portfolio.card.png";
import artFolioIcon from "../../../public/artFolioIcon.png";
import artFolioCard from "../../../public/artFolioCard.png";
import shikshadhikarIcon from "../../../public/shikshadhikarIcon.jpg";
import shikshadhikarCard from "../../../public/shikshadhikarCard.png";
import pythonIcon from "../../../public/pythonIcon.png";
import pythonCard from "../../../public/pythonCard.png";
import javaIcon from "../../../public/javaIcon.png";
import javaCard from "../../../public/javaCard.png";
import { mediaConstants } from "../../config/mediaConstants.js";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      imgSrc: portfolioCard,
      thumbSrc: portfolioIcon,
      title: "Personal 3D Portfolio",
      tech: ["React", "Three.js","Vite", "React Three Fiber"],
      livelink : "https://rajat-3d-portfolio.netlify.app/",
      github : "https://github.com/rajatg2001/Personal-3D-Portfolio"
    },
    {
      imgSrc: pglifeCard,
      thumbSrc: pglifeIcon,
      title: "PG Life Full stack website",
      tech: ["HTML/CSS", "Bootstrap", "React", "DBMS"],
      livelink : "https://rajatg2001.github.io/PG-LIfe-website/",
      github : "https://github.com/rajatg2001/PG-LIfe-website"
    },
    {
      imgSrc: amazonCard,
      thumbSrc: amazonIcon,
      title: "Amazon Clone",
      tech: ["HTML", "CSS", "Tailwind", "Figma"],
      livelink : "https://rajatg2001.github.io/AmazonClone/",
      github : "https://github.com/rajatg2001/AmazonClone"
    },
    {
      imgSrc: UIUXCard,
      thumbSrc: UIUXIcon,
      title: "UI/UX Design Nike Website",
      tech: ["UI", "UX", "Figma", "PhotoEditor"],
      livelink : "https://www.figma.com/file/yEB2L0pPhBJQFYB1GVsuWr/Nike-Site?type=design&node-id=0%3A1&mode=design&t=foVgLa9kl7M7ap1T-1",
      github : "https://www.figma.com/file/yEB2L0pPhBJQFYB1GVsuWr/Nike-Site?type=design&node-id=0%3A1&mode=design&t=foVgLa9kl7M7ap1T-1"
    },
    {
      imgSrc: artFolioCard,
      thumbSrc: artFolioIcon,
      title: "Team Project : ArtFolio : virtual art gallery",
      tech: ["Django", "TailWind", "HTML/CSS", "Figma"],
      livelink : "https://divyansh36.pythonanywhere.com/",
      github : "https://github.com/rajatg2001/ArtFolio"
    },
    {
      imgSrc: shikshadhikarCard,
      thumbSrc: shikshadhikarIcon,
      title: "Team Project : Shikshadhikar: Online Free Learning Resource Library",
      tech: ["JS", "Figma", "Canva", "HTML/CSS"],
      livelink : "https://rajatg2001.github.io/Shikshadhikar/",
      github : "https://github.com/rajatg2001/Shikshadhikar"
    },
    {
      imgSrc: pythonCard,
      thumbSrc: pythonIcon,
      title: "Python Projects : Some GUI projects and data analytic projects",
      tech: ["Python", "Numpy", "Pandas", "Tkinter"],
      livelink : "https://github.com/rajatg2001/Python-Projects",
      github : "https://github.com/rajatg2001/Python-Projects"
    },
    {
      imgSrc: javaCard,
      thumbSrc: javaIcon,
      title: "Java Projects : Pong Game and Snake Game",
      tech: ["Java", "Swing", "AWT", "Math"],
      livelink : "https://github.com/rajatg2001/Pong-Game",
      github : "https://github.com/rajatg2001/Snake-Game"
    },
  ];

  return (
    <div className="project-card-container">
      <div className="logo-container">
      <img src={mediaConstants.logo} alt="Rajat Gupta" />
      </div>
      <h1 className="page-title">My Favorite Projects</h1>
      <ul className="cards">
        {projectData.map((project, index) => (
          <>
            <li>
              <div className="card">
                <img src={project.imgSrc} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src={project.thumbSrc}
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{project.title}</h3>
                      <div className="tech-used">
                        {project.tech.map((tech, index) => (
                          <span className="tech" key={index}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    {(project.imgSrc===pythonCard || project.imgSrc===javaCard) && (<a href={project.livelink} className="button playstore">
                      <img src={githubIcon} alt="GitHub Icon" />
                      Code Link 1
                    </a>)}
                    {(project.imgSrc===pythonCard || project.imgSrc===javaCard) && (<a href={project.github} className="button github">
                      <img src={githubIcon} alt="GitHub Icon" />
                      Code Link 2
                    </a>)}
                    {(project.imgSrc!=pythonCard && project.imgSrc!=javaCard) && (<a href={project.livelink} className="button playstore">
                      <img src={playStoreIcon} alt="Play Store Icon" />
                      Live Link
                    </a>)}
                    {(project.imgSrc!=pythonCard && project.imgSrc!=javaCard) && (<a href={project.github} className="button github">
                      <img src={githubIcon} alt="GitHub Icon" />
                      Code Link
                    </a>)}
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
      </div>
  );
};

export default Projects;
