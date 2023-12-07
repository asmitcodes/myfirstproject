import React from "react";
import "./firstSection.css";
import designteam from "./designteam.png";
const FirstSection = () => {
  return (
    <div className="first-section-wrapper">
      <div className="flex make-center first-section max-width">
        <div className="first-heading ">
          Presenting{" "}
          <span>SAGE, Bhopal's</span>{" "}
          designing club:
          <div className="first-subheading scale-in-bottom">Designers' Den</div>
        </div>
        <div className="image-holder flex ">
          <img src={designteam} className="picture" alt="team" height={600} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
