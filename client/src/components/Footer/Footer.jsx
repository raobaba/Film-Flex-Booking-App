// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Our Cinema</h2>
          <p>
            Explore the world of cinema with our diverse range of movies. Immerse yourself in captivating stories and unforgettable experiences.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h2>Explore</h2>
          <ul>
            <li><a href="#">Now Showing</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Special Events</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Get in Touch</h2>
          <p>
            Have questions or suggestions? Connect with us for assistance.
          </p>
          <div className="contact-icons">
            <a href="#" className="icon-link"><i className="fa fa-envelope"></i></a>
            <a href="#" className="icon-link"><i className="fa fa-phone"></i></a>
            <a href="#" className="icon-link"><i className="fa fa-map-marker"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Our Cinema. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
