import React from "react";
import "./blueSection.css";
import Button from "../common/buttons";
import bgblue from "./bgblue.png";

const BlueSection = () => {
  return (
    <div
      className="blue-section image-section"
      style={{ backgroundImage: `url(${bgblue})` }}
    >
      <div className="max-width">
        <div className="image-section-child blue-child">
          <div className="image-section-top scale-in-bottom">
            <div className="image-section-heading blue-heading">EVENTS</div>
            <div className="image-section-subheading">
              Amazing events organised by Designers' Den:
            </div>
            <div className="image-section-bottom scale-in-bottom">
              <div className="image-section-description blue-description">
                Event#1
              </div>
              <div className="image-section-description blue-description">
                Event#2
              </div>
              <div className="image-section-description blue-description">
                Event#3 etc
              </div>
              <div>
                <Button buttonText="View all events" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueSection;
