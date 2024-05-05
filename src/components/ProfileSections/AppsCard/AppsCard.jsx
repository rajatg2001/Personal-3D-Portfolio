import React from "react";
import playStoreIcon from "../../../../public/linkedin.webp";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./AppsCard.css";

const AppsCard = () => {
  return (
    <div  className="apps-card-wrapper">
      <div className="apps-card-upper">
        <div className="apps-card-image-placeholder">
          <img src={playStoreIcon} alt="Car icon" />
        </div>
        <div className="apps-card-title-description">
          <div className="apps-card-title">LinkedIn</div>
          <div className="apps-card-description">
            Check Out My LinkedIn Profile
          </div>
        </div>
      </div>
      <div className="apps-card-show-projects">
        <a
          href="https://www.linkedin.com/in/rajat-gupta-3b8b52257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button >Go to LinkedIn Page</button>
        </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default AppsCard;