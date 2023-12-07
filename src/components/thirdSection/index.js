import React from "react";
import "./thirdSection.css";
import bgpink from "./bgpink.png";
import Button from "../common/buttons";

const ThirdSection = () => {
  return (
    <div
      className="third-section image-section  "
      style={{ backgroundImage: `url(${bgpink})` }}
    >
      <div className="max-width">
        <div className="image-section-child  ">
          <div className="image-section-top">
            <div className="image-section-heading">ABOUT</div>
            <div className="image-section-subheading scale-in-bottom">
              Designers' Club is an interdisciplinary club that will help
              students develop their skills in the designing and coding field.
            </div>
            <div className="image-section-bottom scale-in-bottom">
              <div className="image-section-description">
                -Making students used to the software which are essential in the
                design industry. <br /> -Preparing students from scratch to
                advanced level.
              </div>
            </div>
            <div className="scale-in-bottom">
              <Button buttonText="Know more about us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
