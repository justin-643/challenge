import React from 'react';
import { Camera, Award, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
            alt="Hero"
            className="hero-image"
          />
          </div>
        </div>
        
        <div className="hero-content">
          <div>
            <h1>Capturing Life's Beautiful Moments</h1>
            <p>Professional photography services for your special occasions</p>
            <a href="/contact">Book Now</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>We bring your memories to life through our lens</p>
        </div>

        <div className="grid">
          <div className="feature-card">
            <div className="icon-container">
              <Camera className="h-8 w-8" />
            </div>
            <h3>Professional Equipment</h3>
            <p>Using top-of-the-line cameras and lenses to ensure the highest quality photos</p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <Award className="h-8 w-8" />
            </div>
            <h3>15+ Years Experience</h3>
            <p>Extensive experience in various photography styles and events</p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <Heart className="h-8 w-8" />
            </div>
            <h3>Satisfaction Guaranteed</h3>
            <p>We ensure you're completely happy with your photos</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-section">
        <div className="section-title">
          <h2>Recent Work</h2>
          <p>A glimpse into our photography portfolio</p>
        </div>

        <div className="gallery-grid">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
            alt="Wedding"
            className="gallery-item"
          />
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
            alt="Portrait"
            className="gallery-item"
          />
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
            alt="Event"
            className="gallery-item"
          />
        </div>

        <div className="view-all">
          <a href="/services">
            View All Work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
