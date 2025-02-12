import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import Map from './Map'

const apiUrl = 'https://alex-studio643-default-rtdb.asia-southeast1.firebasedatabase.app/';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    date: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(''); // To hold submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // To track if the form is being submitted

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true when form is being submitted

    try {
      const response = await axios.post(
        `${apiUrl}/Bookings.json`, 
        formData
      );
      console.log("Data submitted successfully: ", response.data);
      
      // After submission, set the confirmation message
      setSubmissionStatus('Your booking is confirmed - Our team will contact you soon, thank you!❤️');

      // Clear the form fields by resetting the state
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        date: ''
      });
      
    } catch (error) {
      console.error("Error sending data to Firebase: ", error);
      setSubmissionStatus('Sorry, there was an issue with your submission. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset the isSubmitting state
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      {/* Contact Header */}
      <section className="contact-header">
        <div className="section-container">
          <div className="text-center">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-description">
              Have a question or want to book a session? We'd love to hear from you.
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-info-form">
        <div className="section-container">
          <div className="grid-container">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="section-subtitle">Get in Touch</h2>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <Phone className="icon" />
                  <div>
                    <h3 className="contact-info-title">Phone</h3>
                    <p className="contact-info-text">+91 7287843628</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail className="icon" />
                  <div>
                    <h3 className="contact-info-title">Email</h3>
                    <p className="contact-info-text">Alexpraveen@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MapPin className="icon" />
                  <div>
                    <h3 className="contact-info-title">Studio Location</h3>
                    <p className="contact-info-text">
                      Beside More supermarket, Amoor<br />
                      Nizamabad, Telangana 503001
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Clock className="icon" />
                  <div>
                    <h3 className="contact-info-title">Business Hours</h3>
                    <p className="contact-info-text">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              {submissionStatus && (
                <div className="confirmation-message">
                  <h2>{submissionStatus}</h2>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="Birthday">Birthday Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Coverage</option>
                    <option value="commercial">Commercial Photography</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Our Studio</h2>
            <p className="section-description">
              Come see us in person and discuss your photography needs.
            </p> <br />
          </div>
          <div className="map-container">
            {/* Add your map integration here */}
            <Map />
            <div className="map-placeholder">
 
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
