import React from "react";
import "./purpleSection.css";
import Button from "../common/buttons";
import bgpurple from "./bgpurple.png";

const PurpleSection = () => {
  return (
    <div
      className="purple-section image-section"
      style={{ backgroundImage: `url(${bgpurple})` }}
    >
      <div className="max-width">
        <div className="image-section-child make-center flex">
          <div className="image-section-top scale-in-bottom">
            <div className="image-section-heading purple-heading">TEAM</div>
            <div className="image-section-subheading purple-subheading">
              Meet the lions and lionesses of Designers' Den
            </div>
            <div className="image-section-bottom scale-in-bottom">
              <div className="image-section-description purple-description">
                Member1
              </div>
              <div className="image-section-description purple-description">
                Member2
              </div>
              <div className="image-section-description purple-description">
                Member3
              </div>
              <div className="flex make-center">
                <Button buttonText="View all members" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleSection;
