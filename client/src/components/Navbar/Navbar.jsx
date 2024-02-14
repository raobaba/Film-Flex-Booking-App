import React from "react";
import "./Navbar.css";
import { SlMenu } from "react-icons/sl";

import { GoSearch } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <div className="brand">
          <span>
            Film<span>Flex</span>Book
          </span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search here..." />
          <GoSearch className="search-icon" />
        </div>
      </div>
      <div className="right-side">
        <div className="location">
          <p className="location-text">Delhi,NCR</p>
          <FaLocationDot />
        </div>
        <div className="sign-in">
          <button>Sign In</button>
        </div>
        <div className="menu-icon">
          <SlMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
