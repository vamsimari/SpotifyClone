// src/components/navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';  // We'll add the styles next

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Spotify Logo */}
      <a href="/" className="logo">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
             alt="Spotify Logo"/>
      </a>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Your Library</a>
      </div>

      {/* Right Side: Support, Download, Login */}
      <div className="nav-actions">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <span className="divider">|</span>
        <a href="#">Sign up</a>
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
}

export default Navbar;
