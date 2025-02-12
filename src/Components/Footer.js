import React from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';
import '../App.css'; // import the new CSS file

const Footer = () => {

  const image = require(`./${"Logo.png"}`)


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <Camera className="footer-logo-icon" />
              <span className="footer-logo-text"><i>AlexStudio</i></span>
            </div>
            <p className="footer-description">
              Capturing life's precious moments with artistic vision and technical excellence.
            </p>
            <div className="footer-Image">
              <img src={image} alt="Logo" className="footer-image" height="100px" width='100px' />
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-services">
              <li className="footer-service">Wedding Photography</li>
              <li className="footer-service">Portrait Sessions</li>
              <li className="footer-service">Event Coverage</li>
              <li className="footer-service">Commercial Shoots</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-social">
              <a href="https://www.instagram.com/alex___praveen/#" className="footer-social-link">
                <Instagram className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/alex___praveen/#" className="footer-social-link">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/alex___praveen/#" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alexstudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
