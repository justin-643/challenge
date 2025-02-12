import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import '../App.css'; // import the new CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="navbar-link">
              <Camera className="navbar-logo-icon" />
              <span className="navbar-logo-text">AlexStudio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar-link-desktop ${
                  isActive(link.path) ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="navbar-mobile-button">
            <button onClick={() => setIsOpen(!isOpen)} className="navbar-button">
              {isOpen ? <X className="navbar-menu-icon" /> : <Menu className="navbar-menu-icon" />}
               </button>
               {/* This can be a navigation menu that will appear when the menu is open */}
        {isOpen && (
          <div className="navbar-menu">
            <Link to="/Login">Admin</Link>
          </div>
        )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar-link-mobile ${
                  isActive(link.path) ? 'active-mobile' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;