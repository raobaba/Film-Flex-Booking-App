import React from 'react';
import './BottomNav.css';

function BottomNav() {
  return (
    <div className="bottom-nav-container">
      <div className="left-section">
        <button className="nav-button">Movies</button>
        <button className="nav-button">Streams</button>
        <button className="nav-button">Events</button>
        <button className="nav-button">Plays</button>
        <button className="nav-button">Sports</button>
        <button className="nav-button">Activities</button>
      </div>
      <div className="right-section">
        <button className="nav-button">LiveYourShow</button>
        <button className="nav-button">Corporates</button>
        <button className="nav-button">Offers</button>
        <button className="nav-button">Gift Cards</button>
      </div>
    </div>
  );
}

export default BottomNav;
