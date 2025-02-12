import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '400px', // Adjust the height as needed
          overflow: 'hidden',
          border: 'none',
        }}
      >
        <iframe
          title="Google Maps Embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.336401343979!2d78.29523687510329!3d18.783155761100833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177cf5e324649a37%3A0xf28bc2d755daa6f1!2sMore%20Supermarket%20-%20Armoor%20Nizamabad!5e0!3m2!1sen!2sin!4v1739130070657!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
