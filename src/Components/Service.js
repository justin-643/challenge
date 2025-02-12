import React from 'react';
import { Camera, Users, Building2, Calendar } from 'lucide-react';
import '../App.css'; // import the new CSS file

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Wedding Photography',
      description: 'Capturing your special day with elegance and style. Complete coverage from preparation to reception.',
      price: 'Starting at ₹205,500',
      features: [
        '8 hours of coverage',
        'Two photographers',
        'Online gallery',
        'High-resolution images',
        'Engagement session'
      ]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Portrait Sessions',
      description: 'Professional portraits for individuals, families, or groups in studio or location of your choice.',
      price: 'Starting at ₹80,999',
      features: [
        '1-2 hour session',
        'Multiple outfit changes',
        'Professional editing',
        'Digital downloads',
        'Print release'
      ]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Event Coverage',
      description: 'Professional photography for corporate events, parties, and special occasions.',
      price: 'Starting at ₹59,999',
      features: [
        '4 hours of coverage',
        'Event highlights',
        'Quick turnaround',
        'Professional editing',
        'Digital delivery'
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Photography',
      description: 'High-quality commercial photography for businesses, products, and marketing materials.',
      price: 'Custom Quote',
      features: [
        'Product photography',
        'Corporate headshots',
        'Architecture shots',
        'Marketing materials',
        'Commercial license'
      ]
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <div className="text-center">
            <h1 className="section-title">Our Services</h1>
            <p className="section-description">
              Professional photography services tailored to your needs. From weddings to commercial shoots,
              we deliver exceptional quality and memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="section-container">
          <div className="grid-container">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-content">
                  <div className="service-icon-container">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <p className="service-price">{service.price}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <svg className="check-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-footer">
                  <a
                    href="/contact"
                    className="book-now-btn"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
