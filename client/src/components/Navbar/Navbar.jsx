// Navbar.js

import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { SlMenu } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import SignInModal from "../Auth/Login";
import BottomNav from "./BottomNav";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
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
          <button onClick={openSignInModal}>Sign In</button>
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          <SlMenu />
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          {/* Sidebar content goes here */}
          <p>Location</p>
          <p>Sign In</p>
          {/* Add more sidebar items as needed */}
        </div>
      )}

      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
    
    </div>
      <BottomNav/>
      </>
  );
}

export default Navbar;
