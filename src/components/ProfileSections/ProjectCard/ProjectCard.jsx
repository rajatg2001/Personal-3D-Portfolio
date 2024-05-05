import React from "react";
import galleryIcon from "../../../../public/gallery.jpg";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
      <div className="project-card-wrapper">
      <div className="project-card-upper">
        <div className="project-card-image-placeholder">
          <img src={galleryIcon} alt="Gallery icon" />
        </div>
        <div className="project-card-title-description">
          <div className="project-card-title">Link to my Resume</div>
          <div className="project-card-description">
            <p>Here is a detailed resume with all my skills and interests.</p>
          </div>
        </div>
      </div>
      <div className="project-card-show-projects">
        <a
          href="https://drive.google.com/file/d/1B0TaO-NVW6Q5bw9vhqbNpdeU58hg76hl/view?usp=sharing"
          target="_blank"
          style={{ color : 'black' }}
        >
          Show Resume
        </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default ProjectCard;