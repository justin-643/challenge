import React from 'react';
import { Camera, Award, Heart, Star } from 'lucide-react';
import Corousel from './Corosoul'


const About = () => {

  const imagePath = require(`./${"alexpic1.png"}`)


  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-overlay">
        <div className="absolute-image">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80"
            alt="Photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-description">
              Passionate about capturing life's precious moments
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="story-content">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="section-text">
                Alex studio was Founded in 2023, Lens & Light has been at the forefront of professional photography,
                delivering exceptional quality and creating lasting memories for our clients.
              </p>
              <p className="section-text">
                Our journey began with a simple passion for photography and has evolved into a
                full-service studio known for its artistic vision and technical excellence.
              </p>
              <p className="section-text">
                We believe that every moment is worth capturing, and we take pride in our ability
                to tell your story through our lens.
              </p>
            </div>
            <div className="image-gallery">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
                alt="Studio"
                className="image-item"
              />
              <img
                src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80"
                alt="Equipment"
                className="image-item"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Corousel section */}
        <Corousel />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">1500+</div>
              <div className="stat-description">Happy Clients</div>
              <Heart className='A-Icon'/>
            </div>
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-description">Weddings Covered</div>
              <Star className='A-Icon' />
            </div>
            <div>
            
              <div className="stat-number">15+</div>
              <div className="stat-description">Years Experience</div>
              <Camera className='A-Icon'/>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-description">Awards Won</div>
              <Award className='A-Icon'/>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="team-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="team-description">
              Professional photographers dedicated to excellence
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <img
                src={imagePath}
                alt="ALex"
                className="team-member-photo"
              />
              <h3 className="team-member-name">Alex Praveen</h3>
              <p className="team-member-role">Lead Photographer</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
