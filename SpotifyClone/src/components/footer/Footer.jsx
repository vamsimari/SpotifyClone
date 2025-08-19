import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footerSectionMainContainer">
      <div className="footerContent">
        <div className="footerText">
          <strong>Preview of Spotify</strong> <br />
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </div>
        <button className="footerButton">Sign up free</button>
      </div>
    </div>
  );
};

export default Footer;
