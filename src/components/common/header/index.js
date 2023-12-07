import React, { useState } from "react";
import "./header.css";
import deslogo from "./deslogo.png";

const Header = () => {
  const [onMenu, setOnMenu] = useState(false);

  const toggleMenu = () => {
    setOnMenu(!onMenu);
  };

  return (
    <div className="menu-wrapper">
      <div className={`mobile-menu only-mobile ${onMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">Home</div>
          <div className="mobile-nav-item">About</div>
          <div className="mobile-nav-item">Events</div>
          <div className="mobile-nav-item">Team</div>
          <div className="mobile-nav-item">Contact</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img src={deslogo} alt="logo" className="header-logo" />
        <div className="only-mobile mobile-menu-button">
          <button
            class={`hamburger hamburger--spin ${onMenu ? "is-active" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="not-mobile flex">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Events</div>
          <div className="nav-item">Team</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
